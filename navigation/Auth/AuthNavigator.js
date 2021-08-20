import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationHeaderStyle } from "../../constants/Styles";
import { View } from "react-native";

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="AuthLogin"
      screenOptions={{ ...NavigationHeaderStyle }}
    >
      <AuthStack.Screen
        name="AuthLogin"
        options={{ headerShown: false, title: "Login" }}
        component={View}
      />
      <AuthStack.Screen
        name="AuthRegister"
        options={{ headerShown: true, title: "Registro" }}
        component={View}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
