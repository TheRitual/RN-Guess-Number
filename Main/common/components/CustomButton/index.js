import React from 'react';
import { Text, Pressable } from 'react-native'
import styles from './styles';

const CustomButton = props => {
    return (
        <Pressable style={{ ...styles.button, ...props.style }}>
            <Text {...props} style={{ ...styles.text, ...props.textStyle }} >
                {props.title || props.children || "?"}
            </Text>
        </Pressable>
    );
}

export default CustomButton;