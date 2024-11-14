import { Colors } from "@/constants/Colors";
import styled from "styled-components/native";
import {Fonts} from "@/constants/Fonts";


export const FormView = styled.View`
    display: flex;
    padding: 20px 0;
`;

export const FormLabel = styled.Text`
    font-size: 22px;
    margin: 10px 0;
    font-weight: 500;
`;

export const FormButton = styled.TouchableOpacity`
    margin: 40px 0;
    padding: 15px 40px;
    background-color: ${Colors.primary};
    border-radius: 10px;
`;

export const FormButtonText = styled.Text`
    font-family: ${Fonts.sora};
    font-weight: 500;
    color: white;
    font-size: 20px;
    text-align: center;
`;