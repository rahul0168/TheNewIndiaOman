import React, { useState } from 'react';
import { View, StyleSheet ,Modal, Text, TextInput, Button, ScrollView, Alert, TouchableOpacity,FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Checkbox ,TextInput as PTextInput, Button as PButton } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons'; // Icon library

 
export default function InsuranceDetails() {
  const [registrationNo, setRegistrationNo] = useState('');
  const [chassisNo, setChassisNo] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [firstRegistration, setFirstRegistration] = useState('');
  const [isImported, setIsImported] = useState('no');
  const [vehicleUsage, setVehicleUsage] = useState('');
  const [engineNo, setEngineNo] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [color, setColor] = useState('');
  const [hpCc, setHpCc] = useState('');
  const [emptyWeight, setEmptyWeight] = useState('');
  const [loadWeight, setLoadWeight] = useState('');
  const [year, setYear] = useState('');
  const [carValue, setCarValue] = useState('');
  const [seatingCapacity, setSeatingCapacity] = useState('');
  const [finance, setFinance] = useState('');
  const [policyExpiry, setPolicyExpiry] = useState('');
  const [coverageType, setCoverageType] = useState('');
  const [insuranceType, setInsuranceType] = useState('comprehensive');
  const [driverName, setDriverName] = useState('');
  const [driverMobile, setDriverMobile] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [crNumber, setCrNumber] = useState('');
  const [addDriver, setAddDriver] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [vehicleType, setVehicleType] = useState('');
  const [uaeExtension, setUaeExtension] = useState(false);
  const [aaaRoadAssist, setAaaRoadAssist] = useState(false);
  const [selectedCapacity, setSelectedCapacity] = useState(null);
  const options = [2, 4, 5, 6,7, 8, 9];
  // const [modalVisible, setModalVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select Option");

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const inputStyle = {
    marginBottom: 16,
    borderRadius: 25, // Rounded corners
    backgroundColor: 'white',
  };
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId); // Update active tab
  };
  const handleSubmit = () => {
    const formData = {
      registrationNo,
      chassisNo,
      licenseNumber,
      firstRegistration,
      isImported,
      vehicleUsage,
      engineNo,
      make,
      model,
      color,
      hpCc,
      emptyWeight,
      loadWeight,
      year,
      carValue,
      seatingCapacity,
      finance,
      policyExpiry,
      coverageType,
      insuranceType,
      driverName,
      driverMobile,
      dob,
      email,
      address,
      crNumber,
      addDriver,
    };

    Alert.alert('Form Submitted', JSON.stringify(formData, null, 2));
  };
  const coverageOptions = [
    { title: 'Comprehensive', value: 'comprehensive' },
    { title: 'Third Party', value: 'thirdParty' },
    { title: 'Fire and Theft', value: 'fireAndTheft' },
  ];
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const tabs = [
    { name: 'motorInsurance', label: 'Motor Insurance Quote', icon: 'car' },
    { name: 'vehicleDetails', label: 'Vehicle Details', icon: 'build' },
    { name: 'coverage', label: 'Coverage & Finance', icon: 'shield' },
  ];

  const handleSelect = (value) => {
    setCoverageType(value);
    setModalVisible(false);
  };
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  return (
    <ScrollView contentContainerStyle="flex-1 p-4">
        {/* Tab Navigation */}
        <View className="flex-row justify-around mb-4">
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.name}
            onPress={() => setActiveTab(tab.name)}
            className={`flex-row items-center px-4 py-2 ${activeTab === tab.name ? 'bg-blue-500' : 'bg-gray-200'}`}
          >
            <Ionicons name={tab.icon} size={24} color={activeTab === tab.name ? 'white' : 'gray'} />
            <Text className={`ml-2 ${activeTab === tab.name ? 'text-white' : 'text-gray-700'}`}>{tab.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Render Form Based on Active Tab */}
      {activeTab === 'motorInsurance' && (
        <View className="bg-white shadow-md rounded p-4 mb-4">
          <Text className="text-3xl font-bold mb-4">Motor Insurance Quote</Text>
          <Text className="text-xl font-semibold mb-4">Tell Us About Your Car</Text>
    
          {/* Form Inputs for Motor Insurance */}
          <Text className="font-semibold mb-2">Registration No / رقم المركبة</Text>
          <PTextInput
            mode="outlined"
            label="Registration No"
            placeholder="eg: AA/1234"
            value={registrationNo}
            onChangeText={setRegistrationNo}
            theme={{ colors: { primary: '#1E3A8A' } }}
            outlineStyle={{ borderRadius: 25 }}
          />

          {/* More form inputs for Motor Insurance... */}
        </View>
      )}

      {activeTab === 'vehicleDetails' && (
        <View className="bg-white shadow-md rounded p-4 mb-4">
          <Text className="text-3xl font-bold mb-4">Vehicle Details</Text>
          
          {/* Form Inputs for Vehicle Details */}
          <Text className="font-semibold mb-2">Chassis No / رقم الشاصي</Text>
          <PTextInput
            mode="outlined"
            label="Chassis No"
            value={chassisNo}
            onChangeText={setChassisNo}
            theme={{ colors: { primary: '#1E3A8A' } }}
            outlineStyle={{ borderRadius: 25 }}
          />
          {/* More form inputs for Vehicle Details... */}
        </View>
      )}

      {activeTab === 'coverage' && (
        <View className="bg-white shadow-md rounded p-4 mb-4">
          <Text className="text-3xl font-bold mb-4">Coverage & Finance</Text>
          
          {/* Form Inputs for Coverage and Finance */}
          <Text className="font-semibold mb-2">Policy Expiry Date / تاريخ انتهاء الوثيقة</Text>
          <PTextInput
            mode="outlined"
            label="Policy Expiry Date"
            value={policyExpiry}
            onChangeText={setPolicyExpiry}
            placeholder="YYYY-MM-DD"
            theme={{ colors: { primary: '#1E3A8A' } }}
            outlineStyle={{ borderRadius: 25 }}
          />
          
          {/* More form inputs for Coverage... */}
        </View>
      )}

      {/* Submit Button */}
      <PButton
        mode="contained"
        theme={{ colors: { primary: '#1E3A8A' } }}
        onPress={() => {}}
        disabled={!selectedCapacity}
      >
        Next
      </PButton>
      {/* Page 1: Car Details */}
      {currentPage === 1 && (
          <View className="bg-white shadow-md rounded p-4 mb-4">
          <Text className="text-3xl font-bold mb-4">Motor Insurance Quote</Text>
          <Text className="text-xl font-semibold mb-4">Tell Us About Your Car</Text>
    
          <Text className="font-semibold mb-2">Registration No / رقم المركبة</Text>
          <PTextInput
            mode="outlined"
            label="Registration No"
            placeholder="eg: AA/1234"
            value={registrationNo}
            onChangeText={setRegistrationNo}
            theme={{ colors: { primary: '#1E3A8A' } }}
            style={inputStyle}
            outlineStyle={{ borderRadius: 25 }}
          />
    
          <Text className="font-semibold mb-2">Chassis No / رقم الشاصي</Text>
          <PTextInput
            mode="outlined"
            label="Chassis No"
            value={chassisNo}
            onChangeText={setChassisNo}
            theme={{ colors: { primary: '#1E3A8A' } }}
            style={inputStyle}
            outlineStyle={{ borderRadius: 25 }}
          />
    
          <Text className="font-semibold mb-2">License Number / أدخل رقم رخصة القيادة أو الرقم المدني</Text>
          <PTextInput
            mode="outlined"
            label="License Number"
            value={licenseNumber}
            onChangeText={setLicenseNumber}
            theme={{ colors: { primary: '#1E3A8A' } }}
            style={inputStyle}
            outlineStyle={{ borderRadius: 25 }}
          />
    
          <Text className="font-semibold mb-2">First Registration / التسجيل الأول في السلطنة</Text>
          <PTextInput
            mode="outlined"
            label="First Registration"
            value={firstRegistration}
            onChangeText={setFirstRegistration}
            theme={{ colors: { primary: '#1E3A8A' } }}
            style={inputStyle}
            outlineStyle={{ borderRadius: 25 }}
          />
    
          <Text className="font-semibold mb-2">Is Your Vehicle Imported? / هل المركبة واردة</Text>
          <View className="flex-row mb-4">
            <TouchableOpacity onPress={() => setIsImported('yes')} className="mr-4">
              <Text
                className={`px-2 py-1 ${isImported === 'yes' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                Yes
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsImported('no')}>
              <Text
                className={`px-2 py-1 ${isImported === 'no' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                No
              </Text>
            </TouchableOpacity>
          </View>
     

          <Text className="font-semibold mb-2">Vehicle Usage / استخدام المركبة</Text>
            <PTextInput
              mode="outlined"
              label="Vehicle Usage"
              value={vehicleUsage}
              onChangeText={setVehicleUsage}
              outlineStyle={{ borderRadius: 25 }} // Ensures outline follows the rounded shape
              theme={{ colors: { primary: '#1E3A8A' } }}

            />
          <Text className="font-semibold mb-2">Vehicle Usage / استخدام المركبة</Text>

            <PTextInput
              mode="outlined"
              label="Engine No / رقم المحرك"
              value={engineNo}
              onChangeText={setEngineNo}
              theme={{ colors: { primary: '#1E3A8A' } }}
              style={{ marginBottom: '22px' }}
              outlineStyle={{ borderRadius: 25 }} // Ensures outline follows the rounded shape


            />

       

          
    <Text className="font-semibold mb-2">Make / الصنع</Text>
          <PTextInput
            mode="outlined"
            label="Make"
            value={make}
            onChangeText={setMake}
            theme={{ colors: { primary: '#1E3A8A' } }}
            style={inputStyle}
            outlineStyle={{ borderRadius: 25 }}
          />

          <Text className="font-semibold mb-2">Model / الطراز</Text>
          <PTextInput
            mode="outlined"
            label="Model"
            value={model}
            onChangeText={setModel}
            theme={{ colors: { primary: '#1E3A8A' } }}
            style={inputStyle}
            outlineStyle={{ borderRadius: 25 }}
          />

          <Text className="font-semibold mb-2">Color / الون</Text>
          <PTextInput
            mode="outlined"
            label="Color"
            value={color}
            onChangeText={setColor}
            theme={{ colors: { primary: '#1E3A8A' } }}
            style={inputStyle}
            outlineStyle={{ borderRadius: 25 }}
          />

          <Text className="font-semibold mb-2">HP CC / قوة المحرك</Text>
          <PTextInput
            mode="outlined"
            label="HP CC"
            value={hpCc}
            onChangeText={setHpCc}
            theme={{ colors: { primary: '#1E3A8A' } }}
            style={inputStyle}
            outlineStyle={{ borderRadius: 25 }}
          />

          <Text className="font-semibold mb-2">Empty Weight / الوزن الفارغ</Text>
          <PTextInput
            mode="outlined"
            label="Empty Weight"
            value={emptyWeight}
            onChangeText={setEmptyWeight}
            theme={{ colors: { primary: '#1E3A8A' } }}
            style={inputStyle}
            outlineStyle={{ borderRadius: 25 }}
          />

          <Text className="font-semibold mb-2">Load Weight / وزن الحمولة</Text>
          <PTextInput
            mode="outlined"
            label="Load Weight"
            value={loadWeight}
            onChangeText={setLoadWeight}
            theme={{ colors: { primary: '#1E3A8A' } }}
            style={inputStyle}
            outlineStyle={{ borderRadius: 25 }}
          />

          <Text className="font-semibold mb-2">Manufacture Year / سنة الصنع</Text>
          <PTextInput
            mode="outlined"
            label="Year"
            value={year}
            onChangeText={setYear}
            theme={{ colors: { primary: '#1E3A8A' } }}
            style={inputStyle}
            outlineStyle={{ borderRadius: 25 }}
          />

          <Text className="font-semibold mb-2">Car Value (OMR) / قيمة المركبة</Text>
          <PTextInput
            mode="outlined"
            label="Car Value (OMR)"
            value={carValue}
            onChangeText={setCarValue}
            keyboardType="numeric"
            theme={{ colors: { primary: '#1E3A8A' } }}
            style={inputStyle}
            outlineStyle={{ borderRadius: 25 }}
          />

          <Text className="font-semibold mb-2">Seating Capacity / عدد الركاب</Text>
          <PTextInput
            mode="outlined"
            label="Seating Capacity"
            value={seatingCapacity}
            onChangeText={setSeatingCapacity}
            keyboardType="numeric"
            theme={{ colors: { primary: '#1E3A8A' } }}
            style={inputStyle}
            outlineStyle={{ borderRadius: 25 }}
          />

          <Text className="font-semibold mb-2">Coverage Type /  نوع التغطية</Text>
          <View className="border-2 border-gray-300 rounded-full  mb-4">
          <Picker
            selectedValue={coverageType}
            onValueChange={(itemValue) => setCoverageType(itemValue)} >
            <Picker.Item label="Select" value="" />
            <Picker.Item label="Comprehensive" value="comprehensive" />
            <Picker.Item label="Third Party" value="thirdParty" />
            <Picker.Item label="Fire and Theft" value="fireAndTheft" />
          </Picker>
          </View>
           
          <Text className="font-semibold mb-2">Policy Expiry Date / تاريخ انتهاء الوثيقة</Text>
          <PTextInput
            mode="outlined"
            label="Policy Expiry Date"
            value={policyExpiry}
            onChangeText={setPolicyExpiry}
            placeholder="YYYY-MM-DD"
            keyboardType="default"
            theme={{ colors: { primary: '#1E3A8A' } }}
            
            outlineStyle={{ borderRadius: 25 }}
          />

        

               {/* Finance/تمويل Input */}
              <Text className="font-semibold mb-2 mt-4">Finance/تمويل
               </Text>
               <PTextInput value={finance} onChangeText={setFinance} mode="outlined"
              label="Finance / تمويل<"
              placeholder=" "
              theme={{ colors: { primary: '#1E3A8A' } }}
              outlineStyle={{ borderRadius: 25 }}
           
            />
      
          {/* Vehicle Type Select Box */}
          <Text className="font-semibold mb-2 mt-4">Vehicle Type / نوع المركبة</Text>
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

         

          <Text className="font-semibold mb-2">U.A.E. Extension / تغطية الامارات</Text>
          <View className="flex-row items-center mb-2">
            <Checkbox
              status={uaeExtension ? 'checked' : 'unchecked'}
              onPress={() => setUaeExtension(!uaeExtension)}
              theme={{ colors: { primary: '#1E3A8A' } }}
            />
            <Text>U.A.E. Extension / تغطية الامارات</Text>
          </View>

          <Text className="font-semibold mb-2">AAA (Road Assistance)</Text>
          <View className="flex-row items-center ">
          <Checkbox
            status={aaaRoadAssist ? "checked" : "unchecked"}
            onPress={() => setAaaRoadAssist(!aaaRoadAssist)}
            theme={{ colors: { primary: '#1E3A8A' } }}
          />
          <Text style={styles.checkboxLabel}>AAA (Road Assistance)</Text>
        </View>
 

        
          <Text className="font-semibold mb-2">Seating Capacity / عدد الركاب</Text>
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
             </ScrollView>
             

              {/* <Button title="Next" color="#1e40af" onPress={nextPage} /> */}
              <PButton
              mode="contained"
              theme={{ colors: { primary: '#1E3A8A' } }}
              onPress={nextPage}
              disabled={!selectedCapacity}
            >
              Next
            </PButton>
            </View>
          )}
          

      {/* Page 2: Driver Details */}
      {currentPage === 2 && (
        
        <View className="bg-white shadow-md rounded p-4 mb-4">
          <Text className="text-xl font-semibold mb-4">Tell Us About The Driver /الرجاء اخطارنا عن اي سائق
          </Text>

            <Text className="font-semibold mb-2">Driver Name /اسم العميل</Text>
            <PTextInput
              mode="outlined"
              label="Driver Name"
              style={{ marginBottom: 8 }}
              value={driverName}
              onChangeText={setDriverName}
              theme={{ colors: { primary: '#1E3A8A' } }}
              outlineStyle={{ borderRadius: 25 }}
            />

            <Text className="font-semibold mb-2">Mobile  Number/رقم الهاتف</Text>
            <PTextInput
             mode="outlined"
            label="Mobile Number"
              style={{ marginBottom: 8 }}
              value={driverMobile}
              onChangeText={setDriverMobile}
              keyboardType="phone-pad"
              theme={{ colors: { primary: '#1E3A8A' } }}
              outlineStyle={{ borderRadius: 25 }}
            />

            <Text className="font-semibold mb-2">	Date of Birth /تاريخ الميلاد</Text>
            <PTextInput
             mode="outlined"
            label="Date of Birth "
              style={{ marginBottom: 8 }}
              value={dob}
              onChangeText={setDob}
              placeholder="YYYY-MM-DD"
              theme={{ colors: { primary: '#1E3A8A' } }}
              outlineStyle={{ borderRadius: 25 }}
            />

            <Text className="font-semibold mb-2">Email/البريد الإلكتروني</Text>
            <PTextInput
             mode="outlined"
            label="Email "
              style={{ marginBottom: 8 }}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              theme={{ colors: { primary: '#1E3A8A' } }}
              outlineStyle={{ borderRadius: 25 }}
            />

            <Text className="font-semibold mb-2">Residential 	Address / العنوان</Text>
            <PTextInput
             mode="outlined"
            label="Residential Address"
              style={{ marginBottom: 8 }}
              value={address}
              onChangeText={setAddress}
              theme={{ colors: { primary: '#1E3A8A' } }}
              outlineStyle={{ borderRadius: 25 }}
            />

            <Text className="font-semibold mb-2"> CR Number/سجل التجاري</Text>
            <PTextInput
             mode="outlined"
            label="CR Number"
              style={{ marginBottom: 8 }}
              value={crNumber}
              onChangeText={setCrNumber}
              theme={{ colors: { primary: '#1E3A8A' } }}
              outlineStyle={{ borderRadius: 25 }}
            />

          <Text className="font-semibold mb-2">	Do you want to Add Additional Driver ?/ هل تود اضافة سائق اضافي</Text>
          <View className="flex-row mb-4">
            <TouchableOpacity onPress={() => setAddDriver(true)} className="mr-4">
              <Text className={`px-2 py-1 ${addDriver ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setAddDriver(false)}>
              <Text className={`px-2 py-1 ${!addDriver ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>No</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-between">
            {/* <Button title="Previous" color="#1e40af" onPress={prevPage} />
            <Button title="Submit" color="#1e40af" onPress={handleSubmit} /> */}
            <PButton
              mode="contained"
              onPress={prevPage}
              buttonColor="#1e40af"
              style={{ marginRight: 8 }}
            >
              Previous
            </PButton>
            <PButton
              mode="contained"
              onPress={handleSubmit}
              buttonColor="#1e40af"
            >
              Submit
            </PButton>
          </View>
        </View>
      )}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  pickerContainer: {
    borderWidth: 2, // Tailwind `border-2`
    borderColor: '#d1d5db', // Tailwind `border-gray-300`
    borderRadius: 8, // Tailwind `rounded`
    marginBottom: 8, // Tailwind `mb-2`
    paddingHorizontal: 8, // Tailwind `px-2`
  },
});