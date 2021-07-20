/* eslint-disable prettier/prettier */

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default (props) => {
    return (
        <View style={style.memory}>
            <Text style={style.memoryText}>{props.memory}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    memory: {
        flex: 2,
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'flex-end',
    },
    memoryText: {
        color: '#fff',
        fontSize: 30,
    },
});
