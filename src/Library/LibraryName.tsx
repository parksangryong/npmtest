import React from "react";
import { View, Text } from "react-native";
import styles from "./LibraryName.style";

const LibraryName = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello!</Text>
    </View>
  );
};

export default LibraryName;
