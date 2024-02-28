import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../../common/styles/color";
import { Badge } from "../Badge";
import { Link, router } from "expo-router";




const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.BLUE_1,
        borderRadius: 20,
        padding: 20,

        shadowColor: COLORS.WHITE,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1,
        marginBottom: 15
    },
    typeText: {
        color: COLORS.WHITE,
        fontSize: 22,
    },
    descriptionText: {
        color: COLORS.WHITE,
        fontSize: 20,
    },
    dateText: {
        color: COLORS.WHITE,
        fontSize: 16,
    }
});

export const Items = ({ item }) => {

    const onPressD = () => {

        router.push('/exerciseinfo/delete', { id: 123, name: 'John' });



    }
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPressD}
        >
            <Badge type={item.type} style={{ marginBottom: 5 }} />
            <Text style={[styles.typeText, { marginBottom: 5 }]}>{item.id}</Text>
            <Text style={[styles.typeText, { marginBottom: 5 }]}>{item.user_id}</Text>
            <Text style={[styles.typeText, { marginBottom: 5 }]}>{item.exercise_type}</Text>
            <Text style={styles.dateText}>{item.datetime_str}</Text>
        </TouchableOpacity>
    )
}