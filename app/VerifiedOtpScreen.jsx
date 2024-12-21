import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const VerifiedOtpScreen = ({ navigation }) => {
  const handleContinue = () => {
    alert("Proceeding to the app!");
    // Navigate to the next screen or dashboard
    navigation.replace("tabs"); // Replace 'Dashboard' with your desired route
  };

  return (
    <View className="flex-1 bg-white items-center justify-center px-5">
    <View className="items-center">
      <Ionicons name="checkmark-circle" size={64} color="green" className="mb-4" />
      <Text className="text-3xl font-extrabold text-green-600 mb-4">
        OTP Verified!
      </Text>
      <Text className="text-gray-600 text-center mb-8">
        Your phone number has been successfully verified. You can now proceed.
      </Text>
    </View>

      {/* Continue Button */}
     
      <TouchableOpacity
          className="bg-blue-800 rounded-full py-2 px-20 mb-4"
          onPress={handleContinue}
        >
          <Text className="text-white text-lg font-semibold text-center">
          Continue
          </Text>
        </TouchableOpacity>
    </View>
  );
};

export default VerifiedOtpScreen;
