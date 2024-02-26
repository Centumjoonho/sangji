
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../../common/styles/color";

const styles = StyleSheet.create({
    badge : {
        width : 70,
        paddingHorizontal : 5,
        paddingVertical : 5,
        borderRadius : 10,
        textAlign : 'center'
    },
    indoor : {
        backgroundColor : COLORS.SALOME
    },
    outdoor : {
        backgroundColor : COLORS.ORAGNE,
        color : COLORS.WHITE
    }
});

export const Badge = ({type, style}) => {

    if (type == "indoor"){
        return (
            <Text style={[styles.badge, styles.indoor, style]}>실내용</Text>
        )
    }else{
        return (
            <Text style={[styles.badge, styles.outdoor, style]}>실외용</Text>
        )
    }
}