import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export function CardPrimary(props) {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.cardprimary}>
        <View style={styles.cardtext}>
          <Text style={styles.cardtitle}>{props.course}</Text>
          <Text style={styles.instructorname}>{props.instructorname}</Text>
          <Text style={styles.pricedefault}>{props.pricedefault}</Text>
          <Text style={styles.programtitle}>{props.programtitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardprimary: {
    borderRadius: 8,
    backgroundColor: "#FFF",
  },
  cardtext: {
    paddingVertical: 12,
    marginHorizontal: 12,
  },
  cardtitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#5F5F5F",
  },
  instructorname: {
    marginVertical: 4,
    fontSize: 16,
    fontWeight: "400",
    color: "#999999",
  },
  pricedefault: {
    marginVertical: 4,
    fontSize: 16,
    fontWeight: "700",
    color: "#5F5F5F",
  },
  programtitle: {
    width: 128,
    backgroundColor: "#F0FFFE",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    fontWeight: "600",
    color: "#16BBB0",
  },
});
