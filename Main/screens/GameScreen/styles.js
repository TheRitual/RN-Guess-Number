import { StyleSheet } from "react-native";
import theme from "../../common/themes/default";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: theme.gameScreen.size.padding,
        alignItems: 'center',
        marginTop: theme.gameScreen.size.marginTop,
    },
});

export default styles;