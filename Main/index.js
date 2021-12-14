import React, { useState } from 'react';
import { ScrollView, View, KeyboardAvoidingView } from 'react-native';
import Header from './Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import styles from './styles';

const Main = () => {
    const [userNumber, setUserNumber] = useState(null);

    const startGameHandler = selectedNumber => {
        setUserNumber(selectedNumber);
    }

    const stopGameHandler = () => {
        setUserNumber(null);
    }

    const content = userNumber ?
        <GameScreen playersNumber={userNumber} onStopGame={stopGameHandler} />
        :
        <StartGameScreen onStartGame={startGameHandler} />;

    return (
        <ScrollView>
            <View style={styles.screen}>
                <Header title="Guess a Number" />
                    {content}
            </View>
        </ScrollView>
    );
}

export default Main;