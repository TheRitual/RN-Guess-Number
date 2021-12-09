import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import styles from "./styles";

const Main = () => {
    return (
        <View style={styles.container}>
            <Text>App Created</Text>
            <StatusBar style="auto" />
        </View>
    );
}

export default Main;