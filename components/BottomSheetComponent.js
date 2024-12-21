import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";

const insuranceOptions = [
  { id: "1", title: "Health", subtitle: "Starts @₹19/day*", icon: "🏥" },
  { id: "2", title: "2 Wheeler", subtitle: "Starts @₹538/yr*", icon: "🛵" },
  { id: "3", title: "4 Wheeler", subtitle: "Starts @₹2094/yr*", icon: "🚗" },
  { id: "4", title: "Travel", subtitle: "Starts @₹300/trip*", icon: "✈️" },
  { id: "5", title: "Home", subtitle: "Starts @₹1500/yr*", icon: "🏠" },
  { id: "6", title: "Life", subtitle: "Starts @₹500/month*", icon: "❤️" },
  { id: "7", title: "Pet", subtitle: "Starts @₹1000/yr*", icon: "🐾" },
  { id: "8", title: "Gadget", subtitle: "Starts @₹299/yr*", icon: "📱" },
  { id: "9", title: "Business", subtitle: "Starts @₹3000/yr*", icon: "🏢" },
  { id: "10", title: "Cyber", subtitle: "Starts @₹500/yr*", icon: "💻" },
];

const BottomSheetComponent = () => {
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
          <View key={item.id} style={styles.card}>
            <Text style={styles.icon}>{item.icon}</Text>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
          </View>
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
