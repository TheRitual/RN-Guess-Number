import React, { useRef, useState } from 'react';
import { Alert, Modal, Text, View } from 'react-native';
import Card from '../../common/components/Card';
import Input from '../../common/components/Input';
import CustomButton from '../../common/components/CustomButton';
import NumberContainer from '../../common/components/NumberContainer';
import { GAME_STATUS, GUESS_STATUS } from './consts';
import generateRandomBetween from './generateRandomBetween';
import styles from './styles';

const GameScreen = ({ onStopGame, playersNumber }) => {
    let inputRef = useRef(null);
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
        const computerSelected = generateRandomBetween(computerMinMax.min, computerMinMax.max);

        if (isNaN(selected) || selected < 0 || selected > 99) {
            Alert.alert(
                "Invalid Number!",
                "Number has to be a number between 0 and 99",
                [{ text: "Okay!", style: 'destructive', onPress: () => setInputValue("") }]
            );
            return;
        }

        setPlayersGuess(selected);
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

    const changeGuessValueHandler = val => {
        setInputValue(val);
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

    const getBigButton = () => {
        if (getGameStatus() === GAME_STATUS.ON_GOING) {
            return (
                <>
                    <Card style={styles.nextRoundCard}>
                        <CustomButton
                            textStyle={styles.nextRoundButtonText}
                            style={styles.nextRoundButton}
                            onPress={nextRoundHandler}>
                            Next Round!
                        </CustomButton>
                    </Card>
                    <Card>
                        <CustomButton onPress={onStopGame}>Quit Game</CustomButton>
                    </Card>
                </>
            );
        }
        return (
            <>
                <Card style={styles.winnerCard}>
                    <Text style={styles.winner}>{getGameStatus()}</Text>
                </Card>
                <Card style={styles.nextRoundCard}>
                    <CustomButton
                        textStyle={styles.nextRoundButtonText}
                        style={styles.nextRoundButton}
                        onPress={onStopGame}>
                        Start New Game
                    </CustomButton>
                </Card>
            </>
        );
    }

    return (
        <View style={styles.container}>
            <Modal visible={isPlayerGuessing} onShow={() => inputRef.current.focus()}>
                <Card style={styles.guess}>
                    <Text style={styles.roundText}>ROUND {round}</Text>
                    <Text style={styles.info}>Your Guess:</Text>
                    <Input
                        caretHidden
                        blurOnSubmit
                        keyboardType="numeric"
                        maxLength={2}
                        style={styles.guessInput}
                        value={inputValue}
                        onChangeText={changeGuessValueHandler}
                        ref={inputRef}
                    />
                    <CustomButton
                        onPress={guessHandler}
                        textStyle={styles.guessButtonText}
                        style={styles.guessButton}>
                        Guess!
                    </CustomButton>
                </Card>
            </Modal>

            <Text style={styles.roundText}>ROUND {round}</Text>

            <View style={styles.guessCardsContainer}>
                <Card style={styles.playerNameCard}>
                    <Text style={styles.playerName}>YOU</Text>
                    <Text style={styles.playerName}>({getGameStatus() !== GAME_STATUS.ON_GOING ? computersNumber : '???'})</Text>

                </Card>
                <Card style={styles.playerNameCard}>
                    <Text style={styles.playerName}>COMPUTER</Text>
                    <Text style={styles.playerName}>({playersNumber})</Text>


                </Card>
            </View>

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

            <View style={styles.guessCardsContainer}>
                <Card style={guessStatus.player === GUESS_STATUS.EQUAL ? styles.correctCard : styles.wrongCard}>
                    <Text style={styles.tip}>{guessStatus.player}</Text>
                </Card>
                <Card style={guessStatus.computer === GUESS_STATUS.EQUAL ? styles.correctCard : styles.wrongCard}>
                    <Text style={styles.tip}>{guessStatus.computer}</Text>
                </Card>
            </View>

            {getBigButton()}

        </View>
    );
}

export default GameScreen;