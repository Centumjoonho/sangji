import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

import { COLORS } from '../../../common/styles/color';
import { useState } from 'react';
import { NormalAlert } from '../../components/Alert/Alert';
import { router } from 'expo-router';
import { useSession } from '../../../common/ctx';
import { datatimeToISOString } from "../../../common/utils";
import { UserAPI } from '../../../common/api/ApiBase';

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
        fontSize : 16,
        marginTop : 10
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
        marginBottom : 30,
    }
});

export default function RegisterScreen() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [birth, setBirth] = useState(new Date());
    const [sex, setSex] = useState("");
    const obstacles = "";
    const fieldsLabel = {
        'id' : "아이디", 
        'password' : "비밀번호", 
        "name" : "이름", 
        "phone" : "연락처", 
        "email" : "이메일", 
        "both" : "생년월일",
        "sex" : "성별"
    }

    const { signIn, signOut, session, isLoading }= useSession();

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setBirth(currentDate);
      };
    
    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: birth,
            onChange,
            mode: currentMode,
            is24Hour: true,
        });
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const validate = (data) => {
        
        const keys = Object.keys(data);
        let message = "";
        for (let i=0; i<keys.length; i++){
            const key = keys[i];
            if (data[key] == ""){
                message += `${fieldsLabel[key]} 값을 입력해 주세요.\n`; 
            }
        }

        if (message != ""){
            NormalAlert(message);
            return false;
        }

        return true;
    }

    const register = async () => {
        
        const fd = new URLSearchParams();

        const data = {
            "id" : id,
            "password" : password,
            "name" : name,
            "phone" : phone,
            "email" : email,
            "both" : datatimeToISOString(birth, 'date'),
            "sex" : sex,
        }

        const result = validate(data);

        if (!result) return;

        fd.append("user", JSON.stringify(data));

        try{
            const req = await UserAPI.post(fd.toString(), {
                "Content-Type": "application/x-www-form-urlencoded",
            });

            const result = await req.json();
            
            NormalAlert(result.message, result.success ? () => {router.replace('/auth/login')} : () => {});

        }catch(err){
            console.error(err);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>회원가입</Text>
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
                        style={[styles.input]} />
                </View>
                <View>
                    <TextInput
                        placeholder={"이름"}
                        placeholderTextColor={COLORS.BLUE_1} 
                        onChangeText={(value) => setName(value)}
                        value={name}
                        style={styles.input} />
                </View>
                <View>
                    <TextInput
                        placeholder={"전화번호"}
                        placeholderTextColor={COLORS.BLUE_1} 
                        onChangeText={(value) => setPhone(value)}
                        inputMode={"tel"}
                        value={phone}
                        style={styles.input} />
                </View>
                <View>
                    <TextInput
                        placeholder={"이메일"}
                        placeholderTextColor={COLORS.BLUE_1} 
                        onChangeText={(value) => setEmail(value)}
                        inputMode={"email"}
                        value={email}
                        style={styles.input} />
                </View>
                <TouchableOpacity
                    onPress={showDatepicker}
                >
                    <TextInput
                        placeholder={"생년월일"}
                        placeholderTextColor={COLORS.BLUE_1} 
                        editable={false}
                        value={datatimeToISOString(birth, 'date')}
                        style={styles.input} />
                </TouchableOpacity>
                <Picker
                    style={styles.input}
                    selectedValue={sex}
                    onValueChange={(itemValue, itemIndex) =>
                        setSex(itemValue)
                    }>
                    <Picker.Item label="남성" value="남" />
                    <Picker.Item label="여성" value="여" />
                </Picker>
            </View>
            <View style={styles.bottomSection}>
                <TouchableOpacity
                    style={[styles.button, {backgroundColor : COLORS.ORAGNE}]}
                    onPress={register}
                >
                    <Text style={styles.buttonText}>회원가입</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};