import React, { useState, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

const OtpScreen = ({ navigation }) => {
  const [otp, setOtp] = useState(["", "", "", ""]); // For storing OTP values
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]; // Refs for each input box

  // Handler for OTP input changes
  const handleInputChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to the next input if text is entered
    if (text && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  // Navigate to VerifiedOtpScreen
  const handleContinue = () => {
    if (otp.join("").length === 4) { // Ensure all 4 digits are entered
      navigation.navigate("VerifiedOtpScreen"); // Navigate to VerifiedOtpScreen
    } else {
      alert("Please enter a valid 4-digit OTP.");
    }
  };

  return (
    <View className="flex-1 bg-gradient-to-b from-indigo-500 to-blue-500 items-center justify-center px-5">
      {/* Top Shield Icon */}
      <Image
      source={require("../assets/images/logoindia.jpg")} // Replace with your image path
      className="w-72 h-80 mb-3 p-12 shadow-lg border-4 border-white"
      resizeMode="contain"
    />

      {/* OTP Section */}
      <View className="w-full bg-white rounded-3xl p-8 shadow-lg items-center">
        <Text className="text-3xl font-extrabold text-blue-700 mb-4">
          Enter OTP
        </Text>
        <Text className="text-gray-600 text-center mb-6">
          A 4-digit code has been sent to your mobile number
        </Text>

        {/* OTP Input Boxes */}
        <View className="flex-row justify-between w-full mb-6 px-7">
          {otp.map((value, index) => (
            <TextInput
              key={index}
              value={value}
              onChangeText={(text) => handleInputChange(text, index)}
              maxLength={1}
              keyboardType="numeric"
              className="w-14 mr-1 h-14 text-lg font-bold text-center text-gray-700 border border-gray-300 rounded-md bg-gray-100 shadow"
              ref={inputRefs[index]} // Set ref for each input box
            />
          ))}
        </View>

        {/* Verify Button */}
        <TouchableOpacity
          className="bg-blue-800 rounded-full py-2 px-20 mb-4"
          onPress={handleContinue}
        >
          <Text className="text-white text-lg font-semibold text-center">
            Verify OTP
          </Text>
        </TouchableOpacity>

        {/* Resend Option */}
        <Text className="text-gray-500 text-sm text-center mt-6">
          Didn’t receive the OTP?{" "}
          <Text className="text-blue-600 underline">Resend</Text>
        </Text>
      </View>
    </View>
  );
};

export default OtpScreen;
