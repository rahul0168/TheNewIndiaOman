import React from "react";
import { ScrollView, View, Text } from "react-native";
import {
  TextInput,
  Button,
  Provider as PaperProvider,
} from "react-native-paper";

const theme = {
  colors: {
    primary: "#6b7280", // Gray color
    background: "#ffffff", // White background
  },
  roundness: 8, // For globally rounded corners
};

export default function EditProfileScreen() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [work, setWork] = React.useState("");
  const [home, setHome] = React.useState("");

  return (
    <PaperProvider theme={theme}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, padding: 16 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="bg-white p-6 rounded-lg shadow-md">
          <Text className="mb-6 text-3xl font-bold text-center">
            Update Profile
          </Text>

          {/* Name Input */}
          <TextInput
            mode="outlined"
            label="Name"
            value={name}
            onChangeText={setName}
            style={{ marginBottom: 16 }}
            theme={theme}
          />

          {/* Email Input */}
          <TextInput
            mode="outlined"
            label="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            style={{ marginBottom: 16 }}
            theme={theme}
          />

          {/* Phone Number Input */}
          <TextInput
            mode="outlined"
            label="Phone Number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            style={{ marginBottom: 16 }}
            theme={theme}
          />

          {/* Full Address Input */}
          <TextInput
            mode="outlined"
            label="Full Address"
            value={address}
            onChangeText={setAddress}
            multiline
            numberOfLines={4}
            style={{ marginBottom: 16 }}
            theme={theme}
          />

          {/* City Input */}
          <TextInput
            mode="outlined"
            label="City"
            value={city}
            onChangeText={setCity}
            style={{ marginBottom: 16 }}
            theme={theme}
          />

          {/* State Input */}
          <TextInput
            mode="outlined"
            label="State"
            value={state}
            onChangeText={setState}
            style={{ marginBottom: 16 }}
            theme={theme}
          />

          {/* Work Input */}
          <TextInput
            mode="outlined"
            label="Work"
            value={work}
            onChangeText={setWork}
            style={{ marginBottom: 16 }}
            theme={theme}
          />

          {/* Home Input */}
          <TextInput
            mode="outlined"
            label="Home"
            value={home}
            onChangeText={setHome}
            style={{ marginBottom: 16 }}
            theme={theme}
          />

          {/* Save Changes Button */}
          <Button
            mode="contained"
            onPress={() => {}}
            buttonColor={theme.colors.primary}
            textColor="#ffffff"
            style={{ marginTop: 16 }}
          >
            Save Changes
          </Button>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}
