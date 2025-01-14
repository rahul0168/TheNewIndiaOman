import { StyleSheet, Text, View, Animated } from "react-native";
import React, { forwardRef, useCallback } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { TextInput as PTextInput, Button as PButton } from "react-native-paper";

const MotorInfoBottomSheet = forwardRef(
  (
    { formData, onFormChange, onPremiumCalculate, onShowInformation, onNext },
    ref
  ) => {
    const renderDraggableIcon = useCallback(
      () => (
        <View style={styles.draggableContainer}>
          <View style={styles.dragIcon} />
        </View>
      ),
      []
    );
    const handleInputChange = (name, value) => {
      onFormChange({
        ...formData,
        [name]: value,
      });
    };

    return (
      <RBSheet
        ref={ref}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={630}
        dragFromTopOnly={true}
        animationType="slide"
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}
      >
        {renderDraggableIcon()}
        <View style={styles.bottomSheetContent}>
          <Text style={styles.title}>Vehicle Information</Text>

          <View>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Our Policy No</Text>
              {/* <Text style={styles.arabicLabel}>رقم الوثيقة التأمنية</Text> */}
            </View>
            <PTextInput
              outlineStyle={{ borderRadius: 25 }}
              mode="outlined"
              label={"Our Policy No"}
              style={styles.input}
              value={formData.policyNo}
              onChangeText={(value) => handleInputChange("policyNo", value)}
              theme={{ colors: { primary: "#1E3A8A" } }}
            />
          </View>

          <View style={styles.row}>
            <View style={styles.halfWidth}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Veh.Usage</Text>
                {/* <Text style={styles.arabicLabel}>استخدام السيارات</Text> */}
              </View>
              <PTextInput
                outlineStyle={{ borderRadius: 25 }}
                label={"Vehicle Usage"}
                mode="outlined"
                style={styles.input}
                value={formData.vehicleUsage}
                onChangeText={(value) =>
                  handleInputChange("vehicleUsage", value)
                }
                theme={{ colors: { primary: "#1E3A8A" } }}
              />
            </View>
            <View style={styles.halfWidth}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Reg.No</Text>
                {/* <Text style={styles.arabicLabel}>رقم المركبة</Text> */}
              </View>
              <PTextInput
                outlineStyle={{ borderRadius: 25 }}
                label={"Registration No"}
                mode="outlined"
                style={styles.input}
                value={formData.regNo}
                onChangeText={(value) => handleInputChange("regNo", value)}
                theme={{ colors: { primary: "#1E3A8A" } }}
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.halfWidth}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Chassis No</Text>
                {/* <Text style={styles.arabicLabel}>رقم الشاسي</Text> */}
              </View>
              <PTextInput
                outlineStyle={{ borderRadius: 25 }}
                label={"Chassis No"}
                mode="outlined"
                style={styles.input}
                value={formData.chassisNo}
                onChangeText={(value) => handleInputChange("chassisNo", value)}
                theme={{ colors: { primary: "#1E3A8A" } }}
              />
            </View>
            <View style={styles.halfWidth}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>BarCode</Text>
                {/* <Text style={styles.arabicLabel}>الباركود</Text> */}
              </View>
              <PTextInput
                outlineStyle={{ borderRadius: 25 }}
                label={"####-####-##-####"}
                mode="outlined"
                placeholderTextColor={"#ccc"}
                style={styles.input}
                value={formData.barCode}
                onChangeText={(value) => handleInputChange("barCode", value)}
                theme={{ colors: { primary: "#1E3A8A" } }}
              />
            </View>
          </View>

          <View>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>License Number (or) Civil ID</Text>
              {/* <Text style={styles.arabicLabel}>رخصة</Text> */}
            </View>
            <PTextInput
              outlineStyle={{ borderRadius: 25 }}
              label={"License Number (or) Civil ID"}
              mode="outlined"
              style={styles.input}
              value={formData.licenseNumber}
              onChangeText={(value) =>
                handleInputChange("licenseNumber", value)
              }
              theme={{ colors: { primary: "#1E3A8A" } }}
            />
          </View>

          <View style={styles.buttonContainer}>
            {/* <PButton
              mode="contained"
              onPress={onPremiumCalculate}
              labelStyle={{ color: "white", fontSize: 14, fontWeight: "bold" }}
              style={[styles.actionButton, { backgroundColor: "#1E3A8A" }]}
                            theme={{ colors: { primary: "#1E3A8A" } }}

            >
              Premium Calculator
            </PButton> */}

            {/* <PButton
            mode="contained"
            onPress={onNext}
            labelStyle={{ color: "white", fontSize: 16, fontWeight: "bold" }}
            style={[styles.actionButton, { backgroundColor: "#1E3A8A" }]}
          >
            Next
          </PButton> */}
          </View>
          <PButton
            mode="contained"
            onPress={onShowInformation}
            labelStyle={{ color: "white", fontSize: 14, fontWeight: "bold" }}
            style={[styles.actionButton, { backgroundColor: "#1E3A8A" }]}
          >
            Show Information
          </PButton>
        </View>
      </RBSheet>
    );
  }
);

export default MotorInfoBottomSheet;

const styles = StyleSheet.create({
  draggableContainer: {
    width: "100%",
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  dragIcon: {
    width: 40,
    height: 4,
    borderRadius: 4,
    backgroundColor: "#D3D3D3",
    marginTop: 10,
  },
  bottomSheetContent: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  arabicLabel: {
    fontSize: 14,
    color: "#666",
    textAlign: "right",
  },
  input: {
    marginBottom: 15,
    borderRadius: 20,
    fontSize: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  halfWidth: {
    width: "48%",
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 10,
  },
  actionButton: {
    padding: 5,
    // fontSize: 16,
    marginRight: -5,
    borderRadius: 25,
  },
});
