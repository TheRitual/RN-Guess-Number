import { StyleSheet } from "react-native";
import theme from "../../../../common/themes/default";

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    card: {
        textAlign: 'center',
        alignItems: 'center',
        height: '75%',
        width: '90%',
    },
    closeButton: {
        width: 130,
        backgroundColor: theme.default.accent,
    },
    title: {
        fontFamily: 'permanent-marker',
        fontSize: 30,
    },
    listContainer: {
        flex: 1,
    },
    listItem: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
    },
    listText: {
        fontSize: 20,
        fontFamily: 'gloria',
    }
});

export default styles;