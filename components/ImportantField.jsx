import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ImportantField = ({ label, value, arabicLabel }) => {
  return (
    <View className="bg-white rounded-lg shadow-md p-4 mb-4 w-[48%]">
    <Text className="text-sm font-semibold text-gray-700">{label}</Text>
    <Text className="text-xs text-gray-500 text-right">{arabicLabel}</Text>
    <Text className="text-lg font-bold text-blue-900 mt-1">{value}</Text>
  </View>
  );
};

export default ImportantField;

const styles = StyleSheet.create({});
