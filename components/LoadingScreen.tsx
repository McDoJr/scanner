import React from 'react'
import LoadingDots from "react-native-loading-dots";
import {StyleSheet, View} from "react-native";
import {Colors} from "@/constants/Colors";

type LoadedScreenProps = {
    size?: number
}

const LoadingScreen = ({ size }: LoadedScreenProps) => {
    return (
        <View style={styles.loadingScreen}>
            <View style={styles.dotsWrapper}>
                <LoadingDots size={size} colors={[Colors.secondary, Colors.primary, Colors.secondary, Colors.primary]} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loadingScreen: {
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.background,
        zIndex: 10
    },
    dotsWrapper: {
        width: 100,
    },
});

export default LoadingScreen
