import { StyleSheet } from "react-native";
import theme from "../../themes/default";

const styles = StyleSheet.create({
    input: {
        fontFamily: 'gloria',
        borderBottomColor: theme.default.input.borderColor,
        borderBottomWidth: theme.default.input.borderBottomWidth,
        height: theme.default.input.height,
        marginVertical: theme.default.input.marginVertical,
    }
});

export default styles;