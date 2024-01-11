import React from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "./Button.style";

export type Buttons = {
  text: string;
};

const Button = ({ text }: Buttons) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
