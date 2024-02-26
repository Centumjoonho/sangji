import { StyleSheet, Text } from "react-native";

import { COLORS } from "../../../common/styles/color";

const styles = StyleSheet.create({    
    required : {
        color : COLORS.ORAGNE,
        fontSize : 20
    }
});

export const RequireAsterisk = () => {
    return (
        <Text style={styles.required}>*</Text>
    )
}

