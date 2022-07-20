import React, { useState } from "react";
import auth from "@react-native-firebase/auth";
import { Alert } from "react-native";
import {
  Container,
  Header,
  Logo,
  Illustration,
  Form,
  TextInput,
} from '../SignIn/styles';
import { Button } from '../../components/Button';

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
    <Container>
      <Header>
        <Logo>
          Learn.
        </Logo>

        <Illustration
          resizeMode="contain"
          source={require("../../assets/opendoodles.png")}
        />
      </Header>

      <Form>
        <TextInput
          onChangeText={setEmail}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#949494"
        />

        <Button
          type="link"
          onPress={handleForgotPassword}
          title="Esqueceu sua senha?"
        />

        <TextInput
          secureTextEntry
          placeholder="Digite sua senha"
          placeholderTextColor="#949494"
        />
      </Form>

      <Button
        type="primary"
        onPress={() => navigation.navigate("Home")}
        title="Entrar"
      />
    </Container>
  );
}
