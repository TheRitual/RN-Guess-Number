import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import Card from '../../common/components/Card';
import { GAME_STATUS, GUESS_STATUS } from './consts';
import generateRandomBetween from './generateRandomBetween';
import styles from './styles';
import GuessCards from './GuessCards';
import BigButton from './BigButton';
import GuessInputCard from './GuessInputCard';
import PlayerNamesCards from './PlayerNamesCards';


const GameScreen = ({ onStopGame, playersNumber }) => {
    const [computersGuess, setComputersGuess] = useState(null);
    const [computersNumber, setComputerNumber] = useState(generateRandomBetween(0, 99));
    const [computerMinMax, setComputerMinMax] = useState({ min: 0, max: 99 });
    const [playersGuess, setPlayersGuess] = useState(null);
    const [round, setRound] = useState(1);
    const [isPlayerGuessing, setIsPlayerGuessing] = useState(true);
    const [inputValue, setInputValue] = useState("");
    const [guessStatus, setGuessStatus] = useState({ player: "", computer: "" })

    const setMin = (min) => {
        setComputerMinMax({ min: min, max: computerMinMax.max });
    }

    const setMax = (max) => {
        setComputerMinMax({ min: computerMinMax.min, max: max });
    }

    const guessHandler = () => {
        const selected = parseInt(inputValue);

        if (isNaN(selected) || selected < 0 || selected > 99) {
            Alert.alert(
                "Invalid Number!",
                "Number has to be a number between 0 and 99",
                [{ text: "Okay!", style: 'destructive', onPress: () => setInputValue("") }]
            );
            return;
        }

        setPlayersGuess(selected);
        const computerSelected = generateRandomBetween(computerMinMax.min, computerMinMax.max);
        setComputersGuess(computerSelected);

        let playerStatus = "";
        let computerStatus = "";

        switch (true) {
            case selected > computersNumber:
                playerStatus = GUESS_STATUS.LOWER; break;
            case selected < computersNumber:
                playerStatus = GUESS_STATUS.HIGHER; break;
            case selected === computersNumber:
                playerStatus = GUESS_STATUS.EQUAL; break;
        }

        switch (true) {
            case computerSelected > playersNumber:
                computerStatus = GUESS_STATUS.LOWER;
                setMax(computerSelected - 1);
                break;
            case computerSelected < playersNumber:
                computerStatus = GUESS_STATUS.HIGHER;
                setMin(computerSelected + 1);
                break;
            case computerSelected === playersNumber:
                computerStatus = GUESS_STATUS.EQUAL; break;
        }

        setGuessStatus({ player: playerStatus, computer: computerStatus });

        setIsPlayerGuessing(false);
    }

    const nextRoundHandler = () => {
        setInputValue("");
        setRound(round + 1);
        setComputersGuess(generateRandomBetween(computerMinMax.min, computerMinMax.max));
        setPlayersGuess(null);
        setIsPlayerGuessing(true);
    }

    const getGameStatus = () => {
        if (guessStatus.player !== GUESS_STATUS.EQUAL && guessStatus.computer !== GUESS_STATUS.EQUAL) {
            return GAME_STATUS.ON_GOING;
        }
        if (guessStatus.player === GUESS_STATUS.EQUAL && guessStatus.computer === GUESS_STATUS.EQUAL) {
            return GAME_STATUS.DRAW;
        }
        if (guessStatus.computer === GUESS_STATUS.EQUAL) {
            return GAME_STATUS.COMPUTER_WON;
        }
        return GAME_STATUS.PLAYER_WON;
    }

    return (
        <View style={styles.container}>
            <GuessInputCard
                visible={isPlayerGuessing}
                inputValue={inputValue}
                guessHandler={guessHandler}
                round={round}
                onInputChange={setInputValue} />

            <Text style={styles.roundText}>ROUND {round}</Text>

            <PlayerNamesCards getGameStatus={getGameStatus} computersNumber={computersNumber} playersNumber={playersNumber} />

            <GuessCards playersGuess={playersGuess} computersGuess={computersGuess} />

            <View style={styles.guessCardsContainer}>
                <Card style={guessStatus.player === GUESS_STATUS.EQUAL ? styles.correctCard : styles.wrongCard}>
                    <Text style={styles.tip}>{guessStatus.player}</Text>
                </Card>
                <Card style={guessStatus.computer === GUESS_STATUS.EQUAL ? styles.correctCard : styles.wrongCard}>
                    <Text style={styles.tip}>{guessStatus.computer}</Text>
                </Card>
            </View>

            <BigButton nextRoundHandler={nextRoundHandler} gameStatus={getGameStatus()} onStopGame={onStopGame} />

        </View>
    );
}

export default GameScreen;