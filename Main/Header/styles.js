import { StyleSheet } from "react-native";
import theme from "../common/themes/default";

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: theme.header.size.height,
        paddingTop: theme.header.size.paddingTop,
        backgroundColor: theme.header.color.background,
    },
    headerTitle: {
        color: theme.header.color.text,
        fontSize: theme.header.size.font,
        textAlign: 'center',
    },
});

export default styles;