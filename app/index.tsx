import React from 'react'
import {Image, ImageBackground, View, StyleSheet} from "react-native";
import {Heading} from "@/styles/componentsStyle";
import Button from '@/components/Button';
import {router} from "expo-router";

const App = () => {

    const handlePress = () => {
        router.push("/(tabs)/home");
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require("@/assets/images/bxu.png")} style={styles.background}>
                <View style={styles.logoContainer}>
                    <Heading style={styles.text}>Welcome to</Heading>
                    <Heading style={[styles.text, {marginTop: 30}]}>MUSEUM</Heading>
                    <Image source={require("@/assets/images/logo.png")} style={styles.logo} />
                </View>
                <Button style={{marginTop: 30}} onPress={handlePress} >Get Started</Button>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
    },
    logoContainer: {
        display: "flex",
        alignItems: "center",
        position: "relative",
        marginTop: 150
    },
    text: {
        transform: [{translateY: 30}],
    },
    logo: {
    }
});

export default App;
