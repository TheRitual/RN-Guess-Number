import { StyleSheet } from "react-native";
import theme from "../common/themes/default";

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: theme.size.header.height,
        paddingTop: theme.size.header.padding,
        backgroundColor: theme.color.header.background,
    },
    headerTitle: {
        color: theme.color.header.text,
        fontSize: theme.size.header.font,
        textAlign: 'center',
    },
});

export default styles;