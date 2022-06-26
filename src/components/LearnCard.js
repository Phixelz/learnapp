import React from "react";
import { View, Text, StyleSheet, } from "react-native";

export function CardLearn(props) {
  return (
      <View style={styles.cardlearn}>
        <View style={styles.textcontainer}>
          <Text style={styles.programname}>{props.programname}</Text>
          <Text style={styles.subtitle}>{props.subtitle}</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  cardlearn: {
    backgroundColor: "#16BBB0",
    marginBottom: 24,
    borderRadius: 8,
  },
  textcontainer: {
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  programname: {
    fontSize: 22,
    fontWeight: "700",
    color: "#FFF",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "400",
    color: "#FFF",
  },
});
