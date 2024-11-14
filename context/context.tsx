import React, {createContext, Dispatch, SetStateAction, useEffect, useState} from "react";
import {HistoryItem} from "@/types/types";
import {API_KEY} from "@/constants/constants";
import axios from "axios";

type AppContextType = {
    history: HistoryItem[],
    setHistory: Dispatch<SetStateAction<HistoryItem[]>>
}

export const AppContext = createContext<AppContextType>({
    history: [],
    setHistory: () => {}
});

const AppProvider = ({ children  }: {children: React.ReactNode}) => {

    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [datas, setDatas] = useState({});

    useEffect(() => {
        // axios.get(`${BASE_URL}?apikey=${API_KEY}&size=5&hasimage=1&fields=id,title,primaryimageurl`).then(res => {
        //     // console.log(res.data.records);
        // }).catch(console.log);
    }, []);


    return (
        <AppContext.Provider value={{ history, setHistory }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;