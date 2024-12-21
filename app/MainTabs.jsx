import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Import Tab Navigator
import Home from './tabs/Home'; // Import Home component

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={Home} />
    </Tab.Navigator>
  );
}
