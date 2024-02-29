import { Stack, router } from 'expo-router';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Detail } from '../../../components/ExerciseInfo/detail';
import { COLORS } from '../../../../common/styles/color';
import { useRouter, useLocalSearchParams } from 'expo-router';




const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: COLORS.BLUE
    }
});

export default function DeleteScreen() {
    const router = useRouter();
    const params = useLocalSearchParams();

    // 라우트 매개변수에서 params를 추출합니다.

    console.log(params.id)
    console.log(params.user_id)
    console.log(params.exercise_type)
    console.log(params.datetime_str)

    const onPressConfirm = () => {
        if (router.canGoBack) {
            router.back();
        }


    }

    return (
        <ScrollView
            style={styles.container}
        >
            <Detail
                params={params}
                onPressConfirm={onPressConfirm}
            />
        </ScrollView>
    )
};
