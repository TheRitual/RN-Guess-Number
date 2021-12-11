import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const Input = React.forwardRef((props, ref) => (
    <TextInput
        {...props}
        style={{ ...styles.input, ...props.style }}
        ref={ref} />
));

export default Input;