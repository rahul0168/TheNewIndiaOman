import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

const insuranceOptions = [
  {
    id: "1",
    title: "New Motor Insurance",
    subtitle: "Starts @₹19/day*",
    icon: "car",
    URL: "MotorInsurance",
  },
  {
    id: "2",
    title: "Renew Motor Insurance",
    subtitle: "Starts @₹538/yr*",
    icon: "car",
    URL: "RenewalMotorInsurance",
  },
  {
    id: "3",
    title: "Personal Accident",
    subtitle: "Starts @₹2094/yr*",
    icon: "heart",
    URL: "PersonalAccident",
  },
  {
    id: "4",
    title: "Travel",
    subtitle: "Starts @₹300/trip*",
    icon: "flight",
    URL: "TravelInsurance",
  },
  // { id: "5", title: "Life", subtitle: "Starts @₹500/month*", icon: "heart" ,URL: "PersonalAccident",},
  {
    id: "5",
    title: "Policy Search",
    subtitle: "Starts @₹1000/yr*",
    icon: "file",
    URL: "PolicySearch",
  },
  // { id: "6", title: "Compass Insurance", subtitle: "Starts @₹1000/yr*", icon: "file-text" ,URL: "CompassInsurance",},
];

const BottomSheetComponent = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* My Policies Section */}
      <View style={styles.policiesContainer}>
        <Text style={styles.policiesTitle}>My Policies</Text>
        <TouchableOpacity style={styles.linkPolicyButton}>
          <Text style={styles.linkPolicyText}>+ Link Policy</Text>
        </TouchableOpacity>
        <Text style={styles.policiesSubtitle}>0 active policies</Text>
        <Text style={styles.policiesNote}>
          New policies appear here in 1 day. Link policy to your mobile number
          if not done.
        </Text>
      </View>

      {/* Buy New Insurance Section */}
      <Text style={styles.buyInsuranceTitle}>Buy New Insurance</Text>
      <ScrollView contentContainerStyle={styles.insuranceList}>
        {insuranceOptions.map((item) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.URL, { id: 1 })}
            key={item.id}
            style={styles.card}
          >
            {item.icon === "flight" || item.icon === "computer" ? (
              <MaterialIcons name={item.icon} style={styles.icon} />
            ) : (
              <FontAwesome name={item.icon} style={styles.icon} />
            )}
            <Text style={styles.cardTitle}>{item.title}</Text>
            {/* <Text style={styles.cardSubtitle}>{item.subtitle}</Text> */}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default BottomSheetComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    flex: 1,
  },
  policiesContainer: {
    backgroundColor: "#356CFF",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  policiesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  linkPolicyButton: {
    position: "absolute",
    right: 20,
    top: 20,
    backgroundColor: "#fff",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  linkPolicyText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#356CFF",
  },
  policiesSubtitle: {
    fontSize: 14,
    color: "#fff",
    marginTop: 10,
  },
  policiesNote: {
    fontSize: 12,
    color: "#dfe7ff",
    marginTop: 5,
  },
  buyInsuranceTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  insuranceList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    width: Dimensions.get("window").width * 0.44,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  icon: {
    fontSize: 32,
    marginBottom: 10,
    color: "#356CFF",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
});
