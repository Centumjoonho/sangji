import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../../../common/styles/color";
import { ImageHeader } from "../Header/ImageHeader";
import { Link } from "expo-router";

export const Header = ({onPress}) => {
    return (
        <>
            <ImageHeader headerStyle={{backgroundColor : COLORS.BLUE }} />
        </>
    )
};