import { StyleSheet } from "react-native";
import theme from "../../common/themes/default";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: theme.gameScreen.size.padding,
        alignItems: 'center',
        marginTop: theme.gameScreen.size.marginTop,
    },
    guess: {
        margin: theme.gameScreen.guess.size.margin,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: '90%',
    },
    guessInput: {
        textAlign: 'center',
        fontSize: theme.gameScreen.guess.input.size.fontSize,
        width: theme.gameScreen.guess.input.size.width,
        height: theme.gameScreen.guess.input.size.height,
    },
    guessButton: {
        backgroundColor: theme.gameScreen.guess.button.color.background,
        marginTop: theme.gameScreen.guess.button.size.marginTop,
    },
    roundText: {
        fontSize: theme.gameScreen.roundText.size.font,
        color: theme.gameScreen.roundText.color.text,
        fontWeight: "700",
        margin: theme.gameScreen.roundText.size.margin,
    },
    guessCardsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    guessCard: {
        width: '45%',
        alignItems: 'center',
        margin: '2%',
    },
    info: {
        fontSize: theme.info.size.font,
        textAlign: 'center',
    },
    tip: {
        fontSize: 20,
    },
    playerName: {
        fontSize: theme.gameScreen.playerName.size.font,
        color: theme.gameScreen.playerName.color.text,
        fontWeight: '700',
    },
    nextRoundCard: {
        margin: theme.gameScreen.nextRoundButton.size.margin,
        width: '90%',
    },
    nextRoundButton: {
        backgroundColor: theme.gameScreen.nextRoundButton.color.background,
        padding: theme.gameScreen.nextRoundButton.size.padding,
    },
    nextRoundButtonText: {
        fontSize: theme.gameScreen.nextRoundButton.size.font,
        paddingTop: theme.gameScreen.nextRoundButton.size.font / 2,
    }
});

export default styles;