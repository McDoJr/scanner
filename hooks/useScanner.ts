import {useContext, useState} from "react";
import {useWindowDimensions} from "react-native";
// import {BarCodeScanningResult} from "expo-camera/legacy";
import {router} from "expo-router";
import {useCameraPermissions} from "expo-camera";
import {HistoryItem} from "@/types/types";
import {AppContext} from "@/context/context";
import {mockData} from "@/constants/constants";

export const useScanner = () => {

    const { setHistory } = useContext(AppContext);
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [permission, requestPermission] = useCameraPermissions();
    const [isFocused, setIsFocused] = useState(true);
    const [data, setData] = useState<string | null>(null);
    const [cooldown, setCooldown] = useState(0);
    const { width, height } = useWindowDimensions();

    const removeScanned = () => {
        setData(null);
    }

    const getAxis = (x: number, y: number) => {
        return {x, y};
    }

    const getBoundingBox = () => {
        const left = (width - 280) / 2;
        const right = width - left;
        const bottom = (height - 280) / 2;
        const top = height - bottom;
        const middleX = width / 2;
        const middleY = height / 2;

        const boundBox = [
            getAxis(left, bottom),
            getAxis(left, top),
            getAxis(right, top),
            getAxis(right, bottom)
        ];

        return {boundBox, left, right, top, bottom, middleX, middleY};
    }

    const isValidScan = (points: {x: number, y: number}[]) => {

        if(!isFocused || data) {
            return false;
        }

        const { left, right, top, bottom, middleX, middleY } = getBoundingBox();

        for(let i = 0; i < 4; i++) {
            const { x, y } = points[i];
            if(x < left || x > right || y > top || y < bottom) {
                return false;
            }

            const minimum = width < 414 ? 70 : 40;

            if(x < middleX && x > left + minimum) {
                return false;
            }

            if(x > middleX && x < right - minimum) {
                return false;
            }

            if(y > middleY && y < top - minimum) {
                return false;
            }

            if(y < middleY && y > bottom + minimum) {
                return false;
            }
        }

        return true;
    }

    const handleCodeScanned = ({data, cornerPoints}) => {
        // if(cornerPoints.length === 0) {
        //     return;
        // }
        //
        // const date = Date.now();
        // const canProceed = date - cooldown > 3000;
        //
        // if(isValidScan(cornerPoints) && canProceed && /^[0-9]+$/.test(data)) {
        //     setData(data);
        //     setCooldown(date);
        //     const item = mockData.find(item => item.id === data);
        //     setHistory(prevState => [{...item, date: Date.now()} as HistoryItem, ...prevState]);
        //
        //     //todo: fetch data from database, then redirect to /users/[id] if successful
        //
        //     router.push({
        //         pathname: "/user/[id]",
        //         params: {
        //             id: data,
        //         }
        //     });
        // }
    }

    return { hasPermission,
        setHasPermission,
        isFocused,
        setIsFocused,
        data,
        width,
        height,
        removeScanned,
        isValidScan,
        handleCodeScanned,
        permission,
        requestPermission
    };

};