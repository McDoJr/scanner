import styled from "styled-components/native";
import {Fonts} from "@/constants/Fonts";

export const AppView = styled.View`
    padding: 40px 25px;
    flex: 1;
    background-color: white;
`;

export const AppDefaultView = styled.View`
    padding: 60px 25px;
    flex: 1;
    background-color: #FFFFFF;
`;

export const AppScrollView = styled.ScrollView`
    padding: 40px 40px 100px 40px;
    flex: 1;
    background-color: white;
`;

export const Heading = styled.Text`
    font-size: 28px;
    font-family: ${Fonts.merriWeather};
    color: #FFFFFF;
`;