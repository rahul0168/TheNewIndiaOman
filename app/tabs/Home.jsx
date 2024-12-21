import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Carousel from 'react-native-reanimated-carousel';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH - 20;

export default function HomeScreen() {
  const carouselData = [
    {
      title: "Cyber Security Month!",
      subtitle: "here-cyber",
      price: "Cover Starts @₹2/day",
      image: require('../../assets/images/healths.jpg'),
    },
    {
      title: "Health Insurance",
      subtitle: "here-health",
      price: "Cover Starts @₹19/day",
      image: require('../../assets/images/logoindia.jpg'),
    },
    {
      title: "Auto Insurance",
      subtitle: "here-auto",
      price: "Cover Starts @₹538/yr",
      image: require('../../assets/images/logoindia.jpg'),
    },
  ];

  const renderCarouselItem = ({ item }) => (
    <View className="bg-blue-100 p-5 rounded-xl overflow-hidden h-96">
      <View className="flex-1 pr-4">
        <Text className="text-blue-600 text-base">{item.subtitle}</Text>
        <Text className="text-blue-900 text-3xl font-bold my-2">{item.title}</Text>
        <Text className="text-blue-800 text-lg mb-4">{item.price}</Text>
        <TouchableOpacity className="bg-blue-500 px-6 py-3 rounded-full self-start">
          <Text className="text-white font-semibold">Get Insured</Text>
        </TouchableOpacity>
      </View> 
      <Image
        source={item.image}
        className="w-36 h-36 absolute right-2 bottom-2"
        resizeMode="contain"
      />
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="flex-row justify-between items-center p-4">
          <Image
            source={require('../../assets/images/logoindia.jpg')}
            className="w-24 h-8"
            resizeMode="contain"
          />
          <TouchableOpacity className="bg-gray-100 px-4 py-2 rounded-full">
            <Text className="text-gray-800 text-sm">What's New</Text>
          </TouchableOpacity>
        </View>

        {/* Hero Banner Slider */}
        <View className="my-4">
          <Carousel
            loop
            width={ITEM_WIDTH}
            height={200}
            autoPlay={true}
            data={carouselData}
            scrollAnimationDuration={1000}
            renderItem={renderCarouselItem}
          />
        </View>

        {/* My Policies Section */}
        <View className="bg-blue-500 mx-4 my-6 p-5 rounded-xl">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-white text-2xl font-bold">My Policies</Text>
            <TouchableOpacity className="bg-white flex-row items-center px-4 py-2 rounded-full">
              <Ionicons name="add" size={20} color="#3B82F6" />
              <Text className="text-blue-500 font-semibold ml-2">Link Policy</Text>
            </TouchableOpacity>
          </View>
          <Text className="text-white text-base mb-2">0 active policies</Text>
          <Text className="text-white opacity-80 text-sm">
            New policies appear here in 1 day. Link policy to your mobile number if not done
          </Text>
        </View>

        {/* Buy New Insurance Section */}
        <View className="px-4 mb-6">
          <Text className="text-gray-800 text-2xl font-bold mb-4">Buy New Insurance</Text>
          <View className="flex-row justify-between">
            {[
              { title: 'Health', price: '₹19/day', icon: 'medical' },
              { title: '2 Wheeler', price: '₹538/yr', icon: 'bicycle' },
              { title: '4 Wheeler', price: '₹2094/yr', icon: 'car' },
            ].map((item, index) => (
              <TouchableOpacity key={index} className="bg-white p-4 rounded-xl items-center w-[31%] shadow">
                <View className="w-12 h-12 bg-blue-100 rounded-full items-center justify-center mb-2">
                  <Ionicons name={item.icon} size={24} color="#3B82F6" />
                </View>
                <Text className="text-gray-800 font-semibold text-center">{item.title}</Text>
                <Text className="text-gray-500 text-xs text-center">Starts @ {item.price}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      {/* <View className="flex-row justify-around py-3 bg-white border-t border-gray-200">
        {[
          { name: 'Home', icon: 'home', active: true },
          { name: 'Discover', icon: 'compass' },
          { name: 'My Policy', icon: 'document-text' },
          { name: 'Profile', icon: 'person' },
        ].map((item, index) => (
          <TouchableOpacity key={index} className="items-center">
            <Ionicons name={item.icon} size={24} color={item.active ? '#3B82F6' : '#9CA3AF'} />
            <Text className={`text-xs ${item.active ? 'text-blue-500 font-semibold' : 'text-gray-400'} mt-1`}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View> */}
    </SafeAreaView>
  );
}

