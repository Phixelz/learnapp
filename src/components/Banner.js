import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function Banner(props) {
  return (
    <View style={styles.banner}>
      <Text style={styles.programname}>{props.programname}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    padding: 12,
    alignItems: "center",
    backgroundColor: "#16BBB0",
    borderRadius: 12,
  },
  programname: {
    fontSize: 24,
    fontWeight: "900",
    color: "#FFF",
  },
});

