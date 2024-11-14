import React from "react";
import { router, Tabs } from "expo-router";
import TabBar from "@/components/TabBar";
import { Fonts } from "@/constants/Fonts";
import { FontAwesome6 } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";

const TabLayout = () => {
  const onPress = () => {
    router.push({
      pathname: "/auth/signin",
    });
  };

  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
        headerRightContainerStyle: {},
        headerRight: () => (
          <TouchableOpacity style={{ marginRight: 15 }} onPress={onPress}>
            <FontAwesome6 name="user-circle" size={22} />
          </TouchableOpacity>
        ),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          headerTitle: "Home",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: Fonts.sora,
            fontSize: 20,
          },
        }}
      />
      <Tabs.Screen name="scanner" />
      <Tabs.Screen
        name="history"
        options={{
          headerShown: true,
          headerTitle: "History",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: Fonts.sora,
            fontSize: 20,
          },
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
