import React from "react";
import {
  Container,
  Header,
  Icon,
  Title,
  Subtitle,
  Menu,
  UserArea,
  User,
  Avatar,
  Divider,
  Content,
  Chevron,
} from "../Perfil/styles";
import { LearnCard } from "../../components/LearnCard";
export function Perfil({ navigation }: { navigation: any }) {
  return (
    <Container>
      <Header>
        <Icon
          onPress={() => navigation.navigate("Home")}
        />
      </Header>

      <LearnCard
        programname="Learn Level"
        subtitle="• Você está no nível 1"
      />

      <UserArea>
        <Avatar
          resizeMode="cover"
          source={require("../../assets/avatar.png")}
        />

        <User>
          <Title>Rafaela Meireles</Title>
          <Subtitle>meireles.rafa@gmail.com</Subtitle>
        </User>
      </UserArea>

      <Divider />

      <Menu>
        <Content>
          <Title>Torne-se um educador</Title>
          <Subtitle>Transforme a vida de alguém.</Subtitle>
        </Content>
        <Chevron />
      </Menu>

      <Divider />

      <Menu>
        <Content>
          <Title>Alterar tema</Title>
          <Subtitle>Clique para alterar o tema do app</Subtitle>
        </Content>
        <Chevron />
      </Menu>

      <Divider />

      <Menu>
        <Content>
          <Title>Configurações</Title>
          <Subtitle>Ative e desative recursos</Subtitle>
        </Content>
        <Chevron />
      </Menu>
    </Container>
  );
}
