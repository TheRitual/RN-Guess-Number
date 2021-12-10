import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const Input = props => {
    return <TextInput
        autoFocus={props.autoFocus}
        caretHidden={props.caretHidden}
        keyboardType={props.keyboardType}
        style={{ ...styles.input, ...props.style }}
    />
}


export default Input;