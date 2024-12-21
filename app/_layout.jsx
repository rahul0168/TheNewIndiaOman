import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from "./index"; // Import StartScreen
import LoginScreen from "./LoginScreen"; // Import LoginScreen
import signupWithEmailScreen from "./signupWithEmailScreen"; // Import LoginScreen
import LoginWithEmailScreen from "./LoginWithEmailScreen"; // Import LoginScreen
import OtpScreen from "./OtpScreen"; // Import LoginScreen
import VerifiedOtpScreen from "./VerifiedOtpScreen"; // Import LoginScreen
import TabLayout from "./tabs/_layout"; // Import TabLayout component
// import DetailScreen from './DetailScreen'
const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <Stack.Navigator initialRouteName="index">
      {/* Start Screen */}
      <Stack.Screen
        name="index"
        component={StartScreen}
        options={{ title: "Start Screen", headerShown: false }} // Hide header for start screen
      />

      {/* Login Screen */}
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ title: "Login Screen", headerShown: false }} // Hide header for login screen
      />

      <Stack.Screen
        name="signupWithEmailScreen"
        component={signupWithEmailScreen}
        options={{ title: "Login Screen", headerShown: false }} // Hide header for login screen
      />

      <Stack.Screen
        name="LoginWithEmailScreen"
        component={LoginWithEmailScreen}
        options={{ title: "Login Screen", headerShown: false }} // Hide header for login screen
      />

      <Stack.Screen
        name="OtpScreen"
        component={OtpScreen}
        options={{ title: "otp Screen", headerShown: false }} // Hide header for login screen
      />

      <Stack.Screen
        name="VerifiedOtpScreen"
        component={VerifiedOtpScreen}
        options={{ title: "otpveify Screen", headerShown: false }} // Hide header for login screen
      />

      {/* Tabs Navigator */}
      <Stack.Screen
        name="tabs"
        component={TabLayout} // Render the TabLayout component
        options={{ headerShown: false }} // Hide header for tabs navigator
      />
    </Stack.Navigator>
  );
}
