import styled from "styled-components/native";
import {Fonts} from "@/constants/Fonts";

export const HeaderContainer = styled.View`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
`;

export const HeaderWelcome = styled.Text`
    font-size: 20px;
    color: gray;
    font-family: ${Fonts.sora};
`;

export const HeaderTitle = styled.Text`
    font-size: 30px;
    font-family: ${Fonts.sora};
`;

export const SearchContainer = styled.View`
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${"#faf8fd"};
    padding: 0 20px;
    border-radius: 20px;
`;

export const Search = styled.TextInput`
    padding: 20px;
    font-size: 20px;
    width: 100%;
    font-family: ${Fonts.sora};
`;

export const SliderContainer = styled.View`
    
`;

export const SliderItem = styled.TouchableOpacity`
    width: 100%;
    aspect-ratio: 1;
`;

export const SliderItemText = styled.Text`
    font-size: 20px;
    font-family: ${Fonts.sora};
`;