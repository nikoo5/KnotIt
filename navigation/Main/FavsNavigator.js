import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import { NavigationHeaderStyle } from "../../constants/Styles";

const FavsStack = createStackNavigator();

const FavsNavigator = () => {
  return (
    <FavsStack.Navigator
      initialRouteName="FavsScreen"
      screenOptions={() => NavigationHeaderStyle}
    >
      <FavsStack.Screen
        name="FavsScreen"
        options={{ title: "Favoritos" }}
        component={View}
      />
    </FavsStack.Navigator>
  );
};

export default FavsNavigator;
