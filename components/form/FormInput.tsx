import React, {useState} from 'react'
import styled from "styled-components/native";
import {StyleProp, StyleSheet, TextInput, TextStyle, ViewStyle} from "react-native";
import {Ionicons} from "@expo/vector-icons";

type FormInputProps = {
    type: "text" | "password" | "email" | "number",
    name: string,
    value?: string,
    onChange: (data: {name: string, text: string}) => void,
    placeholder?: string,
    placeholderTextColor?: string,
    style?: object
}

const FormInput = ({ type, name, value, onChange, placeholder, placeholderTextColor, style }: FormInputProps) => {

    const [showPassword, setShowPassword] = useState(false);

    // clone the style prop
    const clonedStyle = style as StyleSheet.NamedStyles<TextStyle>;
    // extract the width if it exists
    const width = clonedStyle && clonedStyle!.width ? clonedStyle!.width : "auto";
    // make the width from style 100% to be dependent in the parent component, apply the extracted width to the
    // parent component instead
    style = {...style, width: "100%"}

    const handleChange = (text: string) => {
        onChange({name, text});
    }

    const onTogglePassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <InputView style={{width} as StyleProp<ViewStyle>}>
            <TextInput style={[styles.input, style as StyleProp<TextStyle>]}
                       secureTextEntry={type === "password" && !showPassword} onChangeText={handleChange}
                   {...{value, placeholder, placeholderTextColor}}
                       clearTextOnFocus={false}
                       value={value}
                       selectTextOnFocus={false} />
            {type === "password" &&
                <Ionicons name={showPassword ? "eye" : "eye-off"}
                          size={20}
                          style={styles.icon}
                          onPress={onTogglePassword} />}
        </InputView>
    )
}

const styles = StyleSheet.create({
    icon: {
        position: "absolute",
        right: 10,
    },
    input: {
        width: "100%",
        padding: 10,
        fontSize: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#bebdbd"
    }
});

const InputView = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export default FormInput;
