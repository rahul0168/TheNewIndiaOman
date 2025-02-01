import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SummaryRow = ({ label, value, arabicLabel }) => {
  return (
    <View>
       <View className="flex flex-row border-b border-gray-200 py-3">
        <View className="flex flex-row justify-between w-full">
          <View className="flex flex-row gap-2">
            <Text className="text-gray-700 font-medium w-32">{label}</Text>
          </View>
          <View className="flex-1">
            <Text className="text-gray-600 text-right break-words">{value || "-"}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SummaryRow;

const styles = StyleSheet.create({});
