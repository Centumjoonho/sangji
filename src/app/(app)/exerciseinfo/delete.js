import { Stack, router } from 'expo-router';
import { useRoute } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Detail } from '../../../components/ExerciseInfo/detail';
import { COLORS } from '../../../../common/styles/color';




const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: COLORS.BLUE
    }
});

export default function DeleteScreen() {


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
                onPressConfirm={onPressConfirm}
            />
        </ScrollView>
    )
};
