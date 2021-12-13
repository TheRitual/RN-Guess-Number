import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Card from '../../../common/components/Card';
import { GAME_STATUS } from '../consts';
import styles from "../styles";
import MovesList from './MovesList';

const PlayerNamesCards = ({ getGameStatus, computersNumber, playersNumber, playerMoves, computerMoves }) => {

    const [playerMovesVisible, setPlayerMovesVisible] = useState(false);
    const [computerMovesVisible, setComputerMovesVisible] = useState(false);

    return (
        <>
            <MovesList title={"Your Moves"} moves={playerMoves} visible={playerMovesVisible} onClose={() => setPlayerMovesVisible(false)} />
            <MovesList title={"CPU's Moves"} moves={computerMoves} visible={computerMovesVisible} onClose={() => setComputerMovesVisible(false)} />
            <View style={styles.guessCardsContainer}>
                <Card style={styles.playerNameCard} onPress={() => setPlayerMovesVisible(true)}>
                    <Text style={styles.playerName}>
                        <MaterialIcons name="face" size={40} color="white" />
                    </Text>
                    <Text style={styles.playerName}>({getGameStatus() !== GAME_STATUS.ON_GOING ? computersNumber : '???'})</Text>
                </Card>
                <Card style={styles.playerNameCard} onPress={() => setComputerMovesVisible(true)}>
                    <Text style={styles.playerName}>
                        <MaterialIcons name="computer" size={40} color="white" />
                    </Text>
                    <Text style={styles.playerName}>({playersNumber})</Text>
                </Card>
            </View>
        </>
    );
}

export default PlayerNamesCards;