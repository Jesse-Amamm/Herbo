import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Splash extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../logo.png')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28B564',
        alignItems: 'center',
        justifyContent: 'center',
    },
});