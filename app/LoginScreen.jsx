import React, { useState } from "react";
import { View,Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Picker } from "@react-native-picker/picker"; // Importing the Picker
import { Link , router  } from 'expo-router';

const LoginScreen = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("Oman"); // Default country

  const countryCodes = [
    { name: "Oman", code: "+968" },
  
    // Add more countries as needed
  ];

  // Get the selected country's code
  const selectedCountryCode = countryCodes.find(
    (country) => country.name === selectedCountry
  )?.code;

  const handleLogin = () => {
    if (mobileNumber) {
      navigation.navigate("OtpScreen", { mobileNumber }); // Pass mobile number to OtpScreen
    } else {
      alert("Please enter your mobile number.");
    }
  };

  return (
    <View className="flex-1 bg-gradient-to-b from-blue-500 to-blue-500 items-center justify-center px-3 py-8">
      {/* Top Image */}
      <Image
      source={require("../assets/images/logoindia.jpg")} // Replace with your image path
      className="w-72 h-80 mb-3 p-12 shadow-lg border-4 border-white"
      resizeMode="contain"
    />

      {/* Login Section */}
      <View className="w-full bg-white rounded-3xl p-4 shadow-lg items-center">
        <Text className="text-3xl font-extrabold text-blue-700 mb-4">
          Log In
        </Text>
        <Text className="text-gray-600 text-center mb-8">
          Enter your mobile number to receive an OTP for verification
        </Text>

      {/* Country Dropdown with Mobile Number Input */}
      <View className="flex-row items-center w-full bg-gray-100 rounded-xl border border-gray-300 px-4 py-3 mb-6 shadow-sm">
          <Text className="text-blue-700 text-sm  mr-3">
            {selectedCountryCode}
          </Text>

          {/* Country Picker */}
          <Picker
            selectedValue={selectedCountry}
            onValueChange={(value) => setSelectedCountry(value)}
            style={{
              height: 40, // Set height to make the picker visible
              width: 20, // Set width of the picker
              marginRight: 10, // Space between the picker and input box
            }}
          >
            {countryCodes.map((country) => (
              <Picker.Item
                key={country.name}
                label={`${country.name} (${country.code})`}
                value={country.name}
              />
            ))}
           
          </Picker>

          {/* Mobile Number Input */}
          <TextInput
            placeholder="Enter your mobile number"
            className="flex-1 text-gray-700 text-base"
            keyboardType="phone-pad"
            value={mobileNumber}
            onChangeText={setMobileNumber}
          />
        </View>

        {/* Login Button */}
     

        <TouchableOpacity
          className="bg-blue-800 rounded-full py-2 px-20 mb-4"
          onPress={handleLogin}
        >
          <Text className="text-white text-lg font-semibold text-center">
            Log in
          </Text>
        </TouchableOpacity>
        
        <Text className="text-sm text-center">
          Don't have an account?{' '}
          <Text className="text-blue-600 font-semibold underline">
           <Link href="/signupWithEmailScreen"> Sign up</Link>
          </Text>
        </Text>
        {/* Terms & Conditions */}
        <Text className="text-gray-500 text-xs text-center mt-6">
          By proceeding, you agree to the app’s{" "}
          <Text className="text-blue-600 underline">Terms & Conditions</Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
