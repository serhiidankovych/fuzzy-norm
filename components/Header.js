import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/styles";
import Icon from "react-native-vector-icons/FontAwesome5";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Icon name="hat-wizard" size={25} style={styles.icon} />
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

export default Header;
