import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import { NavigationHeaderStyle } from "../../constants/Styles";

const UserStack = createStackNavigator();

const UserNavigator = () => {
  return (
    <UserStack.Navigator
      initialRouteName="UserScreen"
      screenOptions={() => NavigationHeaderStyle}
    >
      <UserStack.Screen
        name="UserScreen"
        options={{ title: "Usuario" }}
        component={View}
      />
    </UserStack.Navigator>
  );
};

export default UserNavigator;
