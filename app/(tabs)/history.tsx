import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {useCallback, useContext, useState} from 'react'
import {AppScrollView} from "@/styles/componentsStyle";
import {AppContext} from "@/context/context";
import {router, useFocusEffect} from "expo-router";
import LoadingScreen from "@/components/LoadingScreen";

// todo: Add scanned date to history
const History = () => {

    const { history, setHistory } = useContext(AppContext);
    const [isFocused, setIsFocused] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    let counter = 0;

    useFocusEffect(
        useCallback(() => {
            setIsFocused(true);
            return () => {
                setIsFocused(false);
            }
        }, [])
    );

    const handleImageLoad = (index: number) => {
        console.log("Loading Image: " + (index + 1));
        counter += 1;
        if(counter === history.length) {
            console.log("Done loading");
            setIsLoading(false);
        }
    }

    const onPress = (id: string) => {
        router.push({
            pathname: "/user/[id]",
            params: {id}
        });
    }

    const getTime = (date: number) => {
        const seconds = Math.round((Date.now() - date) / 1000);
        const minutes = Math.floor(seconds / 60);
        if(minutes >= 60) {
            const hours = Math.floor(minutes / 60);
            return `${hours} hour${hours === 1 ? "" : "s"}`;
        }
        return seconds >= 60 ? `${minutes} minute${minutes === 1 ? "" : "s"}` : `${seconds} seconds`;
    }

    return (
        <AppScrollView>
            {history.length > 0 && (
                <View style={{alignSelf: "flex-end"}}>
                    <Button title="Clear All" onPress={() => setHistory([])} />
                </View>
            )}
            {(isFocused) && history.map((item, index) => {

                return (
                    <TouchableOpacity key={index} style={styles.container} onPress={() => onPress(item.id)}>
                        <Image source={{uri: item.image}} style={styles.image} onLoad={() => handleImageLoad(index)} />
                        {!isLoading && (
                            <View style={{gap: 10}}>
                                <Text>{item.name}</Text>
                                <Text style={{color: "orange"}}>{getTime(item.date)} ago</Text>
                            </View>
                        )}
                    </TouchableOpacity>
                )
            })}
            {isLoading && <LoadingScreen />}
        </AppScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderColor: "lightgray"
    },
    image: {
        width: 100,
        aspectRatio: 1
    }
});

export default History;
