import React from "react";
import {
  Container,
  Header,
  PerfilTitle,
  Icon,
  Title,
  Subtitle,
  Menu,
  UserArea,
  User,
  Avatar,
} from '../Perfil/styles';
import { LearnCard } from "../../components/LearnCard";
export function Perfil({ navigation }: { navigation: any }) {
  return (
    <Container>

      <Header>
        <PerfilTitle>
          Perfil
        </PerfilTitle>
        <Icon
          onPress={() => navigation.navigate("Home")}
        />
      </Header>

      <UserArea>
        <Avatar
          resizeMode="cover"
          source={require("../../assets/avatar.png")}
        />

        <User>
          <Title>
            Rafaela Meireles
          </Title>

          <Subtitle>
            meireles.rafa@gmail.com
          </Subtitle>
        </User>
      </UserArea>

      <Menu>
        <Title>Torne-se um educador</Title>
        <Subtitle>Transforme a vida de alguém.</Subtitle>
      </Menu>

      <Menu>
        <Title>Alterar tema</Title>
        <Subtitle>
          Clique para alterar o tema do app
        </Subtitle>
      </Menu>

      <Menu>
        <Title>Configurações</Title>
        <Subtitle>Ative e desative recursos</Subtitle>
      </Menu>

      <LearnCard
        programname="Learn Level"
        subtitle="• Você está no nível 1"
      />
    </Container>
  );
}

