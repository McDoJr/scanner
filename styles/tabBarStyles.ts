import styled from "styled-components/native";
import {Colors} from "@/constants/Colors";

export const TabBarContainer = styled.View`
    position: absolute;
    bottom: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${Colors.primary2};
    margin: 0 80px;
    padding: 18px 0;
    border-radius: 35px;
    //box-shadow: rgba(144,88,247, .8) 0 5px 15px;
    //box-shadow: rgba(6, 74, 135, .5) 0 5px 5px;
`;


export const TabBarView = styled.Pressable`
    flex: 1;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;