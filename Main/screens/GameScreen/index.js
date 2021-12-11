import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Card from '../../common/components/Card';
import CustomButton from '../../common/components/CustomButton';
import NumberContainer from '../../common/components/NumberContainer';
import generateRandomBetween from './generateRandomBetween';
import styles from './styles';

const GameScreen = ({ onStopGame }) => {
    const [computerGuess, setComputerGuess] = useState(generateRandomBetween(0, 99));
    return (
        <View style={styles.container}>
            <Text>Computer Guessed:</Text>
            <NumberContainer>{computerGuess}</NumberContainer>
            <Card>
                <CustomButton onPress={onStopGame}>Quit Game</CustomButton>
            </Card>
        </View>
    );
}

export default GameScreen;