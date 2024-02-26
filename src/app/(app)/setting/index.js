import { Text, TouchableOpacity, View, StyleSheet } from "react-native"
import { useSession } from "../../../../common/ctx"
import { router } from "expo-router";
import { COLORS } from "../../../../common/styles/color";

export default function SettingScreen(){
    const { signOut } = useSession();

    const onSignOut = () => {
        signOut();
        router.replace('/auth/login');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={onSignOut}
                style={styles.button}
            >
                <Text style={styles.buttonText}>로그아웃</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : COLORS.BLUE,
        padding : 20
    },
    button : {
        backgroundColor : COLORS.ORAGNE,
        paddingVertical : 10,
        paddingHorizontal : 10,
        borderRadius : 10
    },
    buttonText : {
        color : COLORS.WHITE,
        fontSize : 20,
        textAlign : 'center',
    }
    
});