/* eslint-disable prettier/prettier */

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default (props) => {
    return (
        <View style={style.footer}>
            <View style={style.authorName}>
                <Text style={style.footerText}>Gonçalo Leal</Text>
            </View>
            <View style={style.authorGitHub}>
                <Text style={style.footerText}>GitHub: goncalo-leal</Text>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        flex: 1,
        padding: 5,
        justifyContent: 'center',
        backgroundColor: '#888',
    },
    footerText: {
        fontSize: 15,
        color: 'rgba(0,0,0,0.6)',
        fontWeight: 'bold',
    },
    authorName: {
        backgroundColor: '#888',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: 'rgba(0,0,0,0.6)',
    },
    authorGitHub: {
        backgroundColor: '#888',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 1,
        borderColor: 'rgba(0,0,0,0.6)',
    },
});
