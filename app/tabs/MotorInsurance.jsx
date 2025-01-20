import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Button,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Checkbox,
  TextInput as PTextInput,
  Button as PButton,
} from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import VehicleDetailsModal from "../../components/ViewDertailsModalComponent";
import MotorInfoBottomSheet from "../../components/MotorInfoBottomSheet";
import SummaryRow from "../../components/SummaryRow";

const MotorInsurance = () => {
  const vehicleModalRef = useRef();
  const [activeTab, setActiveTab] = useState("Vehicle Details");
  const [isVehicleDetailsModalVisible, setVehicleDetailsModalVisible] =
    useState(false);
  const [registrationNo, setRegistrationNo] = useState("");
  const [chassisNo, setChassisNo] = useState("");
  const [licenseNo, setLicenseNo] = useState("");
  const [vehicleInfoFormData, setVehicleInfoFormData] = useState({
    policyNo: "",
    vehicleUsage: "",
    regNo: "",
    chassisNo: "",
    barCode: "",
    licenseNumber: "",
  });

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
  const [drivers, setDrivers] = useState([]);
  const [name, setName] = useState("");

  // vehicle details logic
  const handleFormChange = (newFormData) => {
    setVehicleInfoFormData(newFormData);
  };

  const handlePremiumCalculate = () => {
    // Handle premium calculation
    console.log("Calculate Premium for:", formData);
  };

  const handleShowInformation = ({ formData }) => {
    // Handle showing information
    console.log("Show Information for:", formData);
  };

  const handleNext = () => {
    // Handle next action
    console.log("Next with form data:", formData);
  };

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
    const tabs = [
      "Vehicle Details",
      "Personal Info",
      "Additional Driver",
      "Motor Summery",
    ];
    const currentIndex = tabs.indexOf(activeTab);
    const nextIndex = (currentIndex + 1) % tabs.length;
    setActiveTab(tabs[nextIndex]);
  };
  const prevTab = () => {
    const tabs = [
      "Vehicle Details",
      "Personal Info",
      "Additional Driver",
      "Motor Summery",
    ];
    const currentIndex = tabs.indexOf(activeTab);
    const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    setActiveTab(tabs[prevIndex]);
  };

  const addDrivers = () => {
    setDrivers([...drivers, { name: "", license: "", expiry: "" }]);
  };
  // useEffect(() => {
  //   if (activeTab === "Vehicle Details") {
  //     setVehicleDetailsModalVisible(true);
  //   } else {
  //     setVehicleDetailsModalVisible(false);
  //   }
  // }, [activeTab]);

  useEffect(() => {
    if (activeTab === "Vehicle Details") {
      // Check if vehicleInfoFormData exists and is empty
      const isFormEmpty =
        !vehicleInfoFormData ||
        Object.keys(vehicleInfoFormData).length === 0 ||
        Object.values(vehicleInfoFormData).every((value) => !value);

      if (isFormEmpty) {
        vehicleModalRef.current?.open();
      }
    }
  }, [activeTab, vehicleInfoFormData]);
  const updateDriver = (index, key, value) => {
    const updatedDrivers = drivers.map((driver, i) =>
      i === index ? { ...driver, [key]: value } : driver
    );
    setDrivers(updatedDrivers);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Vehicle Details":
        // return null;
        return (
          <View
            style={{
              elevation: 4,
              flex: 1,
            }}
            className="bg-white p-4 rounded-lg shadow-2xl shadow-blue-500"
          >
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
              placeholder="eg:AA/1234"
              value={registrationNo}
              onChangeText={setRegistrationNo}
              theme={{ colors: { primary: "#1E3A8A" } }}
              style={inputStyle}
              outlineStyle={{ borderRadius: 25 }}
            />
            <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 16 }}>
             
            <View style={{ flex: 1 }}>

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
            </View>
            <View style={{ flex: 1 }}>
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
           </View>
            </View>

             
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
              outlineStyle={{ borderRadius: 25 }} // Ensures outline follows the rounded shape
              style={inputStyle}
              theme={{ colors: { primary: "#1E3A8A" } }}
            />


            <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 16 }}>
            <View style={{ flex: 1 }}>
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
            </View>
            <View style={{ flex: 1 }}>
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
              </View>
            </View>
           

           
            <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 16 }}>
            <View style={{ flex: 1 }}>
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
            </View>
            <View style={{ flex: 1 }}>
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
              </View>
            </View>

           
            <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 16 }}>
            <View style={{ flex: 1 }}>
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
            </View>
            <View style={{ flex: 1 }}>
              
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
              </View>
            </View>
           

           

           

            {/* <Text className="font-semibold mb-2">Seating Capacity </Text> */}
            {/* <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="flex-row"
              >
                {options.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => setSelectedCapacity(option)}
                    className="flex-row items-center mx-2"
                  >
                    <View
                      className={`w-5 h-5 rounded-full mt-4 mb-4 border-2 border-gray-400 ${
                        selectedCapacity === option ? "bg-blue-500" : "bg-white"
                      }`}
                    />
                    <Text className="ml-2 mt-4 mb-4">{option}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView> */}

            {/* <Button title="Next" color="#1e40af" onPress={nextPage} /> */}
          
            <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 16 }}>
            <View style={{ flex: 1 }}>
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
            </View>
            <View style={{ flex: 1 }}>
              
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
              </View>
            </View>
           


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
            <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 16 }}>
            <View style={{ flex: 1 }}>
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
            </View>
            <View style={{ flex: 1 }}>
                  <Text className="font-semibold mb-2 ">Finance </Text>
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
            </View>
            </View>
           
             

            {/* Finance/تمويل Input */}
            

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
            <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 16 }}>
            <View style={{ flex: 1 }}>
            <Text className="font-semibold mb-2">U.A.E. Extension </Text>
            <View className="flex-row items-center mb-2">
              <Checkbox
                status={uaeExtension ? "checked" : "unchecked"}
                onPress={() => setUaeExtension(!uaeExtension)}
                theme={{ colors: { primary: "#1E3A8A" } }}
              />
              <Text>U.A.E. Extension </Text>
            </View>
            </View>
            <View style={{ flex: 1 }}>
              
            <Text className="font-semibold mb-2">AAA (Road Assistance)</Text>
            <View className="flex-row items-center mr-4">
              <Checkbox
                status={aaaRoadAssist ? "checked" : "unchecked"}
                onPress={() => setAaaRoadAssist(!aaaRoadAssist)}
                theme={{ colors: { primary: "#1E3A8A" } }}
              />
              <Text style={styles.checkboxLabel}>AAA (Road Assistance)</Text>
            </View>
              </View>
            </View>

         

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <PButton
                mode="contained"
                onPress={prevTab}
                theme={{ colors: { primary: "#1E3A8A" } }}
              >
                Previous
              </PButton>
              <PButton
                mode="contained"
                onPress={nextTab}
                theme={{ colors: { primary: "#1E3A8A" } }}
              >
                Next
              </PButton>
            </View>
          </View>
        );
    
      case "Personal Info":
        return (
        
          <View className="bg-white p-4 gap-2 rounded-lg shadow">
              <View className="flex-row items-center mb-4">
              <Ionicons name="person-circle-outline" size={28} color="#0c4ea2" />
              <Text className="ml-3 text-lg font-bold text-gray-700">
                Personal Details
              </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 16 }}>
            <View style={{ flex: 1 }}>
            <Text className="font-semibold">Enter Name</Text>
            <PTextInput
              mode="outlined"
              label="Name"
              value={name}
              onChangeText={setName}
              style={inputStyle}
              theme={{ colors: { primary: "#1E3A8A" } }}
              outlineStyle={{ borderRadius: 25 }}
            />
            </View>
            <View style={{ flex: 1 }}>
            <Text className="font-semibold">Enter DOB</Text>
            <PTextInput
              mode="outlined"
              label="Date of Birth"
              value={dob}
              onChangeText={setDob}
              style={inputStyle}
              theme={{ colors: { primary: "#1E3A8A" } }}
              outlineStyle={{ borderRadius: 25 }}
            />
            </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 16 }}>
            <View style={{ flex: 1 }}>

            <Text className="font-semibold">Enter Email</Text>
            <PTextInput
              mode="outlined"
              label="Email"
              value={email}
              onChangeText={setEmail}
              style={inputStyle}
              theme={{ colors: { primary: "#1E3A8A" } }}
              outlineStyle={{ borderRadius: 25 }}
            />
            </View>
            <View style={{ flex: 1 }}>

            <Text className="font-semibold ">Enter Address</Text>
            <PTextInput
              mode="outlined"
              label="Address"
              value={address}
              onChangeText={setAddress}
              style={inputStyle}
              theme={{ colors: { primary: "#1E3A8A" } }}
              outlineStyle={{ borderRadius: 25 }}
            />
            </View>
         
            </View>
            <Text className="font-semibold">Enter Phone</Text>
            <PTextInput
              mode="outlined"
              label="Phone"
              value={phone}
              onChangeText={setPhone}
              style={inputStyle}
              theme={{ colors: { primary: "#1E3A8A" } }}
              outlineStyle={{ borderRadius: 25 }}
            />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <PButton
                mode="contained"
                onPress={prevTab}
                theme={{ colors: { primary: "#1E3A8A" } }}
              >
                Previous
              </PButton>
              <PButton
                mode="contained"
                onPress={nextTab}
                theme={{ colors: { primary: "#1E3A8A" } }}
              >
                Next
              </PButton>
            </View>
          </View>
        );
      case "Additional Driver":
        return (
          <View className="bg-white p-4 rounded-lg shadow">
          <View className="flex-row items-center mb-4">
            <Ionicons name="people-circle-outline" size={28} color="#0c4ea2" />
            <Text className="ml-3 text-lg font-bold text-gray-700">
              About The Driver
            </Text>
          </View>
          {drivers.map((driver, index) => (
            <View className="mb-4 border-b border-gray-300" key={index}>
              {/* Section 1: Name and Mobile No Side by Side */}
              <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 16 }}>
                <View style={{ flex: 1 }}>
                  <Text className="font-semibold">Enter Name</Text>
                  <PTextInput
                    mode="outlined"
                    label="Driver Name"
                    value={driver.name}
                    onChangeText={(value) => updateDriver(index, "name", value)}
                    style={inputStyle}
                    outlineStyle={{ borderRadius: 25 }}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text className="font-semibold">Mobile No.</Text>
                  <PTextInput
                    mode="outlined"
                    label="Mobile No."
                    value={driver.mobile}
                    onChangeText={(value) => updateDriver(index, "mobile", value)}
                    style={inputStyle}
                    outlineStyle={{ borderRadius: 25 }}
                  />
                </View>
              </View>
        
              {/* Section 2: Email and License Side by Side */}
              <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 16 }}>
                <View style={{ flex: 1 }}>
                  <Text className="font-semibold">Email</Text>
                  <PTextInput
                    mode="outlined"
                    label="Email"
                    value={driver.email}
                    onChangeText={(value) => updateDriver(index, "email", value)}
                    style={inputStyle}
                    outlineStyle={{ borderRadius: 25 }}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text className="font-semibold">Enter License</Text>
                  <PTextInput
                    mode="outlined"
                    label="Driver License"
                    value={driver.license}
                    onChangeText={(value) => updateDriver(index, "license", value)}
                    style={inputStyle}
                    outlineStyle={{ borderRadius: 25 }}
                  />
                </View>
              </View>
        
            
              <View>
                <Text className="font-semibold">Address</Text>
                <PTextInput
                  mode="outlined"
                  label="Address"
                  value={driver.expiry}
                  onChangeText={(value) => updateDriver(index, "expiry", value)}
                  style={inputStyle}
                  outlineStyle={{ borderRadius: 25 }}
                />
              </View>
              <View>
                <Text className="font-semibold">CR Number</Text>
                <PTextInput
                  mode="outlined"
                  label="CR Number"
                  value={driver.expiry}
                  onChangeText={(value) => updateDriver(index, "expiry", value)}
                  style={inputStyle}
                  outlineStyle={{ borderRadius: 25 }}
                />
              </View>
            </View>
          ))}
        
          <PButton mode="outlined" onPress={addDrivers}>
            Add Driver
          </PButton>
        
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 16,
            }}
          >
            <PButton
              mode="contained"
              onPress={prevTab}
              theme={{ colors: { primary: "#1E3A8A" } }}
            >
              Previous
            </PButton>
            <PButton
              mode="contained"
              onPress={nextTab}
              theme={{ colors: { primary: "#1E3A8A" } }}
            >
              Next
            </PButton>
          </View>
        </View>
        
        );
      case "Motor Summery":
        return (
          <View className="bg-white p-6 rounded-lg shadow-md">
            {/* Header */}
            <View className="mb-6">
              <Text className="text-2xl font-bold text-blue-900">
                Renewal Summary
              </Text>
              {/* <Text className="text-lg text-gray-600 text-right">
                ملخص تجديد التأمين
              </Text> */}
            </View>

            {/* Summary Content */}
            <View className="space-y-1">
              <SummaryRow
                label="Old Policy No"
                arabicLabel="رقم الوثيقة القديمة"
              />
              <SummaryRow label="Customer Name" arabicLabel="اسم العميل" />
              <SummaryRow label="Vehicle Usage" arabicLabel="استخدام المركبة" />
              <SummaryRow label="Start Date" arabicLabel="تاريخ البدء" />
              <SummaryRow label="End Date" arabicLabel="تاريخ الانتهاء" />
              <SummaryRow label="Registration No" arabicLabel="رقم المركبة" />
              <SummaryRow label="Make" arabicLabel="الصنع" />
              <SummaryRow label="Model" arabicLabel="الطراز" />
              <SummaryRow label="Vehicle Value" arabicLabel="قيمة المركبة" />
              <SummaryRow label="Basic Premium" arabicLabel="القسط الأساسي" />
              <SummaryRow label="Other Charges" arabicLabel="رسم اخرى" />
              <SummaryRow label="VAT Charges" arabicLabel="VAT charges" />
              <SummaryRow label="Total Premium" arabicLabel="مجموع الاقساط" />
              <SummaryRow label="Payment Mode" arabicLabel="طريقة الدفع" />
            </View>

            {/* Payment Icons */}
            <View className="flex flex-row gap-2 my-4">
              <View className="w-12 h-8 bg-blue-100 rounded flex items-center justify-center">
                <Text className="text-sm font-medium">VISA</Text>
              </View>
              <View className="w-12 h-8 bg-blue-100 rounded flex items-center justify-center">
                <Text className="text-sm font-medium">MC</Text>
              </View>
            </View>

            {/* Declaration */}
            <View className="my-4">
              <Text className="text-sm text-gray-600">
                I hereby declare that the information entered by me in this
                application are true to the best of my knowledge and belief.
              </Text>
              <Text className="text-sm text-gray-600 text-right mt-1">
                تعهد
              </Text>
            </View>

            {/* Buttons */}
            <View className="flex flex-row justify-between mt-6">
              <PButton
                mode="contained"
                onPress={prevTab}
                theme={{ colors: { primary: "#1E3A8A" } }}
              >
                Previous
              </PButton>
              <PButton
                mode="contained"
                onPress={prevTab}
                theme={{ colors: { primary: "#1E3A8A" } }}
              >
                Finish
              </PButton>
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View className="flex-1 bg-gray-200 pt-4">
      {/* Tabs */}
      <Text className="text-xl pl-3 font-semibold mb-4">
        Motor Insurance Quote
      </Text>

      <View
        style={{ elevation: 9 }}
        className="flex-row justify-around mx-3 bg-white p-3 rounded-full mb-4 shadow-xl"
      >
        {[
          { key: "Vehicle Details", icon: "car-outline" },
          { key: "Personal Info", icon: "person-circle-outline" },
          { key: "Additional Driver", icon: "person-add-outline" },
          { key: "Motor Summery", icon: "document-outline" },
        ].map((tab) => (
          <TouchableOpacity
            key={tab.key}
            style={{
              elevation: 2,
            }}
            onPress={() => setActiveTab(tab.key)}
            className={`p-2 rounded-full flex items-center ${
              activeTab === tab.key ? "bg-blue-100" : "bg-gray-100"
            }`}
          >
            <Ionicons
              name={tab.icon}
              size={23}
              color={activeTab === tab.key ? "#0c4ea2" : "#000"}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Tab Content */}
      <ScrollView className="flex-1 p-3">
        {renderTabContent()}
        <View style={{ height: 50 }} />
      </ScrollView>
      <VehicleDetailsModal
        visible={isVehicleDetailsModalVisible}
        onClose={() => {
          setVehicleDetailsModalVisible(false);
        }}
        onNext={nextTab}
        onPrevious={prevPage}
        registrationNo={registrationNo}
        setRegistrationNo={setRegistrationNo}
        chassisNo={chassisNo}
        setChassisNo={setChassisNo}
        // ... other props
      />
      <MotorInfoBottomSheet
        ref={vehicleModalRef}
        formData={vehicleInfoFormData}
        onFormChange={handleFormChange}
        onPremiumCalculate={handlePremiumCalculate}
        onShowInformation={handleShowInformation}
        onNext={handleNext}
      />
    </View>
  );
};

export default MotorInsurance;
