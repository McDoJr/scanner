import styled from "styled-components/native";
import {AppView} from "@/styles/componentsStyle";
import {HeaderTitle, HeaderWelcome} from "@/styles/homeStyles";

export const SignInView = styled(AppView)`
    padding-top: 200px;
`;

export const SignInHeader = styled.View`
    display: flex;
    gap: 10px;
`;

export const SignInTitle = styled(HeaderTitle)`
    font-weight: bold;
    font-size: 36px;
`;

export const SignInDesc = styled(HeaderWelcome)`
    
`;

