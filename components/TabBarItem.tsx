import React, {useEffect} from 'react'
import {TabBarView} from "@/styles/tabBarStyles";
import {BottomTabNavigationOptions} from "@react-navigation/bottom-tabs";
import {icons} from "@/constants/constants";
import Animated, {interpolate, useAnimatedStyle, useSharedValue, withSpring} from "react-native-reanimated";
import {Colors} from "@/constants/Colors";

type TabBarItemProps = {
    isFocused: boolean,
    options: BottomTabNavigationOptions,
    onPress: () => void,
    onLongPress: () => void,
    name: string
};

const TabBarItem = ({ isFocused, options, onPress, onLongPress, name }: TabBarItemProps) => {

    const scale = useSharedValue(0);

    useEffect(() => {
        scale.value = withSpring((isFocused ? 1 : 0), {
            duration: 350
        });
    }, [scale, isFocused]);

    const animatedIconStyle = useAnimatedStyle(() => {
        const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2]);

        return { transform: [{scale: scaleValue}] };
    });

    return (
        <TabBarView
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1}}
        >

            <Animated.View style={[animatedIconStyle,
                {padding: 5, backgroundColor: isFocused ? Colors.primaryLight2 : Colors.primary2, borderRadius: 8}
            ]}>
                {icons[name]({
                    color: '#FFFFFF'
                })}
            </Animated.View>
        </TabBarView>
    )
}

export default TabBarItem;
