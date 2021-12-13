import React from 'react';
import { Text, View } from 'react-native';
import Card from '../../../common/components/Card';
import NumberContainer from '../../../common/components/NumberContainer';
import styles from '../styles';

const GuessCards = ({ playersGuess, computersGuess }) => {
    return (
        <View style={styles.guessCardsContainer}>
            <Card style={styles.guessCard}>
                <Text style={styles.info}>Guess:</Text>
                <NumberContainer>{playersGuess}</NumberContainer>
            </Card>
            <Card style={styles.guessCard}>
                <Text style={styles.info}>Guess:</Text>
                <NumberContainer>{computersGuess}</NumberContainer>
            </Card>
        </View>

    );
}

export default GuessCards;