import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import { Checkbox } from "react-native-paper";

const DeclarationModal = ({ visible, onClose, onProceed }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Declaration تعهد</Text>

          <Text style={styles.declarationText}>
            I hereby declare that the information entered by me in this
            application are true to the best of my knowledge and belief. Any
            change after the submission of the data, then the same would be
            conveyed immediately to NIA.
            {"\n\n"}
            أتعهد بأن البيانات التي ادخلتها في الموقع صحيحة و حقيقية لحد معرفتي
            و فهمي ، اي تغيير بعد تقديم البيانات سيتم اخطار الشركة الهندية
            الجديدة للتأمين المحدودة فورا .
          </Text>

          <View style={styles.checkboxContainer}>
            <Checkbox
              status={isChecked ? "checked" : "unchecked"}
              onPress={() => setIsChecked(!isChecked)}
              color="#007bff"
            />
            <Text>I Agree أوافق</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, !isChecked && styles.disabledButton]}
              disabled={!isChecked}
              onPress={onProceed}
            >
              <Text style={styles.buttonText}>Proceed</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#fff" }]}
              onPress={onClose}
            >
              <Text style={[styles.buttonText, { color: "#007bff" }]}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeclarationModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    width: "90%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  declarationText: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    // flexDirection: "row",
    // justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    gap: 10,
  },
  button: {
    // flex: 1,
    padding: 10,
    width: "100%",
    backgroundColor: "#007bff",
    alignItems: "center",
    marginHorizontal: 5,
    borderRadius: 5,
  },
  disabledButton: {
    backgroundColor: "#cccccc",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 16,
  },
});
