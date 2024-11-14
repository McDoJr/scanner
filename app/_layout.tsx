import {StyleProp, Text, TextStyle} from 'react-native'
import React from 'react'
import {Stack} from "expo-router";
import {useFonts} from "expo-font";
import {Fonts} from "@/constants/Fonts";
import AppProvider from "@/context/context";

const RootLayout = () => {

    console.log("here")

    const [fontsLoaded] = useFonts({
        "sora": require("@/assets/fonts/Sora-Regular.ttf"),
        "sora-medium": require("@/assets/fonts/Sora-Medium.ttf"),
        "sora-semi-bold": require("@/assets/fonts/Sora-SemiBold.ttf"),
        "merri-weather": require("@/assets/fonts/Merriweather-Regular.ttf"),
        "merri-weather-bold": require("@/assets/fonts/Merriweather-Bold.ttf"),
        "poppins": require("@/assets/fonts/Poppins-Regular.ttf"),
        "poppins-semi-bold": require("@/assets/fonts/Poppins-SemiBold.ttf"),
        "poppins-bold": require("@/assets/fonts/Poppins-Bold.ttf"),
        "poppins-extra-bold": require("@/assets/fonts/Poppins-ExtraBold.ttf"),
    });


    if(!fontsLoaded) {
        return <Text>Loading</Text>
    }

    const headerTitleStyle: StyleProp<Pick<TextStyle, "fontFamily" | "fontSize" | "fontWeight">> = {
        fontFamily: Fonts.sora,
        fontSize: 16,
        fontWeight: "600"
    }

    return (
        <AppProvider>
            <Stack>
                <Stack.Screen name="index" options={{headerShown: false}} />
                <Stack.Screen name="(tabs)" options={{headerShown: false}} />
                <Stack.Screen name="user/[id]" options={{
                    headerTitle: "Information",
                    headerTitleAlign: "center",
                    headerTitleStyle,
                }} />
            </Stack>
        </AppProvider>
    )
}

export default RootLayout;
