import {Image, ImageRequireSource, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {memo, useContext} from 'react'
import {MuseumItem} from "@/types/types";
import {Fonts} from "@/constants/Fonts";
import {router} from "expo-router";
import {AppContext} from "@/context/context";

// const SliderItem = ({ id, name, image, description }: MuseumItem) => {
//
//     const { setHistory } = useContext(AppContext);
//
//     const onPress = () => {
//
//         setHistory(prevState => [{id, name, description, image, date: Date.now()}, ...prevState]);
//
//         router.push({
//             pathname: "/user/[id]",
//             params: {id}
//         });
//     }
//
//     return (
//         <TouchableOpacity onPress={onPress} style={styles.container}>
//             <Text style={styles.title}>{name}</Text>
//             <Image source={{uri: image}} style={styles.image} />
//         </TouchableOpacity>
//     )
// }

const SliderItem = ({ name, image }: MuseumItem) => {

    return (
        <TouchableOpacity style={styles.container}>
            <Image source={image} style={styles.image} resizeMode="contain" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        width: 200,
        height: 200
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10
    },
    title: {
        fontFamily: Fonts.sora,
        fontSize: 14,
        fontWeight: "500",
        marginBottom: 10,
        textAlign: "center"
    }
});

export default memo(SliderItem);
