import { Dimensions, Image, StyleSheet, View } from "react-native";
import { COLORS } from "../../../common/styles/color";

const styles = StyleSheet.create({
    imageStyle : {
        width : Dimensions.get('window').width,
        height : 200,
        borderBottomLeftRadius : 50,
        borderBottomRightRadius : 50,
    }
});

export const ImageHeader = ({headerStyle, imageStyle}) => {
    return (
        <View style={headerStyle}>
            <Image 
                style={[styles.imageStyle, imageStyle]}
                source={require('../../../assets/ic_training_man.jpg')} />
        </View>
    )
};

