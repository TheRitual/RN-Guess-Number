import React, { useState } from 'react';
import { View } from 'react-native';
import Header from './Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import styles from './styles';

const Main = () => {
    const [userNumber, setUserNumber] = useState(null);

    const startGameHandler = selectedNumber => {
        setUserNumber(selectedNumber);
    }

    return (
        <View style={styles.screen}>
            <Header title="Guess a Number" />
            {userNumber ? <GameScreen /> : <StartGameScreen onStartGame={startGameHandler} />}
        </View>
    );
}

export default Main;