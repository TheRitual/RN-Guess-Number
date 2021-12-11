import React, { useState } from 'react';
import { Text, View } from 'react-native';
import NumberContainer from '../../common/components/NumberContainer';
import generateRandomBetween from './generateRandomBetween';
import styles from './styles';

const GameScreen = () => {
    const [computerGuess, setComputerGuess] = useState(generateRandomBetween(0, 99));
    return (
        <View style={styles.container}>
            <Text>Computer Guessed:</Text>
            <NumberContainer>{computerGuess}</NumberContainer>
        </View>
    );
}

export default GameScreen;