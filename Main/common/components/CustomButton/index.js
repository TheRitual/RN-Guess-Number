import React from 'react';
import { View, Button } from 'react-native';
import theme from '../../themes/default';

const CustomButton = props => {
    const color = props.style ? props.style.backgroundColor && theme.default.primary : theme.default.primary;

    return (
        <View style={props.style}>
            <Button
                color={color}
                title={props.title || "?"}
            />
        </View>
    );
}

export default CustomButton;