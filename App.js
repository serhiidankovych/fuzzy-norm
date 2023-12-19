import React, { useState } from "react";

import { Text, View, SafeAreaView, ScrollView, StatusBar } from "react-native";
import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import { useFonts } from "expo-font";
import { styles } from "./styles/styles";

import Header from "./components/Header";
import Setup from "./components/Setup";
import Tnorm from "./components/Tnorm";

const alphabets = require("./assets/input/input.json");

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });

  const [membershipValues, setMembershipValues] = useState([
    "0.3",
    "0.8",
    "0.5",
  ]);
  console.log(membershipValues);

  const [textFieldsNames, setTextFieldsNames] = useState([
    alphabets.alphabet[0],
    alphabets.alphabet[1],
    alphabets.alphabet[2],
  ]);

  const handleAddTextField = () => {
    if (textFieldsNames.length <= 10) {
      setTextFieldsNames([
        ...textFieldsNames,
        alphabets.alphabet[textFieldsNames.length],
      ]);
    }
    setMembershipValues((prevValues) => [...prevValues, "0"]);
  };

  const handleRemoveTextField = () => {
    if (textFieldsNames.length >= 2) {
      const updatedTextFields = textFieldsNames.slice(0, -1);
      setTextFieldsNames(updatedTextFields);

      const updatedMembershipValues = membershipValues.slice(0, -1);
      setMembershipValues(updatedMembershipValues);
    }
  };

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Header title="norm" />
        <Setup
          textFieldsNames={textFieldsNames}
          handleAddTextField={handleAddTextField}
          handleRemoveTextField={handleRemoveTextField}
          membershipValues={membershipValues}
          setMembershipValues={setMembershipValues}
        />
        <Tnorm membershipValues={membershipValues} />
      </ScrollView>
    </SafeAreaView>
  );
}
