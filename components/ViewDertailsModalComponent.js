import React from "react";
import {
  Modal,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { TextInput as PTextInput, Button as PButton } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const VehicleDetailsModal = ({
  visible,
  onClose,
  onNext,
  onPrevious,
  registrationNo,
  setRegistrationNo,
  chassisNo,
  setChassisNo,
  licenseNumber,
  setLicenseNumber,
  firstRegistration,
  setFirstRegistration,
  isImported,
  setIsImported,
  vehicleUsage,
  setVehicleUsage,
  make,
  setMake,
  model,
  setModel,
  color,
  setColor,
  hpCc,
  setHpCc,
  emptyWeight,
  setEmptyWeight,
  isPreviousDisabled = true,
}) => {
  const inputStyle = { marginBottom: 16 };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
      transparent
    >
      <View
        //   className="flex-1 justify-center items-center bg-transparent  bg-opacity-100"
        style={styles.modalContainer}
      >
        <View className="w-11/12 max-h-[90%] bg-white rounded-lg p-1">
          <ScrollView>
            <View className="bg-white p-4 rounded-lg shadow">
              <View className="flex-row items-center mb-4">
                <Ionicons name="car-outline" size={28} color="#0c4ea2" />
                <Text className="ml-3 text-lg font-bold text-gray-700">
                  Vehicle Details
                </Text>
              </View>

              <Text className="font-semibold mb-2">Registration No</Text>
              <PTextInput
                mode="outlined"
                label="Registration No"
                placeholder="eg: AA/1234"
                value={registrationNo}
                onChangeText={setRegistrationNo}
                theme={{ colors: { primary: "#1E3A8A" } }}
                style={inputStyle}
                outlineStyle={{ borderRadius: 25 }}
              />

              <Text className="font-semibold mb-2">Chassis No</Text>
              <PTextInput
                mode="outlined"
                label="Chassis No"
                value={chassisNo}
                onChangeText={setChassisNo}
                theme={{ colors: { primary: "#1E3A8A" } }}
                style={inputStyle}
                outlineStyle={{ borderRadius: 25 }}
              />

              <Text className="font-semibold mb-2">License Number</Text>
              <PTextInput
                mode="outlined"
                label="License Number"
                value={licenseNumber}
                onChangeText={setLicenseNumber}
                theme={{ colors: { primary: "#1E3A8A" } }}
                style={inputStyle}
                outlineStyle={{ borderRadius: 25 }}
              />

              <Text className="font-semibold mb-2">First Registration</Text>
              <PTextInput
                mode="outlined"
                label="First Registration"
                value={firstRegistration}
                onChangeText={setFirstRegistration}
                theme={{ colors: { primary: "#1E3A8A" } }}
                style={inputStyle}
                outlineStyle={{ borderRadius: 25 }}
              />

              <Text className="font-semibold mb-2 text-lg">
                Is Your Vehicle Imported?
              </Text>
              <View className="flex-row mb-4">
                <TouchableOpacity
                  onPress={() => setIsImported("yes")}
                  className={`px-4 py-2 mr-4 rounded ${
                    isImported === "yes" ? "bg-blue-500" : "bg-gray-200"
                  }`}
                >
                  <Text
                    className={`text-center ${
                      isImported === "yes" ? "text-white" : "text-black"
                    }`}
                  >
                    Yes
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setIsImported("no")}
                  className={`px-4 py-2 rounded ${
                    isImported === "no" ? "bg-blue-500" : "bg-gray-200"
                  }`}
                >
                  <Text
                    className={`text-center ${
                      isImported === "no" ? "text-white" : "text-black"
                    }`}
                  >
                    No
                  </Text>
                </TouchableOpacity>
              </View>

              <Text className="font-semibold mb-2">Vehicle Usage</Text>
              <PTextInput
                mode="outlined"
                label="Vehicle Usage"
                value={vehicleUsage}
                onChangeText={setVehicleUsage}
                theme={{ colors: { primary: "#1E3A8A" } }}
                style={inputStyle}
                outlineStyle={{ borderRadius: 25 }}
              />

              <Text className="font-semibold mb-2">Make</Text>
              <PTextInput
                mode="outlined"
                label="Make"
                value={make}
                onChangeText={setMake}
                theme={{ colors: { primary: "#1E3A8A" } }}
                style={inputStyle}
                outlineStyle={{ borderRadius: 25 }}
              />

              <Text className="font-semibold mb-2">Model</Text>
              <PTextInput
                mode="outlined"
                label="Model"
                value={model}
                onChangeText={setModel}
                theme={{ colors: { primary: "#1E3A8A" } }}
                style={inputStyle}
                outlineStyle={{ borderRadius: 25 }}
              />

              <Text className="font-semibold mb-2">Color</Text>
              <PTextInput
                mode="outlined"
                label="Color"
                value={color}
                onChangeText={setColor}
                theme={{ colors: { primary: "#1E3A8A" } }}
                style={inputStyle}
                outlineStyle={{ borderRadius: 25 }}
              />

              <Text className="font-semibold mb-2">HP CC</Text>
              <PTextInput
                mode="outlined"
                label="HP CC"
                value={hpCc}
                onChangeText={setHpCc}
                theme={{ colors: { primary: "#1E3A8A" } }}
                style={inputStyle}
                outlineStyle={{ borderRadius: 25 }}
              />

              <Text className="font-semibold mb-2">Empty Weight</Text>
              <PTextInput
                mode="outlined"
                label="Empty Weight"
                value={emptyWeight}
                onChangeText={setEmptyWeight}
                theme={{ colors: { primary: "#1E3A8A" } }}
                style={inputStyle}
                outlineStyle={{ borderRadius: 25 }}
              />
            </View>
          </ScrollView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 5,
              paddingVertical: 10,
            }}
          >
            <PButton
              mode="contained"
              onPress={onPrevious}
              style={{
                width: "47%",
              }}
              disabled={isPreviousDisabled}
              theme={{ colors: { primary: "#1E3A8A" } }}
            >
              Previous
            </PButton>
            <PButton
              mode="contained"
              style={{
                width: "47%",
              }}
              onPress={onNext}
              theme={{ colors: { primary: "#1E3A8A" } }}
            >
              Next
            </PButton>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default VehicleDetailsModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    height: 247,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 15,
    paddingHorizontal: 15,
    gap: 10,
    alignItems: "center",
  },
});
