import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Checkbox,
  TextInput as PTextInput,
  Button as PButton,
} from "react-native-paper";
import { Picker } from "@react-native-picker/picker";

const MotorInsurance = () => {
  const [activeTab, setActiveTab] = useState("Vehicle Details");
  const [registrationNo, setRegistrationNo] = useState("");
  const [chassisNo, setChassisNo] = useState("");
  const [licenseNo, setLicenseNo] = useState("");

  const [licenseNumber, setLicenseNumber] = useState("");
  const [firstRegistration, setFirstRegistration] = useState("");
  const [isImported, setIsImported] = useState("no");
  const [vehicleUsage, setVehicleUsage] = useState("");
  const [engineNo, setEngineNo] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [hpCc, setHpCc] = useState("");
  const [emptyWeight, setEmptyWeight] = useState("");
  const [loadWeight, setLoadWeight] = useState("");
  const [year, setYear] = useState("");
  const [carValue, setCarValue] = useState("");
  const [seatingCapacity, setSeatingCapacity] = useState("");
  const [finance, setFinance] = useState("");
  const [policyExpiry, setPolicyExpiry] = useState("");
  const [coverageType, setCoverageType] = useState("");
  const [insuranceType, setInsuranceType] = useState("comprehensive");
  const [driverName, setDriverName] = useState("");
  const [driverMobile, setDriverMobile] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [crNumber, setCrNumber] = useState("");
  const [addDriver, setAddDriver] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [vehicleType, setVehicleType] = useState("");
  const [uaeExtension, setUaeExtension] = useState(false);
  const [aaaRoadAssist, setAaaRoadAssist] = useState(false);
  const [selectedCapacity, setSelectedCapacity] = useState(null);
  const [name, setName] = useState("");

  const [phone, setPhone] = useState("");
  const options = [2, 4, 5, 6, 7, 8, 9];
  const inputStyle = {
    marginBottom: 16,
    borderRadius: 25, // Rounded corners
    backgroundColor: "white",
  };
  const styles = StyleSheet.create({
    pickerContainer: {
      borderWidth: 2, // Tailwind `border-2`
      borderColor: "#d1d5db", // Tailwind `border-gray-300`
      borderRadius: 8, // Tailwind `rounded`
      marginBottom: 8, // Tailwind `mb-2`
      paddingHorizontal: 8, // Tailwind `px-2`
    },
  });
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);
  const nextTab = () => {
    const tabs = ["Vehicle Details", "Personal Info", "Additional Driver"];
    const currentIndex = tabs.indexOf(activeTab);
    const nextIndex = (currentIndex + 1) % tabs.length;
    setActiveTab(tabs[nextIndex]);
  };
  const renderTabContent = () => {
    switch (activeTab) {
      case "Vehicle Details":
        return (
          <View className="bg-white p-4 rounded-lg shadow">
            <View className="flex-row items-center mb-4">
              <Ionicons name="car-outline" size={28} color="#0c4ea2" />
              <Text className="ml-3 text-lg font-bold text-gray-700">
                Vehicle Details
              </Text>
            </View>

            <Text className="font-semibold mb-2">Registration No </Text>
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
            <Text className="font-semibold mb-2">Chassis No </Text>
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

            <Text className="font-semibold mb-2">
              Is Your Vehicle Imported?{" "}
            </Text>
            <View className="flex-row mb-4">
              <TouchableOpacity
                onPress={() => setIsImported("yes")}
                className="mr-4"
              >
                <Text
                  className={`px-2 py-1 ${
                    isImported === "yes"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  Yes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setIsImported("no")}>
                <Text
                  className={`px-2 py-1 ${
                    isImported === "no"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
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
              outlineStyle={{ borderRadius: 25 }} // Ensures outline follows the rounded shape
              style={inputStyle}
              theme={{ colors: { primary: "#1E3A8A" } }}
            />
            <Text className="font-semibold mb-2">Make </Text>
            <PTextInput
              mode="outlined"
              label="Make"
              value={make}
              onChangeText={setMake}
              theme={{ colors: { primary: "#1E3A8A" } }}
              style={inputStyle}
              outlineStyle={{ borderRadius: 25 }}
            />

            <Text className="font-semibold mb-2">Model </Text>
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

            <Text className="font-semibold mb-2">HP CC </Text>
            <PTextInput
              mode="outlined"
              label="HP CC"
              value={hpCc}
              onChangeText={setHpCc}
              theme={{ colors: { primary: "#1E3A8A" } }}
              style={inputStyle}
              outlineStyle={{ borderRadius: 25 }}
            />

            <Text className="font-semibold mb-2">Empty Weight </Text>
            <PTextInput
              mode="outlined"
              label="Empty Weight"
              value={emptyWeight}
              onChangeText={setEmptyWeight}
              theme={{ colors: { primary: "#1E3A8A" } }}
              style={inputStyle}
              outlineStyle={{ borderRadius: 25 }}
            />

            <Text className="font-semibold mb-2">Load Weight </Text>
            <PTextInput
              mode="outlined"
              label="Load Weight"
              value={loadWeight}
              onChangeText={setLoadWeight}
              theme={{ colors: { primary: "#1E3A8A" } }}
              style={inputStyle}
              outlineStyle={{ borderRadius: 25 }}
            />

            <Text className="font-semibold mb-2">Manufacture Year </Text>
            <PTextInput
              mode="outlined"
              label="Year"
              value={year}
              onChangeText={setYear}
              theme={{ colors: { primary: "#1E3A8A" } }}
              style={inputStyle}
              outlineStyle={{ borderRadius: 25 }}
            />

            <Text className="font-semibold mb-2">Car Value (OMR) </Text>
            <PTextInput
              mode="outlined"
              label="Car Value (OMR)"
              value={carValue}
              onChangeText={setCarValue}
              keyboardType="numeric"
              theme={{ colors: { primary: "#1E3A8A" } }}
              style={inputStyle}
              outlineStyle={{ borderRadius: 25 }}
            />

            <Text className="font-semibold mb-2">Seating Capacity </Text>
            <PTextInput
              mode="outlined"
              label="Seating Capacity"
              value={seatingCapacity}
              onChangeText={setSeatingCapacity}
              keyboardType="numeric"
              theme={{ colors: { primary: "#1E3A8A" } }}
              style={inputStyle}
              outlineStyle={{ borderRadius: 25 }}
            />

            <Text className="font-semibold mb-2">Coverage Type </Text>
            <View className="border-2 border-gray-300 rounded-full  mb-4">
              <Picker
                selectedValue={coverageType}
                onValueChange={(itemValue) => setCoverageType(itemValue)}
              >
                <Picker.Item label="Select" value="" />
                <Picker.Item label="Comprehensive" value="comprehensive" />
                <Picker.Item label="Third Party" value="thirdParty" />
                <Picker.Item label="Fire and Theft" value="fireAndTheft" />
              </Picker>
            </View>

            <Text className="font-semibold mb-2">Policy Expiry Date </Text>
            <PTextInput
              mode="outlined"
              label="Policy Expiry Date"
              value={policyExpiry}
              onChangeText={setPolicyExpiry}
              placeholder="YYYY-MM-DD"
              keyboardType="default"
              style={inputStyle}
              theme={{ colors: { primary: "#1E3A8A" } }}
              outlineStyle={{ borderRadius: 25 }}
            />

            {/* Finance/تمويل Input */}
            <Text className="font-semibold mb-2 mt-4">Finance </Text>
            <PTextInput
              value={finance}
              onChangeText={setFinance}
              mode="outlined"
              label="Finance "
              placeholder=" "
              style={inputStyle}
              theme={{ colors: { primary: "#1E3A8A" } }}
              outlineStyle={{ borderRadius: 25 }}
            />

            {/* Vehicle Type Select Box */}
            <Text className="font-semibold mb-2 mt-4">Vehicle Type </Text>
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

            <Text className="font-semibold mb-2">U.A.E. Extension </Text>
            <View className="flex-row items-center mb-2">
              <Checkbox
                status={uaeExtension ? "checked" : "unchecked"}
                onPress={() => setUaeExtension(!uaeExtension)}
                theme={{ colors: { primary: "#1E3A8A" } }}
              />
              <Text>U.A.E. Extension </Text>
            </View>

            <Text className="font-semibold mb-2">AAA (Road Assistance)</Text>
            <View className="flex-row items-center ">
              <Checkbox
                status={aaaRoadAssist ? "checked" : "unchecked"}
                onPress={() => setAaaRoadAssist(!aaaRoadAssist)}
                theme={{ colors: { primary: "#1E3A8A" } }}
              />
              <Text style={styles.checkboxLabel}>AAA (Road Assistance)</Text>
            </View>

            {/* <Text className="font-semibold mb-2">Seating Capacity </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
          {options.map((option, index) => (
             <TouchableOpacity
             key={index}
             onPress={() => setSelectedCapacity(option)}
             className="flex-row items-center mx-2"
           >
             <View
               className={`w-5 h-5 rounded-full mt-4 mb-4 border-2 border-gray-400 ${
                 selectedCapacity === option ? 'bg-blue-500' : 'bg-white'
               }`}
             />
             <Text className="ml-2 mt-4 mb-4">{option}</Text>
           </TouchableOpacity>
          ))}
             </ScrollView> */}

            {/* <Button title="Next" color="#1e40af" onPress={nextPage} /> */}
            <PButton
              mode="contained"
              theme={{ colors: { primary: "#1E3A8A" } }}
              onPress={nextTab}
              // disabled={!selectedCapacity}
            >
              Next
            </PButton>
          </View>
        );
      case "Personal Info":
        return (
          <View className="bg-white p-4 gap-2 rounded-lg shadow">
            <PTextInput
              mode="outlined"
              label="Name"
              value={name}
              onChangeText={setName}
              theme={{ colors: { primary: "#1E3A8A" } }}
            />
            <PTextInput
              mode="outlined"
              label="Date of Birth"
              value={dob}
              onChangeText={setDob}
              theme={{ colors: { primary: "#1E3A8A" } }}
            />
            <PTextInput
              mode="outlined"
              label="Email"
              value={email}
              onChangeText={setEmail}
              theme={{ colors: { primary: "#1E3A8A" } }}
            />
            <PTextInput
              mode="outlined"
              label="Address"
              value={address}
              onChangeText={setAddress}
              theme={{ colors: { primary: "#1E3A8A" } }}
            />
            <PTextInput
              mode="outlined"
              label="Phone"
              value={phone}
              onChangeText={setPhone}
              theme={{ colors: { primary: "#1E3A8A" } }}
            />
            <PButton
              className="mt-5"
              mode="contained"
              onPress={nextTab}
              theme={{ colors: { primary: "#1E3A8A" } }}
            >
              Next
            </PButton>
          </View>
        );
      case "Additional Driver":
        return (
          <View className="bg-white p-4 gap-3 rounded-lg shadow">
            <Text>Driver Name: John Doe</Text>
            <Text>Driver License: D12345678</Text>
            <Text>License Expiry: 2025-12-31</Text>
            <PButton
              mode="contained"
              onPress={nextTab}
              theme={{ colors: { primary: "#1E3A8A" } }}
            >
              Finish
            </PButton>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View className="flex-1 bg-gray-100 mt-4">
      {/* Tabs */}
      <Text className="text-2xl pl-2 font-bold mb-4">
        Motor Insurance Quote
      </Text>

      <View className="flex-row justify-around mx-2 bg-white p-2 shadow rounded-full mb-4">
        {[
          { key: "Vehicle Details", icon: "car-outline" },
          { key: "Personal Info", icon: "person-circle-outline" },
          { key: "Additional Driver", icon: "person-add-outline" },
        ].map((tab) => (
          <TouchableOpacity
            key={tab.key}
            onPress={() => setActiveTab(tab.key)}
            className={`p-2 rounded-full flex items-center ${
              activeTab === tab.key ? "bg-blue-100" : "bg-gray-100"
            }`}
          >
            <Ionicons
              name={tab.icon}
              size={28}
              color={activeTab === tab.key ? "#0c4ea2" : "#999"}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Tab Content */}
      <ScrollView className="flex-1 p-4">{renderTabContent()}</ScrollView>
    </View>
  );
};

export default MotorInsurance;
