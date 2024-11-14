import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useLocalSearchParams, useNavigation} from "expo-router";
import {mockData} from "@/constants/constants";
import {Fonts} from "@/constants/Fonts";
import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {Ionicons} from "@expo/vector-icons";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import QRCode from "react-native-qrcode-svg";
import BottomSheet, {BottomSheetBackdrop} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const Item = () => {

    const navigation = useNavigation();
    const { id } = useLocalSearchParams<{id: string}>();
    const data = mockData.find(data => data.id === id);
    const QRref = useRef<any>(null);
    const [showBottomSheet, setShowBottomSheet] = useState(false);
    const snapPoints = useMemo(() => ['60%'], []);
    const bottomSheetRef = useRef<BottomSheet | null>(null);

    const getPermission = async () => {
        return (await MediaLibrary.requestPermissionsAsync()).granted;
    }

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity>
                    <Ionicons name="qr-code" size={22} onPress={() => {
                        setShowBottomSheet(true);
                        if(bottomSheetRef.current) {
                            bottomSheetRef.current.expand();
                        }
                    }} />
                </TouchableOpacity>
            )
        })
    }, []);

    const handleCloseBottomSheet = () => {
        setTimeout(() => {
            setShowBottomSheet(false);
            bottomSheetRef.current?.close();
        }, 1000);
    }

    const handleSaveQR = () => {
        if(!QRref.current) {
            return
        }
        getPermission()
            .then(granted => {
            if(!granted) {
                return;
            }

            handleCloseBottomSheet();

            QRref.current.toDataURL(async (data: string) => {
                const QRCodeImg = FileSystem.documentDirectory + "QRCode.png";
                await FileSystem.writeAsStringAsync(QRCodeImg, data, { encoding: FileSystem.EncodingType.Base64 })
                MediaLibrary.saveToLibraryAsync(QRCodeImg)
                    .then(() => {
                        alert("QR Code saved to gallery");
                    })
                    .catch(console.error)
            })

        }).catch(console.log);
    }

    const renderBackdrop = useCallback((props: any) => (
        <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />
    ), []);

    return (
        <GestureHandlerRootView style={styles.container}>
            <Image source={{uri: data?.image}} style={styles.image} />
            <Text style={styles.title}>{data?.name}</Text>
            <Text style={styles.description}>{data?.description}</Text>
            {showBottomSheet && (
                <BottomSheet
                    ref={bottomSheetRef}
                    snapPoints={snapPoints}
                    enablePanDownToClose={true}
                    backdropComponent={renderBackdrop}
                    onClose={() => setShowBottomSheet(false)}
                    index={0} >
                    <View style={styles.bottomSheet}>
                        <Text style={styles.bottomSheetText}>Click to save</Text>
                        <TouchableOpacity style={styles.qr} onPress={handleSaveQR}>
                            <QRCode value={id} size={250} getRef={c => {
                                QRref.current = c;
                            }} backgroundColor="#FFFFFF"  />
                        </TouchableOpacity>
                    </View>
                </BottomSheet>
            )}
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        alignItems: "center",
        backgroundColor: "#FFFFFF"
    },
    image: {
        width: "100%",
        aspectRatio: 1,
        marginBottom: 30
    },
    title: {
        fontFamily: Fonts.sora,
        fontSize: 30,
        fontWeight: "500",
        marginBottom: 10
    },
    description: {
        fontFamily: Fonts.sora,
        fontSize: 16,
        lineHeight: 20,
        marginBottom: 20
    },
    bottomSheet: {
        display: "flex",
        alignItems: "center",
        paddingTop: 40
    },
    bottomSheetText: {
        textAlign: "center",
        fontSize: 20,
        fontFamily: Fonts.sora
    },
    qr: {
        marginTop: 20
    }
});

export default Item;