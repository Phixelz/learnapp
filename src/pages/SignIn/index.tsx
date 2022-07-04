import React from "react";
import { useState } from "react";
import auth from "@react-native-firebase/auth";
import {
  Alert,
} from "react-native";

import {
  Container,
  Header,
  Title,
  Illustration,
  Wrapper,
  TextInput,
  Link,
  EmailForgot,
} from '../SignIn/styles';
import { CustomButton } from '../../components/Button';

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
        <Title>
          Learn.
        </Title>
      </Header>

      <Wrapper>
        <Illustration
          resizeMode="contain"
          source={require("../../assets/opendoodles.png")}
        />

        <TextInput
          onChangeText={setEmail}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#949494"
        />

        <Link
          activeOpacity={0.8}
          onPress={handleForgotPassword}>
          <EmailForgot>
            Esqueceu sua senha?
          </EmailForgot>
        </Link>

        <TextInput
          secureTextEntry
          placeholder="Digite sua senha"
          placeholderTextColor="#949494"
        />

        <CustomButton
          onPress={() => navigation.navigate("Home")}
          color="primary"
          title="Entrar"
        />
      </Wrapper>
    </Container>
  );
}
