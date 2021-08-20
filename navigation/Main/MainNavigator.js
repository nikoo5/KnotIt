import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationBottomBarStyle } from "../../constants/Styles";
import Icon from "react-native-vector-icons/Ionicons";

import FavsNavigator from "./FavsNavigator";
import HomeNavigator from "./HomeNavigator";
import UserNavigator from "./UserNavigator";

const MainBottomTab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <MainBottomTab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{ ...NavigationBottomBarStyle }}
    >
      <MainBottomTab.Screen
        name="FavsStack"
        options={{
          title: "Favoritos",
          tabBarIcon: ({ color, size, focused }) => (
            <Icon
              name={focused ? "heart" : "heart-outline"}
              size={size}
              color={color}
            />
          ),
        }}
        component={FavsNavigator}
      />

      <MainBottomTab.Screen
        name="HomeStack"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size, focused }) => (
            <Icon
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
        component={HomeNavigator}
      />

      <MainBottomTab.Screen
        name="UserStack"
        options={{
          title: "Usuario",
          tabBarIcon: ({ color, size, focused }) => (
            <Icon
              name={focused ? "person" : "person-outline"}
              size={size}
              color={color}
            />
          ),
        }}
        component={UserNavigator}
      />
    </MainBottomTab.Navigator>
  );
};

export default MainNavigator;
