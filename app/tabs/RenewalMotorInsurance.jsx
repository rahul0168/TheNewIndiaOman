import SummaryRow from "../../components/SummaryRow";
import ImportantField from "../../components/ImportantField";
import { useRef, useState } from "react";
import {
  Checkbox,
  TextInput as PTextInput,
  Button as PButton,
} from "react-native-paper";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  Image,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";
import DeclarationModal from "../../components/DeclarationModal";

const RenewalMotorInsurance = () => {
  const travelModalRef = useRef();
  const [activeTab, setActiveTab] = useState("Vehicle Details");
  const [isTravelDetailsModalVisible, setTravelDetailsModalVisible] =
    useState(false);
  const [policyNo, setPolicyNo] = useState("");
  const [passportNo, setPassportNo] = useState("");
  const [declarationModalVisible, setDeclarationModalVisible] = useState(false);
  const [travelInfoFormData, setTravelInfoFormData] = useState({
    policyNo: "",
    passportNo: "",
    travelDestination: "",
    travelStartDate: "",
    travelEndDate: "",
  });
  const inputStyle = {
    marginBottom: 16,
    borderRadius: 25, // Rounded corners
    backgroundColor: "white",
  };
  const styles = StyleSheet.create({
    pickerContainer: {
      borderWidth: 2, // Tailwind `border-2`
      borderColor: "#d1d5db", // Tailwind `border-gray-300`
      borderRadius: 28, // Tailwind `rounded`
      marginBottom: 8, // Tailwind `mb-2`
      paddingHorizontal: 8, // Tailwind `px-2`
    },
    logo: {
      width: 100,
      height: 30,
      resizeMode: "contain",
    },
  });
  const prevPage = () => setCurrentPage(currentPage - 1);
  const nextTab = () => {
    const tabs = ["Vehicle Details", "Additional Driver", "Motor Summery"];
    if (activeTab === "Additional Driver") {
      setDeclarationModalVisible(true);
    } else {
      const currentIndex = tabs.indexOf(activeTab);
      const nextIndex = (currentIndex + 1) % tabs.length;
      setActiveTab(tabs[nextIndex]);
    }
  };
  const handleProceed = () => {
    setDeclarationModalVisible(false);
    const tabs = ["Vehicle Details", "Additional Driver", "Motor Summery"];
    const currentIndex = tabs.indexOf(activeTab);
    const nextIndex = (currentIndex + 1) % tabs.length;
    setActiveTab(tabs[nextIndex]);
  };
  const prevTab = () => {
    const tabs = ["Vehicle Details", "Additional Driver", "Motor Summery"];
    const currentIndex = tabs.indexOf(activeTab);
    const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    setActiveTab(tabs[prevIndex]);
  };

  const [travelDestination, setTravelDestination] = useState("");
  const [travelStartDate, setTravelStartDate] = useState("");
  const [travelEndDate, setTravelEndDate] = useState("");
  const [insuranceType, setInsuranceType] = useState("");
  const [coverageAmount, setCoverageAmount] = useState("");
  const [premiumAmount, setPremiumAmount] = useState("");
  const [coverageVisible, setCoverageVisible] = useState(false);
  const [coverageType, setCoverageType] = useState("");
  const [aaaAssistance, setAaaAssistance] = useState(false);
  const [imcAssistance, setImcAssistance] = useState(false);
  const [showMaturityDate, setShowMaturityDate] = useState(false);
  const [uaeExtension, setUaeExtension] = useState(false);
  const [aaaRoadAssist, setAaaRoadAssist] = useState(false);
  const [imcRoadAssist, setimcRoadAssist] = useState(false);
  const [drivers, setDrivers] = useState([]);
  const updateDriver = (index, key, value) => {
    const updatedDrivers = drivers.map((driver, i) =>
      i === index ? { ...driver, [key]: value } : driver
    );
    setDrivers(updatedDrivers);
  };
  const addDrivers = () => {
    setDrivers([...drivers, { name: "", license: "", expiry: "" }]);
  };
  const [formData, setFormData] = useState({
    policyNo: "",
    registrationNo: "",
    mobileNumber: "",
    otp: "",
    email: "",
    dob: new Date(),
  });
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
            <View className="gap-4">
              {/* Policy Number */}
              <View className="gap-2">
                <Text className="text-sm font-medium">Policy No</Text>
                <PTextInput
                  mode="outlined"
                  label="Policy No"
                  placeholder="Policy No"
                  theme={{ colors: { primary: "#1E3A8A" } }}
                  outlineStyle={{ borderRadius: 25 }}
                  className="bg-white"
                  value={formData.policyNo}
                  onChangeText={(text) => handleInputChange("policyNo", text)}
                />
              </View>

              <View className="gap-2">
                <Text className="text-sm font-medium">Registration No</Text>
                <PTextInput
                  mode="outlined"
                  label="Registration No"
                  placeholder="eg:AA/1234"
                  theme={{ colors: { primary: "#1E3A8A" } }}
                  outlineStyle={{ borderRadius: 25 }}
                  className="bg-white"
                  value={formData.registrationNo}
                  onChangeText={(text) =>
                    handleInputChange("registrationNo", text)
                  }
                />
              </View>

              {/* Mobile Number */}
              <View className="gap-2">
                <Text className="text-sm font-medium">Mobile Number</Text>
                <PTextInput
                  mode="outlined"
                  placeholder="Mobile Number"
                  theme={{ colors: { primary: "#1E3A8A" } }}
                  outlineStyle={{ borderRadius: 25 }}
                  className="bg-white"
                  value={formData.mobileNumber}
                  onChangeText={(text) =>
                    handleInputChange("mobileNumber", text)
                  }
                />
              </View>

              {/* OTP */}
              <View className="gap-2">
                <Text className="text-sm font-medium">OTP:</Text>
                <PTextInput
                  mode="outlined"
                  placeholder="Enter OTP"
                  theme={{ colors: { primary: "#1E3A8A" } }}
                  outlineStyle={{ borderRadius: 25 }}
                  className="bg-white"
                  value={formData.otp}
                  onChangeText={(text) => handleInputChange("otp", text)}
                />
              </View>

              {/* Email */}
              <View className="gap-2">
                <Text className="text-sm font-medium">Email</Text>
                <PTextInput
                  mode="outlined"
                  placeholder="eg:abc@gmail.com"
                  theme={{ colors: { primary: "#1E3A8A" } }}
                  outlineStyle={{ borderRadius: 25 }}
                  keyboardType="email-address"
                  className="bg-white"
                  value={formData.email}
                  onChangeText={(text) => handleInputChange("email", text)}
                />
              </View>

              {/* Date of Birth */}
              <View className="gap-2">
                <Text className="text-sm font-medium">Date of Birth</Text>
                <TouchableOpacity
                  onPress={() => setShowMaturityDate(true)}
                  activeOpacity={0.7}
                >
                  <PTextInput
                    style={inputStyle}
                    editable={false}
                    value={formData.dob.toDateString()}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={coverageType}
                  onValueChange={(itemValue) => setCoverageType(itemValue)}
                >
                  <Picker.Item label="Select" value="" />
                  <Picker.Item
                    value="TP1"
                    label="Third Party with PA Cover to Driver & Family members"
                  />
                  <Picker.Item
                    value="TPD"
                    label="Third Party with PA Cover to driver only"
                  />
                  <Picker.Item value="COMP" label="Comprehensive" />
                </Picker>
              </View>
              {/* <Text className="font-semibold mb-2">U.A.E. Extension </Text> */}
              <View className="flex-row items-center mb-2">
                <Checkbox
                  status={uaeExtension ? "checked" : "unchecked"}
                  onPress={() => setUaeExtension(!uaeExtension)}
                  theme={{ colors: { primary: "#1E3A8A" } }}
                />
                <Text>U.A.E. Extension </Text>
              </View>

              <Text className="font-semibold ">Road Assistance</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  gap: 16,
                }}
                className="mb-4"
              >
                <View style={{ flex: 1 }}>
                  <View className="flex-row items-center mr-4">
                    <Checkbox
                      status={aaaRoadAssist ? "checked" : "unchecked"}
                      onPress={() => setAaaRoadAssist(!aaaRoadAssist)}
                      theme={{ colors: { primary: "#1E3A8A" } }}
                    />
                    <Text style={styles.checkboxLabel}>AAA</Text>
                  </View>
                </View>
                <View style={{ flex: 1 }}>
                  {/* <Text className="font-semibold mb-2">
                    IMC (Road Assistance)
                    </Text> */}
                  <View className="flex-row items-center mr-4">
                    <Checkbox
                      status={imcRoadAssist ? "checked" : "unchecked"}
                      onPress={() => setimcRoadAssist(!imcRoadAssist)}
                      theme={{ colors: { primary: "#1E3A8A" } }}
                    />
                    <Text style={styles.checkboxLabel}>IMC</Text>
                  </View>
                </View>
              </View>
            </View>
            {/* Registration Number */}

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
              <Ionicons
                name="people-circle-outline"
                size={28}
                color="#0c4ea2"
              />
              <Text className="ml-3 text-lg font-bold text-gray-700">
                About The Driver
              </Text>
            </View>
            {drivers.map((driver, index) => (
              <View className="mb-4 border-b border-gray-300" key={index}>
                {/* Section 1: Name and Mobile No Side by Side */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: 16,
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Text className="font-semibold">Enter Name</Text>
                    <PTextInput
                      mode="outlined"
                      label="Driver Name"
                      value={driver.name}
                      onChangeText={(value) =>
                        updateDriver(index, "name", value)
                      }
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
                      onChangeText={(value) =>
                        updateDriver(index, "mobile", value)
                      }
                      style={inputStyle}
                      outlineStyle={{ borderRadius: 25 }}
                    />
                  </View>
                </View>

                {/* Section 2: Email and License Side by Side */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: 16,
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Text className="font-semibold">Email</Text>
                    <PTextInput
                      mode="outlined"
                      label="Email"
                      value={driver.email}
                      onChangeText={(value) =>
                        updateDriver(index, "email", value)
                      }
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
                      onChangeText={(value) =>
                        updateDriver(index, "license", value)
                      }
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
                    onChangeText={(value) =>
                      updateDriver(index, "expiry", value)
                    }
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
                    onChangeText={(value) =>
                      updateDriver(index, "expiry", value)
                    }
                    style={inputStyle}
                    outlineStyle={{ borderRadius: 25 }}
                  />
                </View>
              </View>
            ))}

            <PButton
              mode="outlined"
              onPress={addDrivers}
              theme={{ colors: { primary: "#1E3A8A" } }}
            >
              <Text>Add Driver</Text>
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
          <ScrollView className="flex-1 bg-gray-100 p-4">
            <Text className="text-2xl font-bold text-blue-900 mb-4">
              Renewal Summary{" "}
            </Text>

            <View className="flex-row flex-wrap justify-between mb-4">
              <ImportantField label="Old Policy No" value="POL-12345678" />
              <ImportantField label="Customer Name" value="John Doe" />
              <ImportantField label="Start Date" value="01/01/2024" />
              <ImportantField label="End Date" value="31/12/2024" />
              <ImportantField label="Total Premium" value="234.56 OMR" />
            </View>

            <View className="bg-white rounded-lg shadow-md p-4 mb-4">
              <Text className="text-lg font-semibold text-gray-800 mb-2">
                Additional Details
              </Text>
              <SummaryRow label="Vehicle Usage" value="Personal" />
              <SummaryRow label="Registration No" value="ABC 123" />
              <SummaryRow label="Make" value="Toyota" />
              <SummaryRow label="Model" value="Camry" />
              <SummaryRow label="Vehicle Value" value="25,000" />
              <SummaryRow label="Basic Premium" value="1,000 OMR" />
              <SummaryRow label="Other Charges" value="100  OMR" />
              <SummaryRow label="VAT Charges" value="134.56 OMR" />
              {/* <SummaryRow label="Payment Mode"  value="Credit Card" /> */}
            </View>

            <View className="flex-row mb-4">
              {/* <View className="w-12 h-8 bg-blue-100 rounded flex items-center justify-center mr-2">
              <Text className="text-sm font-medium">VISA</Text>
            </View>
            <View className="w-12 h-8 bg-blue-100 rounded flex items-center justify-center">
              <Text className="text-sm font-medium">MC</Text>
            </View> */}
              <Image
                source={{
                  uri: "https://newindiaoman.com/directcustomer/images/Vcard.png",
                }}
                style={styles.logo}
              />
            </View>
            <View className="flex-row items-center mb-2">
              <Checkbox theme={{ colors: { primary: "#1E3A8A" } }} />
              <Text className="text-sm text-gray-600 mb-2">
                I hereby declare that the information entered by me in this
                application are true to the best of my knowledge and belief. Any
                change after the submission of the data, then the same would be
                conveyed immediately to NIA.
              </Text>
            </View>

            <Text className="text-sm text-gray-600 text-right mb-4">تعهد</Text>

            <View className="flex-row justify-between">
              <TouchableOpacity
                onPress={prevTab}
                className="bg-gray-200 py-2 px-4 rounded-full"
              >
                <Text className="text-blue-900 font-semibold">Previous</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-blue-900 py-2 px-4 rounded-full">
                <Text className="text-white font-semibold">
                  Proceed Payment
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        );
      default:
        return null;
    }
  };
  return (
    <View className="flex-1 bg-gray-200 pt-4">
      {/* Tabs */}
      <Text className="text-xl pl-3 font-semibold mb-4">
        Motor Policy - Renewal
      </Text>

      <View
        style={{ elevation: 9 }}
        className="flex-row justify-around mx-3 bg-white p-3 rounded-full mb-4 shadow-xl"
      >
        {[
          { key: "Vehicle Details", icon: "car-outline" },
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
      <DeclarationModal
        onClose={() => setDeclarationModalVisible(false)}
        visible={declarationModalVisible}
        onProceed={handleProceed}
      />
    </View>
  );
};

export default RenewalMotorInsurance;
