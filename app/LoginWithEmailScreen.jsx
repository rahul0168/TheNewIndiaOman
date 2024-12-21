import React, { useState } from 'react';
import { View, Text,  TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { Card, TextInput, IconButton } from 'react-native-paper';

export default function LoginWithEmailScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    if (email && password) {
      alert('Login successful');
      navigation.replace('tabs');
    } else {
      alert('Please enter email and password');
    }
  };

  return (
    <ImageBackground
    source={{ uri: 'https://img.freepik.com/premium-photo/abstract-blue-curved-lines-background_1174990-218533.jpg' }} // Placeholder image URL
    className="flex-1 justify-center items-center"
    resizeMode="cover"
  >
        {/* Back Button */}
           <TouchableOpacity
            style={{
              position: 'absolute',
              top: 40, // Adjust according to your design
              left: 20, // Adjust spacing
              zIndex: 10, // Ensure it appears above other elements
            }}
            onPress={() => console.log('Back button pressed')}
          >
            <Ionicons name="arrow-back" size={24} color="white" /> 
          </TouchableOpacity>

<View className="w-full bg-white p-6 rounded-tl-2xl rounded-tr-2xl shadow-lg mt-auto">
{/* Logo */}
      <Image
        source={require('../assets/images/logoindia.jpg')}
        className="w-48 h-20 mb-3 self-center"
        resizeMode="contain"
      />

      {/* Title */}
      <Text className="text-2xl font-bold text-blue-800 text-center mb-6">Sign in</Text>

      {/* Email Input */}
         <TextInput
        mode="outlined"
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={{ marginBottom: 16, borderRadius: 12 }}
        theme={{
          roundness: 12,
          colors: { primary: '#6b7280', background: '#ffffff' },
        }}
      />
        <TextInput
        mode="outlined"
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!passwordVisible}
        style={{ marginBottom: 16, borderRadius: 12 }}
        theme={{
          roundness: 12,
          colors: { primary: '#6b7280', background: '#ffffff' },
        }}
        right={
          <TextInput.Icon
            icon={passwordVisible ? 'eye-off-outline' : 'eye-outline'}
            color="#6b7280" // Adjust the color to match the theme
            onPress={() => setPasswordVisible(!passwordVisible)}
          />
        }
      />
      
      {/* Login Button */}
      <TouchableOpacity
        className="bg-blue-800 rounded-full py-2 mb-4"
        onPress={handleLogin}
      >
        <Text className="text-white text-lg font-semibold text-center">Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity
      className="bg-white rounded-full py-3 flex flex-row items-center justify-center mb-6 shadow-md"
      onPress={() => navigation.navigate('LoginScreen')} // Replace with your navigation logic
    >
      <Text className="text-blue-800 text-base font-semibold">Login with Phone Number</Text>
    </TouchableOpacity>

       {/* OR Separator */}
            <View className="flex-row items-center mb-4">
              <View className="flex-1 border-b border-gray-300"></View>
              <Text className="mx-2 text-gray-500">OR</Text>
              <View className="flex-1 border-b border-gray-300"></View>
            </View>

            
      {/* Forgot Password */}

      

      {/* Google Login Button */}
      <TouchableOpacity className="bg-white rounded-full py-3 flex flex-row items-center justify-center mb-6 shadow-md">
        <Image
          source={require('../assets/images/google-icon.png')}
          className="w-5 h-5 mr-3"
        />
        {/* <Text className="text-blue-800 text-base font-semibold">Login with Google</Text> */}
      </TouchableOpacity>
       
        
        <Text className="text-sm text-blue text-center mb-5">Forgot your password?</Text>

        {/* Sign Up Link */}
        <Text className="text-sm text-blue text-center">
          Don't have an account?{' '}
          <Text
            className="font-semibold text-blue-600"
            onPress={() => navigation.navigate('signupWithEmailScreen')}
          >
            Sign up
          </Text>
      </Text>
    </View>
    
  </ImageBackground>
  );
}
