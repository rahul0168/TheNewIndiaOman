import React, { useState } from 'react';
import { View, Text,  TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { TextInput,Card } from 'react-native-paper';
export default function SignupScreen() {
  const router = useRouter(); // For navigation
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  // Function to handle sign-up logic
  const handleSignUp = () => {
    if (!email || !password || !confirmPassword) {
      alert('Please fill all fields');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    alert('Sign Up successful');
    navigation.replace('tabs'); 
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
<Card className="w-full bg-white p-6 rounded-tl-2xl rounded-tr-2xl shadow-lg mt-auto">
      {/* Logo */}
      <Image
        source={require('../assets/images/logoindia.jpg')}
        className="w-48 h-20 mb-2 self-center"
        resizeMode="contain"
      />

      {/* Title */}
      <Text className="text-2xl font-bold text-center text-gray-800 mb-4">Sign Up</Text>

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
      

      {/* Phone Input */}
      <TextInput
        mode="outlined"
        label="Phone"
        value={phone}
        onChangeText={setPhone}
        style={{ marginBottom: 16, borderRadius: 12 }}
        theme={{
          roundness: 12,
          colors: { primary: '#6b7280', background: '#ffffff' },
        }}
       
      />

      {/* Password Input */}
      <TextInput
        mode="outlined"
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ marginBottom: 16, borderRadius: 12 }}
        theme={{
          roundness: 12,
          colors: { primary: '#6b7280', background: '#ffffff' },
        }}
      />

      {/* Confirm Password Input */}
      {/* <TextInput
        mode="outlined"
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={{ marginBottom: 24, borderRadius: 12 }}
        theme={{
          roundness: 12,
          colors: { primary: '#6b7280', background: '#ffffff' },
        }}
      /> */}

      {/* Sign Up Button */}
      {/* <TouchableOpacity
        className="bg-blue-600 px-6 py-3 rounded-lg w-full mb-4 shadow-lg"
        onPress={handleSignUp}
      >
        <Text className="text-white text-sm font-semibold text-center">Sign Up</Text>
      </TouchableOpacity> */}
       <TouchableOpacity
              className="bg-blue-800 rounded-full py-2 mb-4"
              onPress={handleSignUp}
            >
              <Text className="text-white text-lg font-semibold text-center">Sign Up</Text>
            </TouchableOpacity>

      {/* OR Separator */}
      <View className="flex-row items-center mb-4">
        <View className="flex-1 border-b border-gray-300"></View>
        <Text className="mx-2 text-gray-500">OR</Text>
        <View className="flex-1 border-b border-gray-300"></View>
      </View>

      {/* Google Sign Up Button */}
      <TouchableOpacity className="bg-white flex-row items-center justify-center mb-6 shadow-md">
        <Image
          source={require('../assets/images/google-icon.png')}
          className="w-5 h-5 mr-3"
        />
        {/* <Text className="text-blue-600 text-base font-semibold">
          Sign Up with Google
        </Text> */}
      </TouchableOpacity>

      {/* Link to Login */}
      <View className="justify-center items-center">
        <Text className="text-gray-600 text-sm text-center">
          Already have an account?{' '}
          <Link href="/LoginWithEmailScreen">
 
          <Text className="text-blue-600 font-semibold">Login</Text>
          </Link>
        </Text>
      </View>
    </Card>
  </ImageBackground>
  );
}
