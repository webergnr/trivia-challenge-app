import React from "react";

import Home from "../screens/Home";
import Quiz from "../screens/Quiz";
import Results from "../screens/Results";

import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";

const Stack = createStackNavigator();

const defaultOptions: StackNavigationOptions = {
  headerShown: false,
};

const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={defaultOptions} />
        <Stack.Screen name="Quiz" component={Quiz} options={defaultOptions} />
        <Stack.Screen
          name="Result"
          component={Results}
          options={defaultOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
