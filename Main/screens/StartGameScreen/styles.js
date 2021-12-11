import { StyleSheet } from "react-native";
import { View } from "react-native-web";
import theme from "../../common/themes/default";

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: theme.default.screen.padding,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'permanent-marker',
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
    selectedNumberCard: {
        marginTop: theme.selectedNumber.size.marginTop,
        alignItems: 'center',
    },
    startGameButton: {
        backgroundColor: theme.startGameButton.color.background,
    },
    startGameButtonText: {
        fontFamily: 'fredoka',
    },
    info: {
        fontFamily: 'permanent-marker',
        fontSize: theme.info.size.font,
        textAlign: 'center',
    },
    logo: {
        width: 200,
        height: 200,
    }
});

export default styles;