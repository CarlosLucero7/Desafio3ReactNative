import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        backgroundColor: colors.color2,
    },
    buttoContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        marginTop: 20,
    },
    cleanButton: {
        height: 35,
        width: 100,
        backgroundColor: colors.actionColor,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    confirmButton: {
        height: 35,
        width: 100,
        backgroundColor: colors.disableColor,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    startButton: {
        height: 35,
        width: 200,
        backgroundColor: colors.disableColor,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    textButton: {
        fontSize: 20,
    }
});

export default styles;