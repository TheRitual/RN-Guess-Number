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
        padding: theme.gameScreen.guess.button.size.padding,
        marginTop: theme.gameScreen.guess.button.size.marginTop,
    },
    guessButtonText: {
        fontSize: theme.gameScreen.guess.button.size.font,
        paddingTop: theme.gameScreen.guess.button.size.font / 2,
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
        width: theme.gameScreen.guessCard.size.width,
        margin: theme.gameScreen.guessCard.size.margin,
        alignItems: 'center',
    },
    info: {
        fontSize: theme.info.size.font,
        textAlign: 'center',
    },
    tip: {
        fontSize: 50,
    },
    playerNameCard: {
        width: theme.gameScreen.guessCard.size.width,
        margin: theme.gameScreen.guessCard.size.margin,
        alignItems: 'center',
        backgroundColor: theme.gameScreen.playerName.color.background,
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
    },
    winner: {
        fontSize: theme.gameScreen.winner.sizes.font,
        color: theme.gameScreen.winner.color.text,
    },
    winnerCard: {
        marginTop: theme.gameScreen.winner.sizes.marginTop,
        backgroundColor: theme.gameScreen.winner.color.background,
    },
    correctCard: {
        width: theme.gameScreen.guessCard.size.width,
        margin: theme.gameScreen.guessCard.size.margin,
        alignItems: 'center',
        backgroundColor: theme.gameScreen.infoCard.color.correct,
    },
    wrongCard: {
        width: theme.gameScreen.guessCard.size.width,
        margin: theme.gameScreen.guessCard.size.margin,
        alignItems: 'center',
        backgroundColor: theme.gameScreen.infoCard.color.wrong,
    },
});

export default styles;