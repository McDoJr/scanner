import {FlatList, ScrollView, StyleSheet, View, Text} from 'react-native'
import React from 'react'
import {mockData} from "@/constants/constants";
import SliderItem from "@/components/SliderItem";
import {Fonts} from "@/constants/Fonts";

const MuseumItemSlider = () => {
    // return (
    //     <ScrollView contentContainerStyle={styles.container} >
    //         {mockData.map((item, index) => {
    //             return <SliderItem {...item} key={index} />
    //         })}
    //     </ScrollView>
    // )

    return (
        <View>
            <View style={{marginTop: 15}}>
                <Text style={[styles.text, {fontFamily: Fonts.poppinsSemiBold}]}>Unlock New</Text>
                <Text style={[styles.text, {color: "gray", fontSize: 14}]}>Possibilities with a simple scan</Text>
            </View>
            <FlatList
                style={styles.container}
                data={mockData}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({item, index}) => (
                    <SliderItem {...item} key={index} />
                )}
                ItemSeparatorComponent={() => <View style={{width: 20}} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        flex: 1
    },
    text: {
        fontFamily: Fonts.poppins,
        fontSize: 16
    }
});

export default MuseumItemSlider;
