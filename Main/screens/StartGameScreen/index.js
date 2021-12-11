import React, { useState } from 'react';
import { Alert, Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';
import Card from '../../common/components/Card';
import CustomButton from '../../common/components/CustomButton';
import Input from '../../common/components/Input';
import NumberContainer from '../../common/components/NumberContainer';
import styles from './styles';

const StartGameScreen = ({ onStartGame }) => {
    const [enteredValue, setEnteredValue] = useState(null);
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [confirmed, setConfirmed] = useState(false);

    const numberInputHandler = val => {
        setEnteredValue(val.replace(/[^0-9]/g, ""));
    }

    const resetInputHandler = () => {
        setEnteredValue("");
        setConfirmed(false);
    }

    const confirmInputHandler = () => {
        const selected = parseInt(enteredValue);
        if (isNaN(selected) || selected < 0 || selected > 99) {
            Alert.alert(
                "Invalid Number!",
                "Number has to be a number between 0 and 99",
                [{ text: "Okay!", style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }
        setConfirmed(true);
        setSelectedNumber(selected);
        setEnteredValue("");
        Keyboard.dismiss();
    }

    const startGame = () => {
        onStartGame(selectedNumber);
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text style={styles.info}>Select a Number</Text>
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
                        <CustomButton onPress={resetInputHandler} style={styles.accentButton} title="Reset" />
                        <CustomButton onPress={confirmInputHandler} style={styles.button} title="Confirm" />
                    </View>
                </Card>
                {confirmed &&
                    <Card style={styles.selectedNumberCard}>
                        <Text style={styles.info}>You Selected:</Text>
                        <NumberContainer>{selectedNumber}</NumberContainer>
                        <CustomButton style={styles.startGameButton} textStyle={styles.startGameButtonText} onPress={startGame}>Start Game!</CustomButton>
                    </Card>
                }
            </View>
        </TouchableWithoutFeedback>
    );
}

export default StartGameScreen;