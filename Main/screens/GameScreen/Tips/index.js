import React from 'react';
import { Text, View } from 'react-native';
import Card from '../../../common/components/Card';
import { GUESS_STATUS } from '../consts';
import styles from '../styles';

const Tips = ({ guessStatus }) => {
    return (
        <View style={styles.guessCardsContainer}>
            <Card style={guessStatus.player === GUESS_STATUS.EQUAL ? styles.correctCard : styles.wrongCard}>
                <Text style={styles.tip}>{guessStatus.player}</Text>
            </Card>
            <Card style={guessStatus.computer === GUESS_STATUS.EQUAL ? styles.correctCard : styles.wrongCard}>
                <Text style={styles.tip}>{guessStatus.computer}</Text>
            </Card>
        </View>
    );
}

export default Tips;