import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { styled } from 'nativewind'; // Ensure NativeWind is imported
import { Link , router  } from 'expo-router';

export default function Home({ navigation }) {
  return (
    <ScrollView className="flex-1 bg-gray-100">
      {/* Header Section */}
      <View className="bg-blue-500 py-10 px-5">
        <Text className="text-white text-4xl font-bold">Welcome to Rent Anything</Text>
        <Text className="text-white text-lg mt-2">Find or rent anything you need!</Text>
      </View>

      {/* Feature Section */}
      <View className="p-5">
        <Text className="text-2xl font-bold text-gray-800 mb-4">Explore Categories</Text>

        <View className="flex-row justify-between mb-4">
          <TouchableOpacity
            className="bg-white rounded-lg shadow-md p-5 flex-1 mr-2"
            onPress={() => navigation.navigate('Detail')}
          >
            <Text className="text-blue-500 text-center font-bold">Vehicles</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-white rounded-lg shadow-md p-5 flex-1 ml-2"
            onPress={() => navigation.navigate('Detail')}
          >
            <Text className="text-blue-500 text-center font-bold">Electronics</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-between">
          <TouchableOpacity
            className="bg-white rounded-lg shadow-md p-5 flex-1 mr-2"
            onPress={() => navigation.navigate('Detail')}
          >
            <Text className="text-blue-500 text-center font-bold">Real Estate</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-white rounded-lg shadow-md p-5 flex-1 ml-2"
            onPress={() => navigation.navigate('Detail')}
          >
            <Text className="text-blue-500 text-center font-bold">Furniture</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Action Buttons */}
      <View className="p-5">
        <TouchableOpacity
          className="bg-blue-500 py-3 rounded-full shadow-md mb-4"
          onPress={() => navigation.navigate('Detail')}
        >
          <Text className="text-white text-center text-xl font-bold">Start Renting</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-gray-500 py-3 rounded-full shadow-md"
          
        >
          <Link href="/listScreen"> <Text className="text-white text-center text-xl font-bold">List Your Item</Text></Link>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
