import React from "react";
import { useState } from "react";
import auth from "@react-native-firebase/auth";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Alert,
} from "react-native";

export function SignIn({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState("");

  function handleForgotPassword() {
    auth()
      .sendPasswordResetEmail(email)
      .then(() =>
        Alert.alert(
          "Redefinir senha",
          "Enviamos um link para o e-mail cadastrado."
        )
      );
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Learn.</Text>
      </View>

      <View style={styles.wrapper}>
        <Image
          style={{
            width: 212,
            height: 212,
            alignSelf: "center",
            marginBottom: 40,
          }}
          resizeMode="contain"
          source={require("../assets/opendoodles.png")}
        />

        <KeyboardAvoidingView behavior="height">
          <View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleForgotPassword}
            >
              <Text style={styles.emailforgot}>Esqueceu sua senha?</Text>
            </TouchableOpacity>

            <TextInput
              onChangeText={setEmail}
              style={styles.input}
              placeholder="Digite seu e-mail"
              placeholderTextColor="#949494"
            />

            <TextInput
              secureTextEntry
              style={styles.input}
              placeholder="Digite sua senha"
              placeholderTextColor="#949494"
            />

            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              activeOpacity={0.8}
            >
              <View style={styles.enterbutton}>
                <Text style={styles.textbutton}>Entrar</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8}>
              <View style={styles.content}>
                <Text style={styles.newaccount}>Não tem uma conta?</Text>
                <Text
                  style={[
                    styles.newaccount,
                    { fontSize: 16, fontWeight: "600", color: "#16BBB0" },
                  ]}
                >
                  {" "}
                  Criar conta
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    color: "#16BBB0",
  },
  wrapper: {
    marginVertical: "20%",
  },
  input: {
    backgroundColor: "#F2F2F2",
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  textbutton: {
    fontSize: 15,
    fontWeight: "700",
    color: "#FFF",
  },
  content: {
    justifyContent: "center",
    flexDirection: "row",
  },
  emailforgot: {
    alignSelf: "flex-end",
    fontSize: 15,
    fontWeight: "600",
    color: "#16BBB0",
    marginBottom: 8,
  },
  newaccount: {
    fontSize: 16,
    fontWeight: "400",
    color: "#373737",
    marginVertical: 16,
  },
  enterbutton: {
    alignItems: "center",
    backgroundColor: "#16BBB0",
    borderRadius: 12,
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
});
