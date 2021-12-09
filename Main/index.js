import React from 'react';
import { View } from 'react-native';
import Header from './Header';
import StartGameScreen from './screens/StartGameScreen';
import styles from './styles';

const Main = () => {
    return (
        <View style={styles.screen}>
            <Header title="Guess a Number" />
            <StartGameScreen />
        </View>
    );
}

export default Main;