import React from 'react';
import { Text, TextInput, View } from 'react-native';
import Card from '../../common/components/Card';
import CustomButton from '../../common/components/CustomButton';
import Input from '../../common/components/Input';
import styles from './styles';

const StartGameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input
                    autoFocus={true}
                    caretHidden={true}
                    keyboardType="numeric"
                    style={styles.input}
                />
                <View style={styles.buttonContainer}>
                    <CustomButton style={styles.accentButton} title="Reset" />
                    <CustomButton style={styles.button} title="Confirm" />
                </View>
            </Card>
        </View>
    );
}

export default StartGameScreen;