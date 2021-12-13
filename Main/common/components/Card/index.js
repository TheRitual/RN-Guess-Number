import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';

const Card = props => {
    return (
        <TouchableWithoutFeedback onPress={props.onPress}>
            <View style={{ ...styles.card, ...props.style }}>
                {props.children}
            </View>
        </TouchableWithoutFeedback>
    );
}

export default Card;