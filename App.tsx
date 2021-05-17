/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AppNavigator from "./app/navigator";

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: "#FFF", flex: 1 }}>
        <AppNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
