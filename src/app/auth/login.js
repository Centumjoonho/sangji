import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../../common/styles/color';
import { useState } from 'react';
import { NormalAlert } from '../../components/Alert/Alert';
import { Link, router } from 'expo-router';
import { useSession } from '../../../common/ctx';

const styles = StyleSheet.create({
    container : {
        backgroundColor : COLORS.WHITE,
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        padding : 20
    },
    inputContainer: {
        width : '100%',
    },  
    input : {
        borderColor : COLORS.BLUE_1,
        borderWidth : 1,
        borderRadius : 10,
        paddingVertical : 10,
        paddingHorizontal : 15,
        color : COLORS.BLUE_1,
        fontSize : 16
    },
    text : {
        color : COLORS.BLUE_1,
        fontSize : 20,
        marginBottom : 10,
    },
    datetimeContainer : {
        flexDirection : 'row'
    },
    button_container: {
        display : 'flex',
        alignItems : 'flex-end',
        padding : 10
    },  
    button : {
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'row',
        backgroundColor : COLORS.LETTUCE,
        borderRadius : 10,
        paddingVertical : 10,
        paddingHorizontal : 30,
        marginTop : 20
    },
    buttonText : {
        fontSize : 22,
        color : COLORS.WHITE,
        marginRight : 5
    },
    bottomSection: {
        width : '100%',
    },
    headerText : {
        fontSize : 30,
        fontWeight : 'bold',
        textAlign : 'center'
    },
    headerContainer : {
        marginBottom : 100,
    }
});

export default function LoginScreen() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const { signIn, signOut, session, isLoading }= useSession();

    console.log(signIn, signOut);

    const login = async () => {
        const result = await signIn({id, password});
        
        if (result) {
            // when user login success
            router.replace('exerciseinfo');
        }else{
            NormalAlert("아이디 혹은 비밀번호를 확인해 주세요.");
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>지능형 상지 재활운동 기기{"\n"}사용자 용 Application</Text>
            </View>
            <View style={styles.inputContainer}>
               <View>
                    <TextInput
                        placeholder={"아이디"}
                        placeholderTextColor={COLORS.BLUE_1} 
                        onChangeText={(value) => setId(value)}
                        value={id}
                        style={styles.input} />
                </View>
               <View>
                    <TextInput
                        placeholder={"비밀번호"}
                        placeholderTextColor={COLORS.BLUE_1} 
                        onChangeText={(value) => setPassword(value)}
                        value={password}
                        secureTextEntry={true}
                        style={[styles.input, {marginTop : 10}]} />
                </View>
            </View>
            <View style={styles.bottomSection}>
                <TouchableOpacity
                    style={[styles.button]}
                    onPress={login}
                >
                    <Text style={styles.buttonText}>로그인</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, {backgroundColor : COLORS.BLUE_1}]}
                    onPress={() => {
                        router.push("/auth/register");
                    }}
                >
                    <Text style={styles.buttonText}>회원가입</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};