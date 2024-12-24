import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import {
  FontAwesome,
  MaterialIcons,
  Ionicons,
  Feather,
} from "@expo/vector-icons";
import { useNavigation } from "expo-router";

const ProfileViewScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.profileIcon}>
        <Ionicons name="person-circle-outline" size={100} color="#D3D3D3" />
      </View>
      <View style={styles.cardContainer}>
        {/* Profile Section */}

        <View style={styles.profileContainer}>
          <TouchableOpacity>
            <Text style={styles.addNameButton}>Add Your Name</Text>
          </TouchableOpacity>
          <Text style={styles.phoneNumber}>+91 9922916180</Text>
        </View>

        {/* ABHA Card Section */}
        <TouchableOpacity style={styles.abhaContainer}>
          <View>
            <Text style={styles.abhaTitle}>Create your ABHA Number</Text>
            <Text style={styles.abhaSubtitle}>
              Keep all your health records in one place →
            </Text>
          </View>
          <Image
            source={require("../assets/images/abhaImage.webp")}
            style={styles.abhaImage}
          />
        </TouchableOpacity>

        {/* Options Section */}
        <View style={styles.optionsContainer}>
          {/* My Profile */}
          <TouchableOpacity
            onPress={() => navigation.navigate("EditProfileScreen")}
            style={styles.optionItem}
          >
            <FontAwesome name="user-o" size={24} color="#000" />
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>My Profile</Text>
              <Text style={styles.optionSubtitle}>
                Name, Date of Birth, City
              </Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#000" />
          </TouchableOpacity>

          {/* Share App */}
          <TouchableOpacity style={styles.optionItem}>
            <Ionicons name="share-social-outline" size={24} color="#000" />
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Share App</Text>
              <Text style={styles.optionSubtitle}>
                Share Here app with your friends & family
              </Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#000" />
          </TouchableOpacity>

          {/* Terms & Conditions */}
          <TouchableOpacity style={styles.optionItem}>
            <Feather name="file-text" size={24} color="#000" />
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Terms & Conditions</Text>
              <Text style={styles.optionSubtitle}>
                Read Terms & Conditions of Here
              </Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#000" />
          </TouchableOpacity>

          {/* Logout */}
          <TouchableOpacity
            style={[styles.optionItem, { borderBottomWidth: 0 }]}
          >
            <MaterialIcons name="logout" size={24} color="#FF0000" />
            <View style={styles.optionTextContainer}>
              <Text style={[styles.optionTitle, { color: "#FF0000" }]}>
                Logout
              </Text>
              <Text style={styles.optionSubtitle}>
                Logout of your Here account
              </Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* App Version */}
    </View>
  );
};

export default ProfileViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    paddingTop: 40,
    paddingHorizontal: 15,
    // paddingTop: 40,
    justifyContent: "center",
  },
  profileContainer: {
    alignItems: "center",
    gap: 3,
  },
  profileIcon: {
    marginBottom: 10,
    alignSelf: "center",
    top: 70,
    position: "absolute",
    zIndex: 99,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  addNameButton: {
    color: "#fff",
    fontSize: 16,
    backgroundColor: "#356CFF",
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  phoneNumber: {
    fontSize: 14,
    fontWeight: "500",
    color: "#6B7280",
  },
  abhaContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    margin: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
    gap: 15,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  abhaImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  cardContainer: {
    paddingVertical: 10,
    borderWidth: 2,
    borderRadius: 10,
    paddingTop: 50,
    borderColor: "#E5E7EB",
  },
  abhaTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  abhaSubtitle: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 5,
  },
  optionsContainer: {
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    paddingTop: 15,
    gap: 10,
  },
  optionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    padding: 15,
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  optionTextContainer: {
    flex: 1,
    marginLeft: 15,
    gap: 4,
  },
  optionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  optionSubtitle: {
    fontSize: 12,
    fontWeight: "500",
    color: "#6B7280",
    marginTop: 3,
  },
  versionText: {
    textAlign: "center",
    color: "#6B7280",
    fontSize: 14,
    marginTop: 20,
  },
});
