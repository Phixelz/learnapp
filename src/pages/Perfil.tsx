import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { CardLearn } from "../components/LearnCard";
export function Perfil() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.maintitle}>Perfil</Text>
        <View style={styles.userarea}>
          <Image
            style={{
              width: 48,
              height: 48,
              borderRadius: 50,
              borderWidth: 2,
              borderColor: "#FBFBFB",
              marginHorizontal: 12,
              marginLeft: 0,
            }}
            resizeMode="cover"
            source={require("../assets/avatar.png")}
          />

          <TouchableOpacity activeOpacity={0.8}>
            <View>
              <Text style={styles.title}>Rafaela Meireles</Text>
              <Text style={styles.subtitle}>meireles.rafa@gmail.com</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity activeOpacity={0.8}>
          <View style={styles.instructorarea}>
            <Text style={styles.title}>Torne-se um educador</Text>
            <Text style={styles.subtitle}>Transforme a vida de alguém.</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8}>
          <View style={styles.learnarea}>
            <Text style={styles.title}>Alterar tema</Text>
            <Text style={styles.subtitle}>
              Clique para alterar o tema do app
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8}>
          <View style={styles.configs}>
            <Text style={styles.title}>Configurações</Text>
            <Text style={styles.subtitle}>Ative e desative recursos</Text>
          </View>
        </TouchableOpacity>

        <CardLearn
          programname="Learn Level"
          subtitle="• Você está no nível 1"
        />
      </ScrollView>
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
  maintitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#373737",
    marginBottom: 24,
  },
  userarea: {
    paddingVertical: 22,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#DBDBDB",
  },
  instructorarea: {
    paddingVertical: 22,
    borderBottomWidth: 1,
    borderBottomColor: "#DBDBDB",
  },
  learnarea: {
    paddingVertical: 22,
    flexDirection: "column",
    borderBottomWidth: 1,
    borderBottomColor: "#DBDBDB",
  },
  configs: {
    paddingVertical: 22,
    flexDirection: "column",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#DBDBDB",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#4E4E4E",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "400",
    color: "#A5A5A5",
  },
});
