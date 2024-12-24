import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { StatusBar } from "expo-status-bar";
import CarouselComponent from "../../components/CarouselComponent";
import BottomSheetComponent from "../../components/BottomSheetComponent";

const HomeScreen1 = () => {
  return (
    <SafeAreaView className="flex-1 pt-5 bg-gray-100">
      <StatusBar style="light" backgroundColor="#1e40af" />
      <Header />
      <View className="mb-10 bg-white">
        <CarouselComponent />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="mt-32 fixed pt-4"
      >
        <BottomSheetComponent />
        {/* Footer Section */}
        <View className="p-4 pb-5 bg-gray-200 rounded-t-lg">
          <Text className="text-lg font-bold text-center">
            Need Assistance?
          </Text>
          <Text className="text-center text-gray-600">
            Contact our support team for any inquiries.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen1;

const styles = StyleSheet.create({});
