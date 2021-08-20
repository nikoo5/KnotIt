import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Colors from "./constants/Colors";
import AppNavigator from "./navigation";
import { Provider, useDispatch } from "react-redux";
import store from "./store";

const App = () => {
  const [fontsLoaded, _] = useFonts({
    comfortaa: require("./assets/fonts/Comfortaa/Comfortaa-Regular.ttf"),
    "comfortaa-bold": require("./assets/fonts/Comfortaa/Comfortaa-Bold.ttf"),
    "comfortaa-light": require("./assets/fonts/Comfortaa/Comfortaa-Light.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <View style={styles.app}>
        <SafeAreaView style={styles.safeArea}>
          <AppNavigator />
        </SafeAreaView>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: Colors.primary.main,
  },
  safeArea: {
    flex: 1,
  },
});

export default App;
