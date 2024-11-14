import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native'
import {Heading} from "@/styles/componentsStyle";
import {Fonts} from "@/constants/Fonts";

export default function HomeDetails() {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("@/assets/images/home-image.png")} />
            <Heading style={[styles.heading, {marginTop: 100}]}>Scan Artifacts</Heading>
            <Heading style={styles.heading}>Unlock Insights</Heading>
            <Text style={[styles.text, {marginTop: 20}]}>Your Gateway to Art and Culture.</Text>
            <Text style={styles.text}>Explore, Discover, Enjoy</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 300,
        position: "relative"
    },
    image: {
        width: "100%",
        height: "100%",
        position: "absolute",
        borderRadius: 15
    },
    heading: {
        fontFamily: Fonts.merriWeatherBold,
    },
    text: {
        fontFamily: Fonts.poppins,
        fontSize: 14,
        color: "#FFFFFF"
    }
});
