import React from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";

const Setup = ({
  textFieldsNames,
  handleAddTextField,
  handleRemoveTextField,
  membershipValues,
  setMembershipValues,
}) => {
  const handleChangeText = (text, index) => {
    const updatedValues = [...membershipValues];
    updatedValues[index] = text;
    setMembershipValues(updatedValues);
  };
  return (
    <View style={styles.setup}>
      <Text style={styles.title}>Provide membership values</Text>
      {textFieldsNames.map((value, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.text}>{value.letter}</Text>
          <TextInput
            style={styles.input}
            placeholder={value.letter}
            placeholderTextColor={"#f1f1f1"}
            type="numeric"
            value={membershipValues[index]}
            keyboardType="numeric"
            onChangeText={(text) => handleChangeText(text, index)}
          />
        </View>
      ))}
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          disabled={textFieldsNames.length <= 2}
          style={
            textFieldsNames.length <= 2
              ? styles.helperButtonDisabled
              : styles.helperButton
          }
          onPress={() => handleRemoveTextField()}
        >
          <Text style={styles.buttonText}>Remove</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={textFieldsNames.length >= 10}
          style={
            textFieldsNames.length >= 10
              ? styles.helperButtonDisabled
              : styles.helperButton
          }
          onPress={() => handleAddTextField()}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Setup;
