import { StyleSheet } from "react-native";
import theme from "../../themes/default";

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 4,
        elevation: 1,
        backgroundColor: theme.default.button.backgroundColor,
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'white',
        fontFamily: 'fredoka',
      },
});

export default styles;