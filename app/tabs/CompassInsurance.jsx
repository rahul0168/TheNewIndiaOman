import SummaryRow from "../../components/SummaryRow";
import ImportantField from "../../components/ImportantField";
import { useEffect, useRef, useState } from "react";
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
import { fetchNationalities } from "../../helper/api";

const CompassInsurance = () => {
  const travelModalRef = useRef();
  const [activeTab, setActiveTab] = useState("Personal Info");
  const [isTravelDetailsModalVisible, setTravelDetailsModalVisible] =
    useState(false);
  const [policyNo, setPolicyNo] = useState("");
  const [passportNo, setPassportNo] = useState("");
  const [nationalities, setNationalities] = useState([]);
  const [showCommencingDate, setShowCommencingDate] = useState(false);
  const [showMaturityDate, setShowMaturityDate] = useState(false);
  const [travelInfoFormData, setTravelInfoFormData] = useState({
    policyNo: "",
    passportNo: "",
    travelDestination: "",
    travelStartDate: "",
    travelEndDate: "",
  });
  const [formData, setFormData] = useState({
    customerName: "",
    mobileNo: "",
    address: "",
    telephoneNo: "",
    email: "",
    Telephone: "",
    commencingDate: new Date(),
    maturityDate: new Date(),
    Employer: "",
    AddressOfSponsor: "",
  });
  const inputStyle = {
    marginBottom: 16,
    borderRadius: 25, // Rounded corners
    backgroundColor: "white",
  };
  const prevPage = () => setCurrentPage(currentPage - 1);
  const nextTab = () => {
    const tabs = ["Personal Info", "Motor Summery"];
    const currentIndex = tabs.indexOf(activeTab);
    const nextIndex = (currentIndex + 1) % tabs.length;
    setActiveTab(tabs[nextIndex]);
  };
  const prevTab = () => {
    const tabs = ["Personal Info", "Motor Summery"];
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
  const [coverageType, setCoverageType] = useState("");
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

  useEffect(() => {
    const getNationalities = async () => {
      try {
        const data = await fetchNationalities();
        
        setNationalities(data);
       // console.log("data logged is", data);
      } catch (err) {
        setError(err);
      } finally {
      }
    };
    getNationalities();
  }, []);
  const renderTabContent = () => {
    switch (activeTab) {
      case "Personal Info":
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
              <Ionicons
                name="person-circle-outline"
                size={28}
                color="#0c4ea2"
              />
              <Text className="ml-3 text-lg font-bold text-gray-700">
                Personal Details
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 16,
              }}
            >
              <View style={{ flex: 1 }}>
                <Text className="font-semibold mb-2">Commencing Date</Text>
                <TouchableOpacity
                  onPress={() => setShowCommencingDate(true)}
                  activeOpacity={0.7}
                >
                  <PTextInput
                    style={inputStyle}
                    editable={false}
                    value={formData.commencingDate.toDateString()}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1 }}>
                <Text className="font-semibold mb-2">Maturity Date</Text>
                <TouchableOpacity
                  onPress={() => setShowMaturityDate(true)}
                  activeOpacity={0.7}
                >
                  <PTextInput
                    style={inputStyle}
                    editable={false}
                    value={formData.commencingDate.toDateString()}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 16,
              }}
            >
              <View style={{ flex: 1 }}>
                <Text className="font-semibold mb-2">Customer Name </Text>

                <PTextInput
                  label="Customer Name"
                  value={formData.customerName}
                  onChangeText={(text) =>
                    setFormData({ ...formData, customerName: text })
                  }
                  style={inputStyle}
                  mode="outlined"
                  outlineStyle={{ borderRadius: 25 }}
                  theme={{ colors: { primary: "#1E3A8A" } }}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text className="font-semibold mb-2">Mobile No</Text>

                <PTextInput
                  label="Mobile No"
                  value={formData.mobileNo}
                  keyboardType="phone-pad"
                  onChangeText={(text) =>
                    setFormData({ ...formData, mobileNo: text })
                  }
                  style={inputStyle}
                  mode="outlined"
                  outlineStyle={{ borderRadius: 25 }}
                  theme={{ colors: { primary: "#1E3A8A" } }}
                />
              </View>
            </View>

            <Text className="font-semibold mb-2">Address </Text>
            <PTextInput
              label="Address"
              value={formData.address}
              onChangeText={(text) =>
                setFormData({ ...formData, address: text })
              }
              style={inputStyle}
              mode="outlined"
              outlineStyle={{ borderRadius: 25 }}
              theme={{ colors: { primary: "#1E3A8A" } }}
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 16,
              }}
            >
              <View style={{ flex: 1 }}>
                <Text className="font-semibold mb-2">Telephone No</Text>

                <PTextInput
                  label="Telephone No"
                  value={formData.telephoneNo}
                  keyboardType="phone-pad"
                  onChangeText={(text) =>
                    setFormData({ ...formData, telephoneNo: text })
                  }
                  style={inputStyle}
                  mode="outlined"
                  outlineStyle={{ borderRadius: 25 }}
                  theme={{ colors: { primary: "#1E3A8A" } }}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text className="font-semibold mb-2">Email</Text>

                <PTextInput
                  label="Email"
                  value={formData.email}
                  keyboardType="email-address"
                  onChangeText={(text) =>
                    setFormData({ ...formData, email: text })
                  }
                  style={inputStyle}
                  mode="outlined"
                  outlineStyle={{ borderRadius: 25 }}
                  theme={{ colors: { primary: "#1E3A8A" } }}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 16,
              }}
            >
              <View style={{ flex: 1 }}>
                <Text className="font-semibold mb-2">Date of Birth</Text>
                <TouchableOpacity
                  onPress={() => setShowMaturityDate(true)}
                  activeOpacity={0.7}
                >
                  <PTextInput
                    style={inputStyle}
                    editable={false}
                    value={formData.commencingDate.toDateString()}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 16,
              }}
            >
              <View style={{ flex: 1 }}>
                <Text className="font-semibold mb-2"> Resi.Card No </Text>

                <PTextInput
                  label=" Resi.Card No "
                  value={formData.Resicard}
                  keyboardType="phone-pad"
                  onChangeText={(text) =>
                    setFormData({ ...formData, Resicard: text })
                  }
                  style={inputStyle}
                  mode="outlined"
                  outlineStyle={{ borderRadius: 25 }}
                  theme={{ colors: { primary: "#1E3A8A" } }}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text className="font-semibold mb-2">Passport No</Text>
                <PTextInput
                  label=" Passport No "
                  value={formData.Passport}
                  keyboardType="phone-pad"
                  onChangeText={(text) =>
                    setFormData({ ...formData, Passport: text })
                  }
                  style={inputStyle}
                  mode="outlined"
                  outlineStyle={{ borderRadius: 25 }}
                  theme={{ colors: { primary: "#1E3A8A" } }}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 16,
              }}
            >
              <View style={{ flex: 1 }}>
                <Text className="font-semibold mb-2">Business/Occupation </Text>

                <PTextInput
                  label="Business/Occupation "
                  value={formData.Business}
                  keyboardType="phone-pad"
                  onChangeText={(text) =>
                    setFormData({ ...formData, Business: text })
                  }
                  style={inputStyle}
                  mode="outlined"
                  outlineStyle={{ borderRadius: 25 }}
                  theme={{ colors: { primary: "#1E3A8A" } }}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text className="font-semibold mb-2">Nationality</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={coverageType}
                    onValueChange={(itemValue) => setCoverageType(itemValue)}
                  >
                    <Picker.Item label="Select" value="" />
                    {nationalities.map((country, index) => (
                      <Picker.Item
                        key={index}
                        label={country.name.common}
                        value={country.name.common}
                      />
                    ))}
                  </Picker>
                </View>
              </View>
            </View>

            <Text className="font-semibold mb-2"> Address Of Sponsor</Text>
            <PTextInput
              label="	Address Of Sponsor "
              value={formData.AddressOfSponsor}
              keyboardType="phone-pad"
              onChangeText={(text) =>
                setFormData({ ...formData, AddressOfSponsor: text })
              }
              style={inputStyle}
              mode="outlined"
              outlineStyle={{ borderRadius: 25 }}
              theme={{ colors: { primary: "#1E3A8A" } }}
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 16,
              }}
            >
              <View style={{ flex: 1 }}>
                <Text className="font-semibold mb-2">Telephone No </Text>
                <PTextInput
                  label="	Telephone "
                  value={formData.Telephone}
                  keyboardType="phone-pad"
                  onChangeText={(text) =>
                    setFormData({ ...formData, Telephone: text })
                  }
                  style={inputStyle}
                  mode="outlined"
                  outlineStyle={{ borderRadius: 25 }}
                  theme={{ colors: { primary: "#1E3A8A" } }}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text className="font-semibold mb-2">Employer </Text>
                <PTextInput
                  label="	Employer   "
                  value={formData.Employer}
                  keyboardType="phone-pad"
                  onChangeText={(text) =>
                    setFormData({ ...formData, Employer: text })
                  }
                  style={inputStyle}
                  mode="outlined"
                  outlineStyle={{ borderRadius: 25 }}
                  theme={{ colors: { primary: "#1E3A8A" } }}
                />
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

      case "Motor Summery":
        return (
          <ScrollView className="flex-1 bg-gray-100 p-4">
            <Text className="text-2xl font-bold text-blue-900 mb-4">
              Compress Insurance Summary
            </Text>

            <View className="flex-row flex-wrap justify-between mb-4">
              <ImportantField label="Customer Name" value="John Doe" />
              <ImportantField label="Commencing  Date" value="01/01/2024" />
              <ImportantField label="Maturity  Date" value="31/12/2024" />
              <ImportantField label="Sum Insured " value="234.56 OMR" />
              <ImportantField label="Premium  " value="234.56 OMR" />
            </View>

            <View className="bg-white rounded-lg shadow-md p-4 mb-4">
              <Text className="text-lg font-semibold text-gray-800 mb-2">
                Additional Details
              </Text>
              <SummaryRow
                label="BENEFIT A (Accidental Death/Permanent Total Disability)"
                value="5000"
              />
              <SummaryRow
                label="BENEFIT B (Repatriation Expenses)"
                value="RO.500/-"
              />
              <SummaryRow
                label="BENEFIT C (Accidental Medical Expenses)"
                value="RO.1000/-"
              />
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

            {/* <Text className="text-sm text-gray-600 text-right mb-4">تعهد</Text> */}

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
      <Text className="text-xl pl-3 font-semibold mb-4">Compass Insurance</Text>

      <View
        style={{ elevation: 9 }}
        className="flex-row justify-around mx-3 bg-white p-3 rounded-full mb-4 shadow-xl"
      >
        {[
          { key: "Personal Info", icon: "person-circle-outline" },

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
    </View>
  );
};

export default CompassInsurance;
