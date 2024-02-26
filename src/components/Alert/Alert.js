import { Alert } from "react-native"

const NormalAlert = (message, onPressConfirm=null) => {
    let _onPressConfirm;
    if (onPressConfirm === null){
        _onPressConfirm = () => {};
    }else{
        _onPressConfirm = onPressConfirm;
    }
    
    Alert.alert("알림", message, [{'text' : '확인', 'onPress' : _onPressConfirm}]);
}

export {
    NormalAlert
}