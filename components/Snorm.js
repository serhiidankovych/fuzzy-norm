import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "../styles/styles";
import { calculateSNorms } from "../utils/utils";

export default function Snorm({ membershipValues }) {
  const [parameter, setParameter] = useState("0");

  const isMembershipValueValid = membershipValues.every(
    (str) => str.length >= 1
  );

  let sNorms = {};

  if (isMembershipValueValid) {
    sNorms = calculateSNorms(membershipValues, parameter);
  }

  return (
    <View style={styles.setup}>
      <Text style={styles.title}>S-norm</Text>
      <View style={styles.row}>
        <Text style={styles.text}>p</Text>
        <TextInput
          style={styles.input}
          placeholder={"p"}
          placeholderTextColor={"#f1f1f1"}
          keyboardType="numeric"
          value={parameter}
          onChangeText={(text) => setParameter(text)}
        />
      </View>

      {Object.entries(sNorms).map(([key, value]) => (
        <View key={key} style={styles.rowStyled}>
          <Text style={styles.text}>{key}</Text>
          <Text style={styles.text}>{value.toFixed(3)}</Text>
        </View>
      ))}
    </View>
  );
}
