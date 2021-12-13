import React from 'react';
import { Text } from 'react-native';
import Card from '../../../common/components/Card';
import CustomButton from '../../../common/components/CustomButton';
import { GAME_STATUS } from '../consts';
import styles from '../styles';

const BigButton = ({ gameStatus, nextRoundHandler, onStopGame }) => {
    if (gameStatus === GAME_STATUS.ON_GOING) {
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
                <Text style={styles.winner}>{gameStatus}</Text>
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

export default BigButton;