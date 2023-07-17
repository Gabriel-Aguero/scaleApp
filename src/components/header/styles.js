import { StyleSheet, StatusBar } from "react-native";
import { COLORS, FONTS } from '../../themes'

export const styles = StyleSheet.create({
    container: {                
        marginTop: StatusBar.currentHeight,
        backgroundColor: COLORS.primary,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',                
        shadowColor: "#000000",
        shadowOffset: {
         width: 0,
         height: 1,
        },
        shadowOpacity:  0.16,
        shadowRadius: 1.51,
        elevation: 2
    },
    title: {
        fontSize: 20,
        color: COLORS.text,       
        fontWeight: 'bold',
    }
});