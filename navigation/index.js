import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useSelector } from "react-redux";
import AuthNavigator from "./Auth/AuthNavigator";
import MainNavigator from "./Main/MainNavigator";

const AppNavigator = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <NavigationContainer>
      {auth.token !== null ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
