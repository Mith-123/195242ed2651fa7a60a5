import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screen/home";
import Details from "./screen/details";

const RootStack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name={"Home"} component={Home} />
        <RootStack.Screen name={"Details"} component={Details} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
