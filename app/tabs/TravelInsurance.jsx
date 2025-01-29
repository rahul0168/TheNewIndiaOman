import SummaryRow from "../../components/SummaryRow";
import ImportantField from "../../components/ImportantField";
import { useRef, useState } from "react";
import {
    Checkbox,
    TextInput as PTextInput,
    Button as PButton,  Menu,
    Divider,
  } from "react-native-paper";
  import { StyleSheet, TouchableOpacity,Text, View, ScrollView } from "react-native";
  import Ionicons from "@expo/vector-icons/Ionicons";
  import DateTimePicker from "@react-native-community/datetimepicker";
  import { Picker } from "@react-native-picker/picker";

const TravelInsurance = () => {
  const travelModalRef = useRef();
  const [activeTab, setActiveTab] = useState("Travel Details");
 
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
  });
  const prevPage = () => setCurrentPage(currentPage - 1);
  const nextTab = () => {
    const tabs = [
      "Personal Details",
        "Personal Info",
        "Travel Summery",
    ];
    const currentIndex = tabs.indexOf(activeTab);
    const nextIndex = (currentIndex + 1) % tabs.length;
    setActiveTab(tabs[nextIndex]);
  };
  const prevTab = () => {
    const tabs = [
        "Personal Details",
        "Personal Info",
        "Travel Summery",
    ];
    const currentIndex = tabs.indexOf(activeTab);
    const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    setActiveTab(tabs[prevIndex]);
  };
  const [coverageType, setCoverageType] = useState("");
  const [policyDuration, setPolicyDuration] = useState("");
  const [policyType, setPolicyType] = useState("");


  const durations = [
    "5 Days",
    "7 Days",
    "10 Days",
    "2 Weeks",
    "1 Month",
    "2 Months",
    "3 Months",
    "Annual",
  ];
 
  const [formData, setFormData] = useState({
    customerName: "",
    mobileNo: "",
    address: "",
    telephoneNo: "",
    email: "",
    period: "10 Days",
    territoryPlan: "Worldwide Excluding USA&Canada",
    commencingDate: new Date(),
    maturityDate: new Date(),
    policyType: "Family",
    remark: "",
  });

  const [showCommencingDate, setShowCommencingDate] = useState(false);
  const [showMaturityDate, setShowMaturityDate] = useState(false);
  const [menuVisible, setMenuVisible] = useState({
    period: false,
    territoryPlan: false,
    policyType: false,
  });

 
  const policyTypes = ["Family", "Single"];

  const handleDateChange = (event, selectedDate, key) => {
    const currentDate = selectedDate || formData[key];
    setFormData({ ...formData, [key]: currentDate });
    key === "commencingDate"
      ? setShowCommencingDate(false)
      : setShowMaturityDate(false);
  };

  const handleMenuSelection = (key, value) => {
    setFormData({ ...formData, [key]: value });
    setMenuVisible({ ...menuVisible, [key]: false });
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    // Add form submission logic here
  };
  const renderTabContent = () => {
    switch (activeTab) {
      case "Personal Details":
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
                Personal Details
              </Text>
            </View>
            <ScrollView >

            <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 16 }}>
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
                <Text className="font-semibold mb-2">Mobile  No</Text>

                <PTextInput
                    label="Mobile No"
                    value={formData.mobileNo}
                    keyboardType="phone-pad"
                    onChangeText={(text) => setFormData({ ...formData, mobileNo: text })}
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
                  onChangeText={(text) => setFormData({ ...formData, address: text })}
                  style={inputStyle}
                  
                  mode="outlined"
                  outlineStyle={{ borderRadius: 25 }}
                  theme={{ colors: { primary: "#1E3A8A" } }}
              />

              <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 16 }}>
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
                      onChangeText={(text) => setFormData({ ...formData, email: text })}
                      style={inputStyle}
                      mode="outlined"
                      outlineStyle={{ borderRadius: 25 }}
                      theme={{ colors: { primary: "#1E3A8A" } }}
                  />
                  </View>
                  </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 16 }}>
            <View style={{ flex: 1 }}>

             <Text className="font-semibold mb-2">Policy Duration</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={policyDuration}
                  onValueChange={(itemValue) => setPolicyDuration(itemValue)}
                >
                  <Picker.Item label="Select" value="" />
                  {durations.map((duration, index) => (
                    <Picker.Item key={index} label={duration} value={duration} />
                  ))}
                </Picker>
              </View>
              </View>
              
              <View style={{ flex: 1 }}>
                <Text className="font-semibold mb-2">Coverage Type</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={coverageType}
                    onValueChange={(itemValue) => setCoverageType(itemValue)}
                  >
                    <Picker.Item label="Select" value="" />
                    <Picker.Item label="Worldwide Excluding USA&Canada" value="Worldwide Excluding USA&Canada" />
                
                  </Picker>
                </View>
                </View>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 16 }}>
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

            <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 16 }}>
            <View style={{ flex: 1 }}>

             <Text className="font-semibold mb-2">Policy Type</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={policyType}
                  onValueChange={(itemValue) => setPolicyType(itemValue)}
                >
                  <Picker.Item label="Select" value="" />
                  {policyTypes.map((poltypes, index) => (
                    <Picker.Item key={index} label={poltypes} value={poltypes} />
                  ))}
                </Picker>
              </View>
              </View>

              <View style={{ flex: 1 }}>
              <Text className="font-semibold mb-2">Remark</Text>
              <PTextInput
                label="Remark"
                value={formData.remark}
                onChangeText={(text) => setFormData({ ...formData, remark: text })}
                style={inputStyle}
                mode="outlined"
                outlineStyle={{ borderRadius: 25 }}
                theme={{ colors: { primary: "#1E3A8A" } }}
              />
              </View>
              </View>

    </ScrollView>
          

           
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
                Personal Info
              </Text>
            </View>
            <ScrollView >

            <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 16 }}>
                  <View style={{ flex: 1 }}>
                  <Text className="font-semibold mb-2">Name </Text>

                  <PTextInput
                      label="Name "
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
                  <Text className="font-semibold mb-2">Passport No </Text>

                  <PTextInput
                      label="Name "
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
                  <Text className="font-semibold mb-2">DOB Date</Text>
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

                    <Text className="font-semibold mb-2">Resident Card  </Text>

                      <PTextInput
                          label="Resident Card "
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
                  </View>
                  <Text className="font-semibold mb-2">Nationality </Text>
                      <View style={styles.pickerContainer}>
                        <Picker
                          selectedValue={policyType}
                          onValueChange={(itemValue) => setPolicyType(itemValue)}
                        >
                          <Picker.Item label="Select" value="" />
                          {policyTypes.map((poltypes, index) => (
                            <Picker.Item key={index} label={poltypes} value={poltypes} />
                          ))}
                        </Picker>
                      </View>

           <View className="flex-row items-center mb-4 mt-4">
           <Ionicons name="person-circle-outline" size={28} color="#0c4ea2" />
           <Text className="ml-3 text-lg font-bold text-gray-700">
            Spouse Info
              </Text>
           </View>
           
            <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 16 }}>
                  <View style={{ flex: 1 }}>
                  <Text className="font-semibold mb-2">Name </Text>

                  <PTextInput
                      label="Name "
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
                  <Text className="font-semibold mb-2">Passport No </Text>

                  <PTextInput
                      label="Name "
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
                  <Text className="font-semibold mb-2">DOB Date</Text>
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

                    <Text className="font-semibold mb-2">Resident Card  </Text>

                      <PTextInput
                          label="Resident Card "
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
                  </View>
                  <Text className="font-semibold mb-2">Nationality </Text>
                      <View style={styles.pickerContainer}>
                        <Picker
                          selectedValue={policyType}
                          onValueChange={(itemValue) => setPolicyType(itemValue)}
                        >
                          <Picker.Item label="Select" value="" />
                          {policyTypes.map((poltypes, index) => (
                            <Picker.Item key={index} label={poltypes} value={poltypes} />
                          ))}
                        </Picker>
                      </View>

                      <View className="flex-row items-center mb-4 mt-4">
           <Ionicons name="person-circle-outline" size={28} color="#0c4ea2" />
           <Text className="ml-3 text-lg font-bold text-gray-700">
            Child 1 Info
              </Text>
           </View>
           
            <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 16 }}>
                  <View style={{ flex: 1 }}>
                  <Text className="font-semibold mb-2">Name </Text>

                  <PTextInput
                      label="Name "
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
                  <Text className="font-semibold mb-2">Passport No </Text>

                  <PTextInput
                      label="Name "
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
                  <Text className="font-semibold mb-2">DOB Date</Text>
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

                    <Text className="font-semibold mb-2">Resident Card  </Text>

                      <PTextInput
                          label="Resident Card "
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
                  </View>
                  <Text className="font-semibold mb-2">Nationality </Text>
                      <View style={styles.pickerContainer}>
                        <Picker
                          selectedValue={policyType}
                          onValueChange={(itemValue) => setPolicyType(itemValue)}
                        >
                          <Picker.Item label="Select" value="" />
                          {policyTypes.map((poltypes, index) => (
                            <Picker.Item key={index} label={poltypes} value={poltypes} />
                          ))}
                        </Picker>
                      </View>



                      <View className="flex-row items-center mb-4 mt-4">
           <Ionicons name="person-circle-outline" size={28} color="#0c4ea2" />
           <Text className="ml-3 text-lg font-bold text-gray-700">
            Child 2 Info
              </Text>
           </View>
           
            <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 16 }}>
                  <View style={{ flex: 1 }}>
                  <Text className="font-semibold mb-2">Name </Text>

                  <PTextInput
                      label="Name "
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
                  <Text className="font-semibold mb-2">Passport No </Text>

                  <PTextInput
                      label="Name "
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
                  <Text className="font-semibold mb-2">DOB Date</Text>
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

                    <Text className="font-semibold mb-2">Resident Card  </Text>

                      <PTextInput
                          label="Resident Card "
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
                  </View>
                  <Text className="font-semibold mb-2">Nationality </Text>
                      <View style={styles.pickerContainer}>
                        <Picker
                          selectedValue={policyType}
                          onValueChange={(itemValue) => setPolicyType(itemValue)}
                        >
                          <Picker.Item label="Select" value="" />
                          {policyTypes.map((poltypes, index) => (
                            <Picker.Item key={index} label={poltypes} value={poltypes} />
                          ))}
                        </Picker>
                      </View>




                      <View className="flex-row items-center mb-4 mt-4">
           <Ionicons name="person-circle-outline" size={28} color="#0c4ea2" />
           <Text className="ml-3 text-lg font-bold text-gray-700">
            Child 3 Info
              </Text>
           </View>
           
            <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 16 }}>
                  <View style={{ flex: 1 }}>
                  <Text className="font-semibold mb-2">Name </Text>

                  <PTextInput
                      label="Name "
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
                  <Text className="font-semibold mb-2">Passport No </Text>

                  <PTextInput
                      label="Name "
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
                  <Text className="font-semibold mb-2">DOB Date</Text>
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

                    <Text className="font-semibold mb-2">Resident Card  </Text>

                      <PTextInput
                          label="Resident Card "
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
                  </View>
                  <Text className="font-semibold mb-2">Nationality </Text>
                      <View style={styles.pickerContainer}>
                        <Picker
                          selectedValue={policyType}
                          onValueChange={(itemValue) => setPolicyType(itemValue)}
                        >
                          <Picker.Item label="Select" value="" />
                          {policyTypes.map((poltypes, index) => (
                            <Picker.Item key={index} label={poltypes} value={poltypes} />
                          ))}
                        </Picker>
                      </View>



           

            </ScrollView>
           

         
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
  
      case "Travel Summery":
        return (
          <ScrollView className="flex-1 bg-gray-100 p-4">
          <Text className="text-2xl font-bold text-blue-900 mb-4">Travel Policy Summary</Text>
    
          <View className="flex-row flex-wrap justify-between mb-4">
            <ImportantField label="Customer Name" value="John Doe" />
            <ImportantField label="	Commencing Date"  value="01/01/2024" />
            <ImportantField label="Maturity Date	"  value="07/01/2024" />
            <ImportantField label="Period"  value="7 days" />
            <ImportantField label="Total Premium"  value="234.56 OMR" />
          </View>
    
          <View className="bg-white rounded-lg shadow-md p-4 mb-4">
            <Text className="text-lg font-semibold text-gray-800 mb-2">Additional Details</Text>
            <SummaryRow label="Territory plan	"  value="Personal" />
            <SummaryRow label="Policy Type	" value="ABC 123" />
            <SummaryRow label="Basic Premium	" value="200 OMR" />
            <SummaryRow label="Govt Tax	"  value="3400 OMR" />
            <SummaryRow label="Other Tax	"value="25,000" />
            <SummaryRow label="Premium" value="1,000 OMR" />
            
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
                     
I hereby declare that the information entered by me in this application are true to the best of my knowledge and belief.
 Any change after the submission of the data, then the same would be conveyed immediately to NIA.
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
        { key: "Personal Details", icon: "person-outline" },
        { key: "Personal Info", icon: "people-circle-outline" },
        { key: "Travel Summery", icon: "document-text-outline" },
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
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    input: {
      marginBottom: 16,
    },
    dropdown: {
      marginBottom: 16,
    },
    datePicker: {
      marginBottom: 16,
    },
    submitBtn: {
      marginTop: 16,
    },
  });
  
export default TravelInsurance;