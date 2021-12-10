import React, { useState } from 'react';
import { Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';
import Card from '../../common/components/Card';
import CustomButton from '../../common/components/CustomButton';
import Input from '../../common/components/Input';
import styles from './styles';

const StartGameScreen = () => {
    const [enteredValue, setEnteredValue] = useState(null);

    const numberInputHandler = val => {
        setEnteredValue(val.replace(/[^0-9]/g, ""));
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input
                        autoFocus
                        caretHidden
                        blurOnSubmit
                        keyboardType="numeric"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        style={styles.input}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <CustomButton style={styles.accentButton} title="Reset" />
                        <CustomButton style={styles.button} title="Confirm" />
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default StartGameScreen;