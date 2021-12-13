import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';

export const GUESS_STATUS = {
    LOWER: <MaterialCommunityIcons size={styles.tip.fontSize} name="arrow-down-bold-circle" color="black" />,
    HIGHER: <MaterialCommunityIcons size={styles.tip.fontSize} name="arrow-up-bold-circle" color="black" />,
    EQUAL: <MaterialCommunityIcons size={styles.tip.fontSize} name="cake" color="black" />,
}

export const GAME_STATUS = {
    PLAYER_WON: "You Won!",
    COMPUTER_WON: "Computer Won!",
    DRAW: "It is Draw!",
    ON_GOING: "ONGOING",
}