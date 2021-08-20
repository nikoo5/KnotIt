import { Platform } from "react-native";
import Colors from "./Colors";

export const NavigationBottomBarStyle = {
  tabBarActiveTintColor: "white",
  tabBarInactiveTintColor: "white",
  tabBarStyle: {
    backgroundColor: Colors.primary.dark,
  },
  headerShown: false,
  //   tabBarLabelStyle: {
  //     fontFamily: "comfortaa",
  //   },
};
export const NavigationHeaderStyle = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary.dark : "",
  },
  //   headerTitleStyle: {
  //     fontFamily: "comfortaa",
  //   },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary.dark,
};
