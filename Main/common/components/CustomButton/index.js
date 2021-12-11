import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native'
import styles from './styles';

const CustomButton = props => {
    return (
        <TouchableHighlight>
            <View style={{ ...styles.button, ...props.style }}>
                <Text {...props} style={{ ...styles.text, ...props.textStyle }} >
                    {props.title || props.children || "?"}
                </Text>
            </View>
        </TouchableHighlight>
    );
}

export default CustomButton;