import {ActivityIndicator, Image, Modal, Pressable, StyleSheet, Text, useWindowDimensions, View} from 'react-native'
import React, {useCallback, useEffect, useRef, useState} from 'react'
import {CameraView, useCameraPermissions} from "expo-camera";
import {useFocusEffect} from "expo-router";
import {Asset} from 'expo-asset';
import {FailedText, FailedView, GrantPermissionButton, GrantPermissionText, ScannerView} from "@/styles/scannerStyles";
import * as ImageManipulator from 'expo-image-manipulator';
import * as FileSystem from 'expo-file-system';
import {API_KEY} from "@/constants/constants";
import axios from "axios";

const Scanner = () => {

    const [permission, requestPermission] = useCameraPermissions();
    const cameraRef = useRef<CameraView | null>();
    const [isFocused, setIsFocused] = useState(true);
    const [photo, setPhoto] = useState<string | null>();
    const [existingImage, setExistingImage] = useState<string>();
    const [isProcessing, setIsProcessing] = useState(false);
    const [presentedShape, setPresentedShape] = useState('');
    const [result, setResult] = useState('');
    const {width, height} = useWindowDimensions();

    useEffect(() => {
        requestPermission().catch(console.log);
        convertImageToBase64(require("@/assets/images/existing.jpg")).then(base64 => {

            if(base64) {
                setExistingImage(base64);
            }

        })
    }, []);


    useFocusEffect(
        useCallback(() => {
            setIsFocused(true);
            return () => {
                setIsFocused(false);
            }
        }, [])
    );

    const compareImage = async () => {

        if(!existingImage) {
            return;
        }

        console.log("step 1")

        console.log(existingImage.length);
        const requestPayload = {
            requests: [
                {
                    image: { content: photo },
                    features: [{ type: 'LABEL_DETECTION', maxResults: 10 }],
                },
                {
                    image: { content: existingImage },
                    features: [{ type: 'LABEL_DETECTION', maxResults: 10 }],
                },
            ],
        };

        console.log("step 2")

        // Send the request to Google Cloud Vision API
        axios.post(
            `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`,
            requestPayload
        ).then(data => {
            if(data.data) {

                // Process the response to extract labels and compare
                const capturedImageLabels = data.data.responses[0]?.labelAnnotations;
                const existingImageLabels = data.data.responses[1]?.labelAnnotations;

                console.log(capturedImageLabels, existingImageLabels)

                if (capturedImageLabels && existingImageLabels) {
                    // Compare the labels of both images (basic comparison)
                    const comparison = capturedImageLabels.some((capturedLabel: any) =>
                        existingImageLabels.some((existingLabel: any) =>
                            capturedLabel.description === existingLabel.description
                        )
                    );
                    setResult(
                        comparison ? 'Images are similar' : 'Images are different'
                    );

                    console.log(comparison ? 'Images are similar' : 'Images are different')
                }
            }else {
                console.log("Failed")
            }
        }).catch(console.log);

        console.log("step 3")


    }

    const convertImageToBase64 = async (imagePath: string): Promise<string | null> => {
        try {
            // Load the image using Expo's Asset module
            const asset = Asset.fromModule(imagePath);
            await asset.downloadAsync(); // Ensure the asset is downloaded

            // Get the local URI of the asset
            const localUri = asset.localUri;


            // Resize the image to a smaller size (e.g., 100x100 pixels)
            const result = await ImageManipulator.manipulateAsync(localUri as string, [{ resize: { width: 100, height: 100 } }]);

            // Read the resized image as base64
            return await FileSystem.readAsStringAsync(result.uri, {
                encoding: FileSystem.EncodingType.Base64,
            });
        } catch (error) {
            console.error("Error reading the image file: ", error);
            return null;
        }
    };

    const handleCapture = () => {
        if(!cameraRef.current) return;
        const captured = cameraRef.current.takePictureAsync({quality: 1, base64: true, exif: false});

        captured?.then(photo => {
            if(photo && photo.base64) {
                setPhoto(photo.base64);
            }
        })
    }

    if(!permission?.granted) {
        return (
            <FailedView>
                <FailedText>We need your permission to show the camera</FailedText>
                <GrantPermissionButton onPress={() => {
                    requestPermission().then(result => {
                        console.log(result);
                    });
                }}>
                    <GrantPermissionText>Grant Permission</GrantPermissionText>
                </GrantPermissionButton>
            </FailedView>
        )
    }

    if(photo) {

        // compareImage();

        return (
            <View style={{flex: 1, paddingTop: 40}}>
                <Pressable style={{backgroundColor: "#fff",
                    paddingVertical: 5,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 1,
                    marginHorizontal: "auto",
                    width: 60,
                    marginVertical: 10
                }} onPress={() => setPhoto(null)}><Text>Exit</Text></Pressable>
                <Image source={{uri: `data:image/jpeg;base64,${photo}`}} style={{
                    width: width - 20,
                    height: height - 100,
                    resizeMode: "cover",
                    marginHorizontal: "auto",
                    borderWidth: 10,
                    borderColor: "gray"
                }} />
            </View>
        )
    }

    return (
        <ScannerView>
            {isFocused && (
                <>

                    <Modal visible={isProcessing} transparent={true} animationType="slide">
                        <View style={styles.modal}>
                            <View style={styles.modalContent}>
                                <Text>Your current shape is {presentedShape}</Text>
                                {presentedShape === '' && <ActivityIndicator size="large" />}
                                <Pressable
                                    style={styles.dismissButton}
                                    onPress={() => {
                                        setPresentedShape('');
                                        setIsProcessing(false);
                                    }}>
                                    <Text>Dismiss</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>

                    <CameraView
                        style={StyleSheet.absoluteFillObject}
                        ref={(ref) => cameraRef.current = ref}
                    />
                    <Pressable style={{
                        width: 80,
                        height: 80,
                        borderRadius: 50,
                        backgroundColor: "gray",
                        marginTop: "auto",
                        marginBottom: 150
                    }} onPress={handleCapture}></Pressable>
                    {/*<Overlay />*/}
                </>
            )}
            {/*<ScannerFrameView>*/}
            {/*    <ScannerFrame />*/}
            {/*</ScannerFrameView>*/}

        </ScannerView>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContent: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 300,
        borderRadius: 24,
        backgroundColor: 'gray',
    },
    dismissButton: {
        width: 150,
        height: 50,
        marginTop: 60,
        borderRadius: 24,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
});

export default Scanner;
