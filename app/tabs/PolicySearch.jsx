import { useState } from "react"
import { View, ScrollView } from "react-native"
import { Picker } from "@react-native-picker/picker"
import { Button, Text, TextInput } from "react-native-paper"

export default function PolicySearch() {
    const [formData, setFormData] = useState({
        product: "",
        mobileNo: "",
        policyNumber: "",
        registeredMobile: "968",
        otp: "",
        vehicleType: "",
        registrationNo: ""
      })
      
const [otpVisible, setOtpVisible] = useState(false);

  return (
    <ScrollView className="flex-1 bg-gray-100">
       {/* { console.log(otpVisible)} */}
        
    <Text className="text-xl font-bold mb-2 p-4">
        Policy Search
        </Text>
    <View  className=" justify-around mx-3 bg-white p-3  mb-4 shadow-xl">
     <View className="mb-4">
          
          <Text className="font-semibold mb-2">Select Products</Text>
          
            <View className="border-2 border-gray-300 rounded-full ">
            <Picker
              selectedValue={formData.product}
              onValueChange={(itemValue) => setFormData({ ...formData, product: itemValue })}
              className="h-12"
            >
              <Picker.Item label="Select Product" value="" />
              <Picker.Item label="Motor" value="motor" />
            </Picker>
          </View>
        </View>

        <View className="mt-1">
      <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 16 }}>
       <View style={{ flex: 1 }}>
          {/* <Text className="text-xl font-bold mb-4">Product Details</Text> */}
          <Text className="font-semibold mb-2">Mobile No</Text>

          <TextInput
            mode="outlined"
            label="Mobile No"
            value={formData.mobileNo}
            onChangeText={(text) => setFormData({ ...formData, mobileNo: text })}
            theme={{ colors: { primary: "#1E3A8A" } }}
            style={{ marginBottom: 16, borderRadius: 25 }}
            outlineStyle={{ borderRadius: 25 }}
          />
         </View>
       <View style={{ flex: 1 }}>
       <Text className="font-semibold">Policy Number </Text>

          <TextInput
            mode="outlined"
            label="Policy Number"
            placeholder="eg: AA/1234"
            value={formData.policyNumber}
            onChangeText={(text) => setFormData({ ...formData, policyNumber: text })}
            theme={{ colors: { primary: "#1E3A8A" } }}
            style={{ marginBottom: 16, borderRadius: 25 }}
            outlineStyle={{ borderRadius: 25 }}
          />
         </View>
        </View>

      {formData.product === "motor" && (
        
          <View className="mt-2">
       <Text className="font-semibold mb-2"> Number Type </Text>
         <View className="border-2 border-gray-300 rounded-full mb-4 ">
              <Picker
                selectedValue={formData.vehicleType}
                onValueChange={(itemValue) => setFormData({ ...formData, vehicleType: itemValue })}
                className="h-12">
                <Picker.Item label="Registration Number" value="Registration Number" />
                <Picker.Item label="Chasis Number" value="Chasis Number" />
                <Picker.Item label="Engine Number" value="Engine Number" />
              </Picker>
            </View>
            <Text className="font-semibold"> Registration No  </Text>

            <TextInput
              mode="outlined"
              label="Registration No"
              placeholder="eg: AA/1234"
              value={formData.registrationNo}
              onChangeText={(text) => setFormData({ ...formData, registrationNo: text })}
              theme={{ colors: { primary: "#1E3A8A" } }}
              style={{ marginBottom: 16, borderRadius: 25 }}
              outlineStyle={{ borderRadius: 25 }}
            />
          </View>
        )}

          <TextInput
            mode="outlined"
            label="Registered Mobile Number"
            value={formData.registeredMobile}
            onChangeText={(text) => setFormData({ ...formData, registeredMobile: text })}
            theme={{ colors: { primary: "#1E3A8A" } }}
            style={{ marginBottom: 16, borderRadius: 25 }}
            outlineStyle={{ borderRadius: 25 }}
          />
        {otpVisible && (
            <TextInput
                mode="outlined"
                label="OTP"
                placeholder="Enter OTP"
                value={formData.otp}
                onChangeText={(text) => setFormData({ ...formData, otp: text })}
                theme={{ colors: { primary: "#1E3A8A" } }}
                style={{ marginBottom: 16, borderRadius: 25 }}
                outlineStyle={{ borderRadius: 25 }}
            />
            )}
          
          <Button mode="contained"  onPress={() => setOtpVisible(true)} className="bg-blue-900  px-4 rounded-full">
            Generate OTP
          </Button>
        </View>

        <View className="flex-row mt-4">
          <Button mode="contained" onPress={() => {}} style={{ flex: 1, backgroundColor: "#1E3A8A", borderRadius: 25, marginRight: 8 }}>
            Find Policy
          </Button>
          <Button mode="contained" onPress={() => {}} style={{ flex: 1, backgroundColor: "red", borderRadius: 25, marginLeft: 8 }}>
            Clear Search
          </Button>
        </View>
      </View>
    </ScrollView>
  )
}
