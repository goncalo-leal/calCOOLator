/* eslint-disable prettier/prettier */

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default (props) => {
    return (
        <View style={style.publicity}>
            <Text style={style.publicityText}>Publicity</Text>
        </View>
    );
};

const style = StyleSheet.create({
    publicity: {
        flex: 2,
        padding: 5,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.9)',
        alignItems: 'center',
    },
    publicityText: {
        fontSize: 20,
        color: '#888',
    },
});
