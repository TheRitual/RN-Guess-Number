import { StyleSheet } from "react-native";
import theme from "../../common/themes/default";

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: theme.default.screen.padding,
        alignItems: 'center',
    },
    title: {
        fontSize: theme.default.title.size,
        marginVertical: theme.default.title.marginVertical,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: "row",
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    button: {
        backgroundColor: theme.default.button.backgroundColor,
        width: theme.default.button.width,
    },
    accentButton: {
        backgroundColor: theme.default.accent,
        width: theme.default.button.width,
    },
    input: {
        textAlign: 'center',
        width: theme.numberInput.size.width,
        fontSize: theme.numberInput.size.font,
    },
});

export default styles;