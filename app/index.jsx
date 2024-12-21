import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground,Image } from 'react-native';
import { useNavigation } from 'expo-router';

export default function Index() {
  const navigation = useNavigation();

  return (
    <View className="flex-1">
      {/* Background Image */}
      <ImageBackground
        source={{ uri: 'https://img.freepik.com/premium-photo/abstract-blue-curved-lines-background_1174990-218533.jpg' }} // Placeholder image URL
        className="flex-1 justify-center items-center mb-4"
        resizeMode="cover"
      >
        <View className="flex-1 justify-center items-center">
          {/* Title */}
          <Image
            source={require('../assets/images/logoindia.jpg')}
            className="w-64 h-20 rounded-lg"
            resizeMode="contain"
          />
        </View>
        {/* Background Image Button */}
        <View className="absolute bottom-8 w-4/5 mx-auto">
          <TouchableOpacity
            className="bg-blue-800 w-full h-12 justify-center items-center rounded-full"
            activeOpacity={0.7}
            onPress={() => navigation.navigate('signupWithEmailScreen')}
          >
            <Text className="text-white text-lg font-bold">Let Start</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
