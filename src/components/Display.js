/* eslint-disable prettier/prettier */

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default (props) => {
    return (
        <View style={style.display} >
            <Text style={style.displayValue} numberOfLines={1} >
                {props.value}
            </Text>
        </View>
    );
};

const style = StyleSheet.create({
    display: {
        flex: 5,
        padding: 20,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'flex-end',
    },
    displayValue: {
        fontSize: 60,
        color: '#fff',
    },
});
