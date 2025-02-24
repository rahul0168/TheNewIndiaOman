import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Pressable } from 'react-native';
import { Link, router } from 'expo-router';
import { useNavigation } from 'expo-router';
import BottomSheetComponent from "../../components/BottomSheetComponent";

// Main Insurance component
const ListScreen = () => {
  const [activeTab, setActiveTab] = useState('listScreen');

  // Insurance data could be fetched or defined here
  const insuranceOptions = [
    { id: 1, name: "Health Insurance", price: "₹ 1,300", imageUrl: "https://placehold.co/40x40" },
    { id: 2, name: "Life Insurance", price: "₹ 800", imageUrl: "https://placehold.co/40x40" },
    { id: 3, name: "Car Insurance", price: "₹ 200", imageUrl: "https://placehold.co/40x40" },
    { id: 4, name: "Home Insurance", price: "₹ 170", imageUrl: "https://placehold.co/40x40" },
    { id: 5, name: "Travel Insurance", price: "₹ 150", imageUrl: "https://placehold.co/40x40" }
  ];

  return (
    
      
   <ScrollView showsVerticalScrollIndicator={false} className=" fixed pt-4">
            <TouchableOpacity onPress={() => router.back()} className="self-start mb-4">
                {/* <Text className="text-blue-800 text-1xl">Back</Text> */}
             </TouchableOpacity>
               <BottomSheetComponent/>
     </ScrollView>

  
    
  );
};

// InsuranceOption component
// const InsuranceOption = ({ option }) => {
//   const navigation = useNavigation();
  
//   const goToInsuranceDetails = () => {
//     navigation.navigate('InsuranceDetails', { option });
//     console.log(option);
//   };
  
//   return (
//     <View className="flex-row items-center bg-white rounded-lg shadow-md mb-4 p-4">
//     <Text className="text-lg font-semibold text-gray-800 flex-1">{option.name}</Text>
//     <Pressable className="px-4 py-2 bg-blue-800 rounded-lg" onPress={goToInsuranceDetails}>
//       <Text className="text-white">View Details</Text>
//     </Pressable>
//   </View>
//   );
// };

export default ListScreen;
