import React, { useEffect, useState } from 'react';
import { Link, router } from "expo-router";
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../../../common/styles/color';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Items } from '../../../components/ExerciseInfo/items';
import { config } from '../../../../common/config';
import useDataFetcher from '../../../hooks/useDataFetcher';
import { useSession } from '../../../../common/ctx';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BLUE,

    },
    button_container: {
        display: 'flex',
        alignItems: 'flex-end',
        padding: 15,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button_add: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: COLORS.LETTUCE,
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    button_delete: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#F88379',
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    buttonText: {
        fontSize: 16,
        color: COLORS.WHITE,
        marginRight: 5
    }
});

export default function HomeScreen() {
    const { signIn, signOut, session } = useSession();
    const [refreshing, setRefreshing] = useState(false);
    const { data, isLoading, error, refetch } = useDataFetcher(`${config.HOST}/api/musclefunctionlog?username=${session}`);
    let mappedDataId = null;

    //// 데이터가 다 받아졌을 때만 매핑 
    //// 데이터 값에 고유값 부여 
    if (!isLoading && data) {
        mappedDataId = data.result.map((item, index) => {
            return {
                ...item,
                id: index + 1
            }
        });

    }


    const renderItem = ({ index, item }) => {

        //console.log(item);

        return (
            <TouchableOpacity >
                <Items
                    item={item}
                />
            </TouchableOpacity>

        )
    }

    const onRefresh = () => {
        setRefreshing(true);
        refetch();
        setRefreshing(false);
    }

    const onPress = () => {
        router.push('/exerciseinfo/add');
    }




    return (
        <View style={styles.container}>
            <View style={styles.button_container}>
                <TouchableOpacity
                    style={styles.button_add}
                    onPress={onPress}
                >
                    <Text style={styles.buttonText}>운동 이력 추가</Text>
                    <Ionicons name="add-circle-outline" size={24} color="white" />
                </TouchableOpacity>
                {/* <TouchableOpacity
                    style={styles.button_delete}
                    onPress={onPressD}
                >
                    <Text style={styles.buttonText}>운동 이력 삭제</Text>
                    <Ionicons name="add-circle-outline" size={24} color="white" />
                </TouchableOpacity> */}
            </View>

            <FlatList
                contentContainerStyle={{
                    padding: 30
                }}
                data={mappedDataId}
                renderItem={renderItem}
                onRefresh={onRefresh}
                refreshing={refreshing}
            />
        </View>
    )
};
