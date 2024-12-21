import { useNavigation } from "expo-router";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

const SCREEN_WIDTH = Dimensions.get("window").width;
const images = [
  { id: 1, src: require("../assets/images/motors.jpg") },
  { id: 2, src: require("../assets/images/motor.jpg") },
  { id: 3, src: require("../assets/images/healths.jpg") },
];

const CarouselComponent = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={item.src} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.title}>Cyber Security Month!</Text>
        <Text style={styles.subtitle}>Cover Starts @₹2/day</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("MotorInsurance", { id: 1 })}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Get Insured</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={SCREEN_WIDTH}
        height={200}
        autoPlay={true}
        data={images}
        autoPlayInterval={2000}
        scrollAnimationDuration={1000}
        renderItem={renderItem}
      />
    </View>
  );
};

export default CarouselComponent;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  carouselItem: {
    width: SCREEN_WIDTH,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: SCREEN_WIDTH,
    height: 200,
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent black
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});
