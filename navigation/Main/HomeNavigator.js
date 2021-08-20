import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import { NavigationHeaderStyle } from "../../constants/Styles";

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ ...NavigationHeaderStyle }}
    >
      <HomeStack.Screen
        name="HomeScreen"
        options={{ title: "Inicio" }}
        component={View}
      />

      <HomeStack.Screen
        name="CommentScreen"
        options={{ title: "Comentarios" }}
        component={View}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
