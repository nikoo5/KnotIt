import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthNavigator from "./Auth/AuthNavigator";
import MainNavigator from "./Main/MainNavigator";

const AppNavigator = () => {
  const authenticated = false;

  return (
    <NavigationContainer>
      {authenticated ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
