import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../../common/styles/color";
import { Badge } from "../Badge";
import { Link, router } from "expo-router";
import { useLocalSearchParams, useGlobalSearchParams } from 'expo-router';




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
        marginBottom: 15,
        position: "relative", // 부모 컨테이너를 기준으로 자식 요소를 배치하기 위해
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
    },
    linkButtonContainer: {
        position: "absolute",
        bottom: 20, // container의 하단과의 간격
        right: 20, // container의 우측과의 간격
        borderRadius: 20,
        overflow: "hidden", // borderRadius 적용을 위해
        backgroundColor: '#808080', // 장미색 배경색
        padding: 10,
    },
    linkButton: {
        backgroundColor: COLORS.BLUE_1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
    },
    linkText: {
        color: COLORS.WHITE,
        fontSize: 16,
        fontWeight: "bold",
    },
});




export const Items = ({ item }) => {

    const { id, number, user_id, exercise_type, datetime_str } = item;
    console.log("item");
    console.log(item);
    // const onPressD = () => {



    //     router.push(`/exerciseinfo/delete/`);



    // }
    return (
        <TouchableOpacity
            style={styles.container}
        >
            <Badge type={item.type} style={{ marginBottom: 5 }} />
            <Text style={[styles.typeText, { marginBottom: 5 }]}>{item.number}</Text>
            <Text style={[styles.typeText, { marginBottom: 5 }]}>{item.user_id}</Text>
            <Text style={[styles.typeText, { marginBottom: 5 }]}>{item.exercise_type}</Text>
            <Text style={styles.dateText}>{item.datetime_str}</Text>

            {/* Link Button */}
            <View style={styles.linkButtonContainer}>
                <Link
                    href={{ pathname: "/exerciseinfo/delete/", params: { id, number, user_id, exercise_type, datetime_str } }}
                >
                    <Text style={styles.linkText}>Details</Text>

                </Link>
            </View>


        </TouchableOpacity>
    )
}