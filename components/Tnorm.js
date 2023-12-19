import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "../styles/styles";
import { calculateTNorms } from "../utils/utils";

export default function Tnorm({ membershipValues }) {
  const [parameters, setParameters] = useState({ alpha: "1", gamma: "0" });

  const isMembershipValueValid = membershipValues.every(
    (str) => str.length >= 1
  );

  let tNorms = {};

  if (isMembershipValueValid) {
    tNorms = calculateTNorms(membershipValues, parameters);
  }

  return (
    <View style={styles.setup}>
      <Text style={styles.title}>T-norm</Text>
      <View style={styles.row}>
        <Text style={styles.text}>alpha</Text>
        <TextInput
          style={styles.input}
          placeholder={"alpha"}
          placeholderTextColor={"#f1f1f1"}
          keyboardType="numeric"
          value={parameters.alpha}
          onChangeText={(text) => setParameters({ ...parameters, alpha: text })}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>gamma</Text>
        <TextInput
          style={styles.input}
          placeholder={"gamma"}
          placeholderTextColor={"#f1f1f1"}
          keyboardType="numeric"
          value={parameters.gamma}
          onChangeText={(text) => setParameters({ ...parameters, gamma: text })}
        />
      </View>
      {Object.entries(tNorms).map(([key, value]) => (
        <View key={key} style={styles.rowStyled}>
          <Text style={styles.text}>{key}</Text>
          <Text style={styles.text}>{value.toFixed(3)}</Text>
        </View>
      ))}
    </View>
  );
}
