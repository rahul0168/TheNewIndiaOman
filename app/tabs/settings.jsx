import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function SettingsScreen() {
  return (
    <View className="flex-1 bg-gray-100 p-4">
      <View className="bg-white p-6 rounded-lg shadow-md">
        {/* <Text className="text-2xl font-bold mb-4">Settings</Text> */}
        
        {/* Option 1: Profile Settings */}
        <TouchableOpacity className="py-3 border-b border-gray-300 mb-2">
          <Text className="text-lg">Profile Settings</Text>
        </TouchableOpacity>
        
        {/* Option 2: Account Security */}
        <TouchableOpacity className="py-3 border-b border-gray-300 mb-2">
          <Text className="text-lg">Account Security</Text>
        </TouchableOpacity>
        
        {/* Option 3: Notifications */}
        <TouchableOpacity className="py-3 border-b border-gray-300 mb-2">
          <Text className="text-lg">Notifications</Text>
        </TouchableOpacity>

         {/* Option 4: Privacy Settings */}
         <TouchableOpacity className="py-3 border-b border-gray-300 mb-2">
          <Text className="text-lg">Help Center</Text>
        </TouchableOpacity>
        
        {/* Option 4: Privacy Settings */}
        <TouchableOpacity className="py-3 border-b border-gray-300 mb-2">
          <Text className="text-lg">Privacy Settings</Text>
        </TouchableOpacity>
        
        {/* Option 5: Logout */}
        <TouchableOpacity className="py-3">
          <Text className="text-lg text-red-500">Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
