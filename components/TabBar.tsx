import {BottomTabBarProps} from "@react-navigation/bottom-tabs";
import React from "react";
import {TabBarContainer} from "@/styles/tabBarStyles";
import TabBarItem from "./TabBarItem";

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {

    return (
        <TabBarContainer style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                const name = route.name;

                return <TabBarItem {...{isFocused, options, onPress, onLongPress, name}} key={name} />
            })}
        </TabBarContainer>
    );
}

export default TabBar;