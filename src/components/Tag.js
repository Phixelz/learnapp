import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function Tag(props) {
  return (
      <View style={styles.tag}>
        <Text style={styles.texttag}>{props.coursename}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tag: {
    marginLeft: 0,
    marginHorizontal: 16,
    backgroundColor: "#FEFEFE",
    marginBottom: 16,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#BDBDBD",
  },
  texttag: {
    fontSize: 14,
    fontWeight: "600",
    color: "#5F5F5F",
  },
});
