import React from 'react';
import { View, Button } from 'react-native';
import theme from '../../themes/default';

const CustomButton = props => {
    const color = props.style ? props.style.backgroundColor || theme.default.primary : theme.default.primary;

    return (
        <View {...props}>
            <Button
                {...props}
                color={color}
                title={props.title || props.children || "?"}
            />
        </View>
    );
}

export default CustomButton;