import React from "react";

import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Onboarding from "../screens/Onboarding";
import SignUp from "../screens/SignUp";
import navigationList from "../utils/navigationList";

const Routes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name={navigationList.ONBOARDING}
            component={Onboarding}
          />
          <Stack.Screen
            name={navigationList.SIGN_UP}
            component={SignUp}
            options={{
              title: "Sign Up",
            }}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
