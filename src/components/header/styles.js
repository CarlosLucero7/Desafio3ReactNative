import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.color1,
        height: 105,
        paddingTop: 35,
        paddingBottom: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 30,
    },
});

export default styles;