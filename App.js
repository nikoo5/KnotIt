import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Colors from "./constants/Colors";
import AppNavigator from "./navigation";

const App = () => {
  return (
    <View style={styles.app}>
      <SafeAreaView style={styles.safeArea}>
        <AppNavigator />
      </SafeAreaView>
    </View>
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
