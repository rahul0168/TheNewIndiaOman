import React ,{useState} from "react";
import {
  Modal,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { TextInput as PTextInput, Button as PButton } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const VehicleDetailsModal = ({
  visible,
  onClose,
  onNext,
  onPrevious,
  ourPolicyNo,
  setOurpolicyNo,
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
  const inputStyle = { marginBottom: 12 };
  const [vehicleType, setVehicleType] = useState("");
  
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
                   Vehicle Premium Calculator
                </Text>
                <View className="ml-5 mb-4 text-end" >
                <Ionicons name="close-circle-outline"  size={28} color="#0c4ea2" />

                </View>

                
              </View>
              <PButton
                mode="contained"
                className="mb-2"
                style={{
                  width: "33%",

                }}
                onPress={onNext}
                theme={{ colors: { primary: "#1E3A8A" } }}
              >
              New
              </PButton>

              <Text className="font-semibold mb-2">Our Policy No</Text>
              <PTextInput
                mode="outlined"
                label="Our Policy No"
                placeholder="eg: AA/1234"
                value={ourPolicyNo}
                onChangeText={setOurpolicyNo}
                theme={{ colors: { primary: "#1E3A8A" } }}
                style={inputStyle}
                outlineStyle={{ borderRadius: 25 }}
              />

                 {/* Vehicle Type Select Box */}
            <Text className="font-semibold mb-2 mt-2">Vehicle Type </Text>
            <View className="border-2 border-gray-300 rounded-full  mb-4">
              <Picker
                selectedValue={vehicleType}
                style={{ height: 50, width: 200 }}
                onValueChange={(itemValue) => setVehicleType(itemValue)}
              >
                <Picker.Item label="Select" value="" />
                <Picker.Item label="Car" value="car" />
                <Picker.Item label="Truck" value="truck" />
                <Picker.Item label="SUV" value="suv" />
              </Picker>
            </View>

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

              <Text className="font-semibold mb-2">License Number </Text>
              <PTextInput
                mode="outlined"
                label="License Number"
                value={licenseNumber}
                onChangeText={setLicenseNumber}
                theme={{ colors: { primary: "#1E3A8A" } }}
                style={inputStyle}
                outlineStyle={{ borderRadius: 25 }}
              />

              <Text className="font-semibold mb-2"> Registration No</Text>
              <PTextInput
                mode="outlined"
                label=" Registration No"
                value={firstRegistration}
                onChangeText={setFirstRegistration}
                theme={{ colors: { primary: "#1E3A8A" } }}
                style={inputStyle}
                outlineStyle={{ borderRadius: 25 }}
              />
               <Text className="font-semibold mb-2"> BarCode</Text>
              <PTextInput
                mode="outlined"
                label=" BarCode"
                value={firstRegistration}
                onChangeText={setFirstRegistration}
                theme={{ colors: { primary: "#1E3A8A" } }}
                style={inputStyle}
                outlineStyle={{ borderRadius: 25 }}
              />

           <PButton
              mode="contained"
              onPress={onPrevious}
              style={{
                width: "100%",
              }}
              theme={{ colors: { primary: "#1E3A8A" } }}
            >
              Show Information
            </PButton>
            </View>
          </ScrollView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              paddingHorizontal: 5,
              paddingVertical: 15,
            }}
          >
            
            <PButton
              mode="contained"
              style={{
                width: "66%",
              }}
              onPress={onNext}
              theme={{ colors: { primary: "#1E3A8A" } }}
            >
              Premium Calculator
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
