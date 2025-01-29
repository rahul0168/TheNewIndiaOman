import SummaryRow from "../../components/SummaryRow";
import ImportantField from "../../components/ImportantField";
import { useRef, useState } from "react";
import {
    Checkbox,
    TextInput as PTextInput,
    Button as PButton,
  } from "react-native-paper";
  import { StyleSheet, TouchableOpacity,Text, View, ScrollView } from "react-native";
  import Ionicons from "@expo/vector-icons/Ionicons";

const PersonalAccident = () => {
  const travelModalRef = useRef();
  const [activeTab, setActiveTab] = useState("Travel Details");
  const [isTravelDetailsModalVisible, setTravelDetailsModalVisible] = useState(false);
  const [policyNo, setPolicyNo] = useState("");
  const [passportNo, setPassportNo] = useState("");
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

  const [travelDestination, setTravelDestination] = useState("");
  const [travelStartDate, setTravelStartDate] = useState("");
  const [travelEndDate, setTravelEndDate] = useState("");
  const [insuranceType, setInsuranceType] = useState("");
  const [coverageAmount, setCoverageAmount] = useState("");
  const [premiumAmount, setPremiumAmount] = useState("");

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
          <Text className="text-2xl font-bold text-blue-900 mb-4">Travel Policy Summary</Text>
    
          <View className="flex-row flex-wrap justify-between mb-4">
            <ImportantField label="New Policy No"  value="POL-12345678" />
            <ImportantField label="Customer Name"  value="John Doe" />
            <ImportantField label="Start Date"  value="01/01/2024" />
            <ImportantField label="End Date"  value="31/12/2024" />
            <ImportantField label="Total Premium"  value="234.56 OMR" />
          </View>
    
          <View className="bg-white rounded-lg shadow-md p-4 mb-4">
            <Text className="text-lg font-semibold text-gray-800 mb-2">Additional Details</Text>
            <SummaryRow label="Vehicle Usage"  value="Personal" />
            <SummaryRow label="Registration No" value="ABC 123" />
            <SummaryRow label="Make" value="Toyota" />
            <SummaryRow label="Model"  value="Camry" />
            <SummaryRow label="Vehicle Value"value="25,000" />
            <SummaryRow label="Basic Premium" value="1,000 OMR" />
            <SummaryRow label="Other Charges"  value="100  OMR" />
            <SummaryRow label="VAT Charges"  value="134.56 OMR" />
            <SummaryRow label="Payment Mode"  value="Credit Card" />
          </View>
    
          <View className="flex-row mb-4">
            <View className="w-12 h-8 bg-blue-100 rounded flex items-center justify-center mr-2">
              <Text className="text-sm font-medium">VISA</Text>
            </View>
            <View className="w-12 h-8 bg-blue-100 rounded flex items-center justify-center">
              <Text className="text-sm font-medium">MC</Text>
            </View>
          </View>
          <View className="flex-row items-center mb-2">
              <Checkbox
              
                theme={{ colors: { primary: "#1E3A8A" } }}
              />
              <Text className="text-sm text-gray-600 mb-2">
                      I hereby declare that the information entered by me in this application are true to the best of my knowledge and
                      belief.
                    </Text>           
             </View>
      
          <Text className="text-sm text-gray-600 text-right mb-4">تعهد</Text>
    
          <View className="flex-row justify-between">
            <TouchableOpacity onPress={prevTab} className="bg-gray-200 py-2 px-4 rounded-full">
              <Text className="text-blue-900 font-semibold">Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity  className="bg-blue-900 py-2 px-4 rounded-full">
              <Text className="text-white font-semibold">Proceed Payment</Text>
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
      Travel Insurance 
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
    </View>
  );
};

export default PersonalAccident;