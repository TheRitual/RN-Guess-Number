import { StyleSheet } from "react-native";
import theme from "../common/themes/default";

const styles = StyleSheet.create({
    header: {
        flex: 1,
        width: '100%',
        height: theme.header.size.height,
        paddingTop: theme.header.size.paddingTop,
        backgroundColor: theme.header.color.background,
    },
    headerTitle: {
        color: theme.header.color.text,
        fontSize: theme.header.size.font,
        textAlign: 'center',
        fontFamily: 'permanent-marker',
    },
});

export default styles;