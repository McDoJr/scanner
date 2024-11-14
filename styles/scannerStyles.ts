import styled from "styled-components/native";
import {Colors} from "@/constants/Colors";
import {Fonts} from "@/constants/Fonts";

export const ScannerView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const GrantPermissionButton = styled.TouchableOpacity`
    margin-top: 20px;
    padding: 10px 30px;
    border-radius: 30px;
    background-color: ${Colors.primary};
    align-self: center;
`;

export const GrantPermissionText = styled.Text`
    font-size: 16px;
    text-align: center;
    color: white;
    font-family: ${Fonts.sora};
    font-weight: 500;
`;

export const FailedView = styled.View`
    padding: 10px 30px;
    border-radius: 30px;
    margin: auto;
`;

export const FailedText = styled.Text`
    font-size: 18px;
    font-family: ${Fonts.sora};
`;

export const ScannerFrameView = styled.View`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ScannerFrame = styled.View`
    width: 300px;
    height: 300px;
    border: 4px solid ${Colors.primary};
    border-radius: 50px;
`;

export const ScannedResultView = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    top: 215px;
`;

export const ScannedData = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    padding: 5px 15px;
    border-radius: 15px;
    background-color: gold;
`;

export const ScannedDataText = styled.Text`
    font-size: 16px;
    font-family: ${Fonts.sora};
`;