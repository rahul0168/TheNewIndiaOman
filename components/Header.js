import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View className="py-4 px-4 flex-row items-center justify-between bg-[#1e40af]">
      <View className="gap-1">
        <Text className="text-2xl font-bold text-white">Home</Text>
        <Text className="text-white font-medium text-xs">
          Welcome to The New India Oman Issurance
        </Text>
      </View>

      <Image
        style={{
          width: 60,
          height: 60,
          borderRadius: 50,
        }}
        resizeMode="contain"
        source={require("../assets/images/appicon.jpg")}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
