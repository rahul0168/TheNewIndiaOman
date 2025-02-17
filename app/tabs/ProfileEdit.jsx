import React, { useState } from 'react';
import { View } from 'react-native';
import {Text, TextInput, Button } from 'react-native-paper';

export default function ProfileEdit() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSave = () => {
    if (newPassword && newPassword !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('Updated Profile:', { name, email, phone, newPassword });
  };

  return (
    <View className="flex-1 p-6 ">
        <Text className="font-bold text-2xl">Edit Profile</Text>
      <TextInput
        label="Full Name"
        value={name}
        onChangeText={setName}
        mode="outlined"
        outlineStyle={{ borderRadius: 25 }}
        theme={{ colors: { primary: "#1E3A8A" } }}
        className="mb-4"
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        className="mb-4"
        outlineStyle={{ borderRadius: 25 }}
        theme={{ colors: { primary: "#1E3A8A" } }}
        keyboardType="email-address"
      />
      <TextInput
        label="Phone"
        value={phone}
        onChangeText={setPhone}
        mode="outlined"
        className="mb-4"
        outlineStyle={{ borderRadius: 25 }}
        theme={{ colors: { primary: "#1E3A8A" } }}
        keyboardType="phone-pad"
      />
      <TextInput
        label="New Password"
        value={newPassword}
        onChangeText={setNewPassword}
        mode="outlined"
        className="mb-4"
        outlineStyle={{ borderRadius: 25 }}
        theme={{ colors: { primary: "#1E3A8A" } }}
        secureTextEntry
      />
      <TextInput
        label="Confirm New Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        mode="outlined"
        className="mb-4"
        outlineStyle={{ borderRadius: 25 }}
        theme={{ colors: { primary: "#1E3A8A" } }}
        secureTextEntry
      />
      <Button mode="contained" onPress={handleSave} theme={{ colors: { primary: "#1E3A8A" } }} className="mt-4">
        Save Changes
      </Button>
    </View>
  );
}
