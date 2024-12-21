// detailScreen.js
import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ProductDetails = () => {
  const route = useRoute();
  const { product } = route.params || {}; // Destructure params
  // States for form fields
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');

  // Handlers for date pickers
  const handleStartDateChange = (event, selectedDate) => {
    setShowStartDatePicker(false);
    if (selectedDate) {
      setStartDate(selectedDate);
    }
  };

  const handleEndDateChange = (event, selectedDate) => {
    setShowEndDatePicker(false);
    if (selectedDate) {
      setEndDate(selectedDate);
    }
  };
  return (
    <ScrollView className="flex-1 bg-gray-100">
    {/* Container for the item details */}
    <View className="flex-1 p-5">

      {/* Back Button with SVG Icon */}
      <TouchableOpacity onPress={() => router.back()} className="self-start mb-4 bg-white p-2 rounded-full">
        {/* <SvgArrowLeft width={24} height={24} fill="gray" /> */}
      </TouchableOpacity>

      {/* Item Image */}
      <Image
        source={{ uri: 'https://via.placeholder.com/400' }} 
        className="w-full h-64 rounded-lg mb-4"
        resizeMode="cover"
      />

      {/* Item Title */}
      <Text className="text-3xl font-bold text-blue-500 mb-2">{product.name}</Text>

      {/* product Description */}
      <Text className="text-lg text-gray-700">{product.description}</Text>

      {/* Additional Details */}
      <View className="mt-6">
        <Text className="text-xl font-semibold text-gray-800 mb-2">Price:</Text>
        <Text className="text-lg text-gray-700">{product.price || 'Not available'}</Text>

        <Text className="text-xl font-semibold text-gray-800 mt-4 mb-2">Location:</Text>
        <Text className="text-lg text-gray-700">{product.location || 'Not available'}</Text>
      </View>

      {/* Form Section */}
      <View className="mt-10 bg-white p-4 rounded-lg shadow-lg">
        <Text className="text-xl font-bold mb-4">Renting Information</Text>

        {/* Payment Method */}
        <TextInput
          className="border border-gray-300 rounded-lg p-3 mb-4"
          placeholder="Enter Payment Method (e.g., Credit Card)"
          value={paymentMethod}
          onChangeText={setPaymentMethod}
        />

        {/* Start Date */}
        <TouchableOpacity onPress={() => setShowStartDatePicker(true)} className="border border-gray-300 rounded-lg p-3 mb-4">
          <Text className="text-gray-700">Start Date: {startDate.toDateString()}</Text>
        </TouchableOpacity>
        {showStartDatePicker && (
          <DateTimePicker
            value={startDate}
            mode="date"
            display="default"
            onChange={handleStartDateChange}
          />
        )}

        {/* End Date */}
        <TouchableOpacity onPress={() => setShowEndDatePicker(true)} className="border border-gray-300 rounded-lg p-3 mb-4">
          <Text className="text-gray-700">End Date: {endDate.toDateString()}</Text>
        </TouchableOpacity>
        {showEndDatePicker && (
          <DateTimePicker
            value={endDate}
            mode="date"
            display="default"
            onChange={handleEndDateChange}
          />
        )}

        {/* Submit Button */}
        <Button title="Submit" onPress={() => alert('Rental confirmed!')} />
      </View>

    </View>
  </ScrollView>
  );
};


export default ProductDetails;
