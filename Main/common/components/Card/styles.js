import { StyleSheet } from "react-native";
import theme from "../../themes/default";

const styles = StyleSheet.create({
    card: {
        elevation: theme.card.size.elevation,
        backgroundColor: theme.card.color.background,
        padding: theme.card.size.padding,
        borderRadius: theme.card.size.radius,
        shadowColor: theme.card.color.shadow,
        shadowOffset: theme.card.size.shadow.offset,
        shadowRadius: theme.card.size.shadow.radius,
    }
});

export default styles;