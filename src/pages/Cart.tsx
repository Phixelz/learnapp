import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CardPrimary } from "../components/CardPrimary";

export function Cart() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho</Text>

      <View style={styles.subtitlecontainer}>
        <View>
          <Text style={styles.subtitle}>1 Item</Text>
        </View>

        <TouchableOpacity activeOpacity={0.8}>
          <View>
            <Text style={styles.itemremove}>Remover</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.carditem}>
        <CardPrimary
          course="UX Design - Experiência do Usuário"
          instructorname="Thilak Sundaram"
          pricedefault="R$: 27,90"
          programtitle="Programa Learn"
        />
      </View>

      <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.creditcardbutton}>
          <Text style={styles.textpay1}>Pagar com cartão de crédito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.googlepaybutton}>
          <Text style={styles.textpay2}>Pagar com Google Pay</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.divider}></View>

      <View style={styles.learncard}>
        <Text style={styles.cardtitle}>Programa Learn</Text>
        <Text style={styles.instructorname}>
          Você não possui pontos suficientes
        </Text>
      </View>

      <TouchableOpacity activeOpacity={1}>
        <View style={styles.learnbutton}>
          <Text style={styles.textpay3}>Pagar com Learn Points</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: "#FBFBFB",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#373737",
    marginBottom: 32,
  },
  subtitlecontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#373737",
    marginBottom: 4,
  },
  itemremove: {
    fontSize: 16,
    fontWeight: "600",
    color: "#CC4C4D",
    marginBottom: 4,
  },
  carditem: {
    marginBottom: 16,
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
  textpay1: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFF",
  },
  textpay2: {
    fontSize: 14,
    fontWeight: "600",
    color: "#373737",
  },
  textpay3: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFF",
  },
  creditcardbutton: {
    alignItems: "center",
    backgroundColor: "#373737",
    borderRadius: 8,
    paddingVertical: 16,
    marginBottom: 16,
  },
  googlepaybutton: {
    alignItems: "center",
    borderRadius: 8,
    borderColor: "#DDDDDD",
    borderWidth: 1,
    padding: 16,
  },
  divider: {
    marginVertical: 24,
    borderBottomColor: "#DBDBDB",
    borderBottomWidth: 1,
  },
  learncard: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#DDDDDD",
    marginBottom: 16,
  },
  learnbutton: {
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#16BBB0",
    paddingVertical: 16,
    opacity: 0.5,
  },
});
