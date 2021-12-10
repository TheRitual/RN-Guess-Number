import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import styles from './styles';

const StartGameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <View style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Reset"/></View>
                    <View style={styles.button}><Button title="Confirm"/></View>
                </View>
            </View>
        </View>
    );
}

export default StartGameScreen;