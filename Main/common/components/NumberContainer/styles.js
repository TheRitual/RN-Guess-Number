import { StyleSheet } from "react-native";
import theme from "../../themes/default";

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.numberInput.color.backgroundColor,
        borderRadius: theme.numberInput.size.border.radius,
        marginVertical: theme.numberInput.size.marginVertical,
        padding: theme.numberInput.size.padding,
        alignItems: theme.numberInput.params.alignItems,
        justifyContent: theme.numberInput.params.justifyContent,
        width: theme.numberInput.size.size,
        height: theme.numberInput.size.size,
    },
    number: {
        color: theme.numberInput.color.number,
        fontSize: theme.numberInput.size.font,
    }
});

export default styles;