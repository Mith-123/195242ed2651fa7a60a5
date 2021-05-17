import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const RootStack = createStackNavigator();

function appNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator></RootStack.Navigator>
    </NavigationContainer>
  );
}
