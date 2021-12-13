import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import Card from '../../../common/components/Card';
import { GAME_STATUS } from '../consts';
import styles from "../styles";

const PlayerNamesCards = ({ getGameStatus, computersNumber, playersNumber }) => {
    return (
        <View style={styles.guessCardsContainer}>
            <Card style={styles.playerNameCard}>
                <Text style={styles.playerName}>
                    <MaterialIcons name="face" size={40} color="white" />
                </Text>
                <Text style={styles.playerName}>({getGameStatus() !== GAME_STATUS.ON_GOING ? computersNumber : '???'})</Text>
            </Card>
            <Card style={styles.playerNameCard}>
                <Text style={styles.playerName}>
                    <MaterialIcons name="computer" size={40} color="white" />
                </Text>
                <Text style={styles.playerName}>({playersNumber})</Text>
            </Card>
        </View>
    );
}

export default PlayerNamesCards;