/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import Button from './src/components/Button';
import Display from './src/components/Display';
import Footer from './src/components/Footer';
import Memory from './src/components/Memory';
import Publicity from './src/components/Publicity';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
  memory: '',
  cleanMemory: false,
};

class App extends Component {
  state = {
    ...initialState,
  };

  addDigit = (n) => {
    const value = this.state.displayValue;

    const clearDisplay = value === '0' || this.state.clearDisplay;

    if (!clearDisplay && (n === '.' && value.includes('.') || value.length === 10)) {
      return;
    }

    const currentValue = clearDisplay ? '' : value;
    let displayValue = currentValue;
    if (n === '.' && displayValue === '') {
        displayValue = '0' + n;
    }
    else {
      displayValue += n;
    }

    this.setState({displayValue: displayValue, clearDisplay: false});

    if (n !== '.') {
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[this.state.current] = newValue;
      this.setState({values});
    }
  };

  clearMemory = () => {
    this.setState({...initialState});
  };

  setOperation = (operation) => {
    if (this.state.current === 0) {

      let memory = !this.state.cleanMemory ? this.state.memory : '';
      memory += `${this.state.values[0]} ${operation} `;

      this.setState({operation: operation,
        current: 1,
        clearDisplay: true,
        memory: memory});
    }
    else if (this.state.current === 1) {
      const equals = operation === '=';
      const values = [...this.state.values];

      const cleanMemory = operation === '=';

      let memory = '';
      if (operation === '/' || operation === '*') {
        memory = '(' + this.state.memory + `${values[1]}) ${operation} `;
      }
      else {
        memory = this.state.memory + `${values[1]} ${operation} `;
      }

      if (memory.length > 30) {
        try {
          memory = `${eval(this.state.memory + `${values[1]}`)}` + ` ${operation} `;
        }
        catch (e) {
          memory = '';
        }
      }

      try {
        // eslint-disable-next-line no-eval
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`);
      }
      catch (e) {
        values[0] = this.state.values[0];
      }

      let exp = `${values[0]}`.length - 1;
      if (`${values[0]}`.length >= 10 && `${values[0]}`.includes('.')) {
        exp = `${values[0]}`.indexOf('.') - 1;
      }

      const toDisplay = `${values[0]}`.length >= 10 ?
        `${values[0]}`.replace('.', '').substring(0, 1) + '.'
          + `${values[0]}`.replace('.', '').substring(1, 7)
          + 'e' + `${exp}`
          : `${values[0]}`;

      values[1] = 0;
      this.setState({
        displayValue: toDisplay,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values: values,
        memory: memory,
        cleanMemory: cleanMemory,
      });
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.sectionContainer}>
        <Publicity />

        <Memory memory={this.state.memory}/>
        <Display value={this.state.displayValue} />

        {/* <Buttons> */}
        <View style={styles.buttons}>
          <Button label="AC" triple onClick={this.clearMemory} />
          <Button label="/" operation onClick={this.setOperation} />
          <Button label="7" onClick={this.addDigit} />
          <Button label="8" onClick={this.addDigit} />
          <Button label="9" onClick={this.addDigit} />
          <Button label="*" operation onClick={this.setOperation} />
          <Button label="4" onClick={this.addDigit} />
          <Button label="5" onClick={this.addDigit} />
          <Button label="6" onClick={this.addDigit} />
          <Button label="-" operation onClick={this.setOperation} />
          <Button label="1" onClick={this.addDigit} />
          <Button label="2" onClick={this.addDigit} />
          <Button label="3" onClick={this.addDigit} />
          <Button label="+" operation onClick={this.setOperation} />
          <Button label="0" double onClick={this.addDigit} />
          <Button label="." onClick={this.addDigit} />
          <Button label="=" operation onClick={this.setOperation} />
        </View>
        {/* </Buttons> */}

        <Footer />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default App;
