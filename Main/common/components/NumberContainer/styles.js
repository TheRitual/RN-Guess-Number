import { StyleSheet } from "react-native";
import theme from "../../themes/default";

const styles = StyleSheet.create({
    container: {
        borderColor: theme.numberInput.color.border,
        borderWidth: theme.numberInput.size.border.width,
        borderRadius: theme.numberInput.size.border.radius,
        marginVertical: theme.numberInput.size.marginVertical,
        padding: theme.numberInput.size.padding,
        alignItems: theme.numberInput.params.alignItems,
        justifyContent: theme.numberInput.params.justifyContent,
    },
    number: {
        color: theme.numberInput.color.number,
        fontSize: theme.numberInput.size.font,
    }
});

export default styles;