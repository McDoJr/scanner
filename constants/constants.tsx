import {AntDesign, Octicons} from "@expo/vector-icons";
import React from "react";
import {MuseumItem} from "@/types/types";

// export const BASE_URL = `${process.env.EXPO_PUBLIC_VISION_API_URL}`;
export const API_KEY = `${process.env.EXPO_PUBLIC_VISION_API_KEY}`;

export const icons: any = {
    "home": (props: any) => <AntDesign name="home" size={20} color="#673ab7" {...props}  />,
    "scanner": (props: any) => <AntDesign name="scan1" size={20} color="#673ab7" {...props} />,
    "history": (props: any) => <Octicons name="history" size={20} color="#673ab7" {...props} />
}

export const mockData: MuseumItem[] = [
    {
        name: "Crazy Statue",
        image: require("@/assets/images/img1.jpg")
    },
    {
        name: "Old Statue",
        image: require("@/assets/images/img2.jpg")
    },
    {
        name: "Human Skull",
        image: require("@/assets/images/img3.jpg")
    },
    {
        name: "Broken Statue",
        image: require("@/assets/images/img4.jpg")
    },
    {
        name: "Abstract Statue",
        image: require("@/assets/images/img5.jpg")
    },
]

// export const mockData: MuseumItem[] = [
//     {
//         id: "1",
//         name: "Abstract Painting",
//         description: "Abstract Painting that was created with utmost passion by Dr. Jose Rizal during WW2.",
//         image: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//     },
//     {
//         id: "2",
//         name: "Dark Painting",
//         description: "Dark Themed painting from an unknown artist.",
//         image:  "https://images.pexels.com/photos/1981468/pexels-photo-1981468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//     },
//     {
//         id: "3",
//         name: "Weird Painting",
//         description: "Colorful and lively painting that was created by a kid from Australia.",
//         image: "https://images.pexels.com/photos/2471235/pexels-photo-2471235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//     },
//     {
//         id: "4",
//         name: "Multicolored Painting",
//         description: "Mixed with dark colors to create something beautiful.",
//         image: "https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//     },
//     {
//         id: "5",
//         name: "Catchy Painting",
//         description: "Colorful and Lively Painting",
//         image: "https://images.pexels.com/photos/1812960/pexels-photo-1812960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//     },
//     {
//         id: "6",
//         name: "Green Themed Painting",
//         description: "A combination of reptilian color palette.",
//         image: "https://images.pexels.com/photos/4010108/pexels-photo-4010108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//     },
//     {
//         id: "7",
//         name: "Abstract Child Painting",
//         description: "A combination of mixed colors with a child",
//         image: "https://images.pexels.com/photos/2883057/pexels-photo-2883057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//     },
//     {
//         id: "8",
//         name: "Mixed Light Painting",
//         description: "A combination of mixed light colors",
//         image: "https://images.pexels.com/photos/1789968/pexels-photo-1789968.jpeg?auto=compress&cs=tinysrgb&w=1200"
//     }
// ];