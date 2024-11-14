import {
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    TouchableOpacityProps,
} from 'react-native'
import React from 'react'
import {Fonts} from "@/constants/Fonts";

type ButtonProps = TouchableOpacityProps & {
    textStyle?: StyleProp<TextStyle>
}

const Button = ({ style, children, textStyle, ...props }: ButtonProps) => {

    return (
        <TouchableOpacity style={[styles.container, style]} {...props} >
            <Text style={[styles.text, textStyle]}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 10
    },
    text: {
        color: "#000000",
        fontFamily: Fonts.poppins,
        fontSize: 16
    }
});

export default Button;
