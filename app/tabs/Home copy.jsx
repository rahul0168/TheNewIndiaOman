import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg'; // for SVG icons

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState('home');
  const HomeIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 9L12 2l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>`;

const GridIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </svg>`;

const HeartIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.35l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>`;

const SettingsIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>`;
  // Example SVG icons
  const SearchIcon = `
    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"></path>
    </svg>`;
  const BedDoubleIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 16h10M3 20h18M3 8a2 2 0 00-2 2v12a2 2 0 002 2h18a2 2 0 002-2V10a2 2 0 00-2-2H3z" />
    </svg>`;
  const ArrowRightIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4-4 4m0 0H3m14 0l-4-4m4 4V8m0 4z"/>
    </svg>`;

  

  return (

    <ScrollView className="flex-1 bg-gray-100 p-4">
      {/* Search Bar */}
      <View className="flex-row items-center border border-gray-300 rounded-lg p-2 mb-4">
        <TextInput
          className="flex-1 p-2"
          placeholder="Find the Perfect Place"
        />
        <SvgXml xml={SearchIcon} className="w-6 h-6 text-gray-500 ml-2" />
      </View>

      {/* Category Buttons */}
      <ScrollView horizontal className="flex-row mb-4">
        {["Villa", "House", "Apartments", "Condo"].map((type) => (
          <TouchableOpacity
            key={type}
            className={`px-4 py-2 rounded-full border ${type === "Villa" ? 'bg-blue-500 border-blue-500' : 'bg-transparent border-gray-300'}`}
          >
            <Text className={`text-sm ${type === "Villa" ? 'text-white' : 'text-gray-700'}`}>{type}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Property Image and Details */}
      <View className="bg-white rounded-lg overflow-hidden shadow-md mb-4">
        <Image
          source={{ uri: "https://via.placeholder.com/400x200" }}
          className="w-full h-48"
        />
        <View className="p-4">
          <View className="flex-row items-center mb-2">
            <SvgXml xml={BedDoubleIcon} className="w-6 h-6 text-gray-500 mr-2" />
            <Text className="text-gray-700 mr-4">3BHK</Text>
            <Text className="text-gray-700">900 sqft</Text>
          </View>
          <View>
            <Text className="text-lg font-semibold text-gray-800 mb-1">$55K/per month</Text>
            <Text className="text-gray-600">Barter Street, nr. Gray St, Canada</Text>
          </View>
        </View>
      </View>

      {/* Recently Added */}
      <View className="mb-4">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-xl font-semibold text-gray-800">Recently Added</Text>
          <TouchableOpacity className="flex-row items-center">
            <Text className="text-blue-500 mr-2">See all</Text>
            <SvgXml xml={ArrowRightIcon} className="w-4 h-4 text-blue-500" />
          </TouchableOpacity>
        </View>

        {[{ name: "The Blue Paradise", location: "Barter Street, Canada", price: "$45.8K" },
          { name: "The Heaven", location: "Gray Street, Canada", price: "$52.2K" },{ name: "The Heaven", location: "Gray Street, Canada", price: "$52.2K" },{ name: "The Heaven", location: "Gray Street, Canada", price: "$52.2K" }].map((property, index) => (
          <View key={index} className="flex-row items-center bg-white rounded-lg shadow-md mb-4 p-4">
            <Image
              source={{ uri: "https://via.placeholder.com/80x80" }}
              className="w-20 h-20 rounded-lg mr-4"
            />
            <View className="flex-1">
              <Text className="text-lg font-semibold text-gray-800">{property.name}</Text>
              <Text className="text-gray-600 mb-2">{property.location}</Text>
              <View className="flex-row justify-between items-center">
                <Text className="text-lg font-semibold text-gray-800">{property.price}</Text>
                <TouchableOpacity className="px-4 py-2 bg-blue-500 rounded-lg">
                  <Text className="text-white">Rent Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Navigation Tabs */}
    </ScrollView>

  );
}
