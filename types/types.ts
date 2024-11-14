

export type MuseumItem = {
    id?: string,
    name: string,
    description?: string,
    image: ImageRequireSource
}

import {ImageRequireSource} from "react-native";

export type HistoryItem = {
    id: string,
    name: string,
    description: string,
    image: string,
    date: number
}