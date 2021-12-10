import React from 'react';
import { Text, TextInput, View } from 'react-native';
import Card from '../../common/components/Card';
import CustomButton from '../../common/components/CustomButton';
import styles from './styles';

const StartGameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <CustomButton style={styles.button} title="Reset"/>
                    <CustomButton style={styles.button} title="Confirm"/>
                </View>
            </Card>
        </View>
    );
}

export default StartGameScreen;