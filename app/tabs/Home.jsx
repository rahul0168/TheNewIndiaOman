import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from 'expo-router';

const insuranceSlides = [
  { title: "Motor Insurance", icon: "car", color: "#4299e1", bgImage: require('../../assets/images/motors.jpg') },
  { title: "Car Insurance", icon: "car", color: "#4299e1", bgImage: require('../../assets/images/motor.jpg') },
  { title: "Health Insurance", icon: "heart", color: "#4299e1", bgImage: require('../../assets/images/healths.jpg') },
  { title: "Home Insurance", icon: "home", color: "#4299e1", bgImage: require('../../assets/images/home.jpg') },
  { title: "Travel Insurance", icon: "airplane", color: "#4299e1", bgImage: require('../../assets/images/travel.jpg') },
];

export default function HomeScreen() {
  const navigation = useNavigation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % insuranceSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + insuranceSlides.length) % insuranceSlides.length);
  };

  return (
    <View className="flex-1 bg-gray-100">
      <ScrollView className="flex-1">
      {/* Header Section */}
      <View className="p-2">

      
          <View style={{
          marginTop: 12,
          padding: 16,
          borderRadius: 10,
          backgroundColor: '#1e40af'
        }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>Welcome to The New India Oman Issurance</Text>
          <Text style={{ fontSize: 18, color: 'rgba(255, 255, 255, 0.8)' }}>Your safety, our priority!</Text>
        </View>
        </View>


        {/* Featured Insurance */}
        <View className="p-4 ">
          <View className="relative">
            <ImageBackground
              source={insuranceSlides[currentSlide].bgImage}
              className="h-48 rounded-lg flex items-center justify-center "
              resizeMode="cover"
            >
              {/* Overlay */}
              <View
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  borderRadius: 10,
                }}
              />

              {/* Icon and Text */}
              <View style={{ zIndex: 1, alignItems: 'center' }}>
                <Text className="text-2xl font-bold text-white mt-2 text-center">
                  {insuranceSlides[currentSlide].title}
                </Text>
              </View>
            </ImageBackground>

            {/* Previous and Next buttons */}
            <TouchableOpacity className="absolute left-4 top-1/2 transform -translate-y-1/2" onPress={prevSlide}>
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity className="absolute right-4 top-1/2 transform -translate-y-1/2" onPress={nextSlide}>
              <Ionicons name="arrow-forward" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="p-4">
          <Text className="text-lg font-bold mb-4">Insurance Options</Text>
          
          {/* Two-column grid layout */}
          <View className="flex flex-row flex-wrap -mx-2">
            {insuranceSlides.map((item, index) => (
              <TouchableOpacity key={index} className="w-1/2 px-2 mb-4">
                <View className="relative rounded-lg shadow-lg overflow-hidden">
                  <ImageBackground
                    source={item.bgImage}
                    className="h-40 rounded-lg overflow-hidden"
                    resizeMode="cover"
                  >
                    {/* Overlay */}
                    <View style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.4)',
                      borderRadius: 10,
                    }} />

                    {/* Icon and Text */}
                    <View className="py-10" style={{ zIndex: 1, alignItems: 'center', justifyContent: 'center' }}>
                      <Text className="mt-2 text-lg font-bold text-white text-center">
                        {item.title}
                      </Text>

                      {/* View Button */}
                      <TouchableOpacity
                        className="mt-2 py-1 px-3 bg-white rounded-full"
                        onPress={() => navigation.navigate('MotorInsurance', { id: index })}
                      >
                        <Text className="text-sm font-bold text-blue-800">
                          View
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Footer Section */}
        <View className="p-4 bg-gray-200 rounded-t-lg">
          <Text className="text-lg font-bold text-center">Need Assistance?</Text>
          <Text className="text-center text-gray-600">Contact our support team for any inquiries.</Text>
        </View>
      </ScrollView>
    </View>
  );
}
