import React from "react";
import { StatusBar } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home"; // Import the Home tab screen
import ProfileScreen from "./profile"; // Import the Profile tab screen
import SettingsScreen from "./settings"; // Import the Settings tab screen
import ListScreen from "./listScreen"; // Import the Settings tab screen
import { NavigationContainer } from "@react-navigation/native";
import ProductDetails from "./ProductDetails"; // Import the Detail tab
import InsuranceDetails from "./InsuranceDetails"; // Import the Detail tab
import MotorInsurance from "./MotorInsurance"; // Import the Detail tab
import { Ionicons } from "@expo/vector-icons"; // Ensure you have the correct import
import HomeScreen from "./Home";
import HomeScreen1 from "./HomeScreen";

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <>
      <StatusBar barStyle="white-content" backgroundColor="#1e40af" />

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline"; // Home icon
            } else if (route.name === "List") {
              iconName = focused ? "list" : "list-outline"; // List icon
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline"; // Profile icon
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings-outline"; // Settings icon
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#1e40af", // Active icon color
          tabBarInactiveTintColor: "gray", // Inactive icon color
          headerShown: true, // Show the header
          headerStyle: {
            backgroundColor: "#1e40af", // Tab header background color
          },
          headerTintColor: "#fff", // Tab header text and icon color
        })}
      >
        {/* Home Tab */}
        <Tab.Screen
          name="Home"
          component={HomeScreen1}
          options={{ title: "Home", headerShown: false }}
          screenOptions={{ headershown: false }}
        />
        {/* <Tab.Screen
          name="HomeScreen"
          component={HomeScreen1}
          options={{ title: "Home", headerShown: false }}
          screenOptions={{ headershown: false }}
        /> */}

        <Tab.Screen
          name="List"
          component={ListScreen}
          options={{ title: "List Insurance" }}
          screenOptions={{ headershown: false }}
        />
        {/* Profile Tab */}
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "Profile" }}
          screenOptions={{ headershown: false }}
        />

        {/* Product Details Screen - Hidden from Tabs */}
        <Tab.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{
            tabBarButton: () => null, // Hide ProductDetails from the bottom tab
            tabBarVisible: false, // Hide tabBar when viewing ProductDetails
          }}
        />
        {/* Settings Tab */}
        {/* Product Details Screen - Hidden from Tabs */}
        <Tab.Screen
          name="InsuranceDetails"
          component={InsuranceDetails}
          title="Moto Insurance Details"
          options={{
            tabBarButton: () => null, // Hide ProductDetails from the bottom tab
            tabBarVisible: false,
            // Hide tabBar when viewing ProductDetails
          }}
        />
        <Tab.Screen
          name="MotorInsurance"
          component={MotorInsurance}
          title="Moto Insurances Details"
          options={{
            tabBarButton: () => null, // Hide ProductDetails from the bottom tab
            tabBarVisible: false,
            // Hide tabBar when viewing ProductDetails
          }}
        />
        {/* Settings Tab */}
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: "Settings" }}
          screenOptions={{ headershown: false }}
        />
      </Tab.Navigator>
    </>
  );
}
