import React from 'react'
import {AppDefaultView, AppScrollView} from "@/styles/componentsStyle";
import {
    HeaderContainer,
    HeaderTitle,
    HeaderWelcome
} from "@/styles/homeStyles";
import MuseumItemSlider from "@/components/home/MuseumItemSlider";
import HomeDetails from "@/components/home/HomeDetails";
import {Text} from "react-native";
import {Fonts} from "@/constants/Fonts";
import {Feather} from "@expo/vector-icons";

const Home = () => {

    return (
        <AppDefaultView style={{
            alignItems: "center"
        }} >
            <Text style={{
                fontFamily: Fonts.poppins,
                fontSize: 14,
                color: "gray"
            }}>Current Location</Text>
            <Text style={{
                fontFamily: Fonts.poppinsSemiBold,
                fontSize: 14,
                marginBottom: 10
            }}><Feather name="map-pin" size={14} /> Butuan City, Agusan del Norte</Text>
            <HomeDetails />
            <MuseumItemSlider />
        </AppDefaultView>
    )
}

const old = () => {
    return (
        <AppScrollView>
            <HeaderContainer>
                <HeaderWelcome>Welcome 👋</HeaderWelcome>
                <HeaderTitle>National Museum of Art</HeaderTitle>
            </HeaderContainer>
            <MuseumItemSlider />
        </AppScrollView>
    )
}

export default Home;
