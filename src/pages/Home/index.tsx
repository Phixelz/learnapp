import React from "react";
import { useState, useEffect } from "react";
import { LearnCard } from "../../components/LearnCard";
import { Card } from "../../components/Card";
import {
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  Container,
  Header,
  Grettings,
  Avatar,
  Title,
  TextInput,
  Section,
  SectionName,
  ViewAll,
  HorizontalCards,
} from '../Home/styles';

export function Home({ navigation }: { navigation: any }) {
  const [grettings, setgrettings] = useState("");
  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setgrettings("Bom Dia,");
    } else if (currentHour >= 12 && currentHour < 18) {
      setgrettings("Boa Tarde,");
    } else {
      setgrettings("Boa Noite,");
    }
  }, [grettings]);

  return (
    <Container>
      <Header>
        <View>
          <Grettings>
            {grettings}
          </Grettings>
          <Title>
            Rafaela Meireles
          </Title>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Perfil")}
        >
          <Avatar
            resizeMode="cover"
            source={require("../../assets/avatar.png")}
          />
        </TouchableOpacity>
      </Header>

      <TextInput
        onPressIn={() => navigation.navigate("Search")}
        placeholder="O que você quer aprender?"
        placeholderTextColor="#949494"
        autoCorrect={true}
      />
      <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate("LearnProgram")}
          activeOpacity={0.8}
        >
          <LearnCard
            programname="Programa Learn"
            subtitle="Programa de incentivo Learn"
          />
        </TouchableOpacity>

        <Section>
          <SectionName>
            Sugestões para você
          </SectionName>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Suggestions")}
          >
            <ViewAll>
              Ver todos
            </ViewAll>
          </TouchableOpacity>
        </Section>

        <Card
          cardtitle="UX Design"
          instructorname="Rayna Curtis"
          pricedefault="R$ 27,90"
          tag="Programa Learn"
        />
        <Card
          cardtitle="UX Research"
          instructorname="Rayna Curtis"
          pricedefault="R$ 27,90"
          tag="Programa Learn"
        />
        <Card
          cardtitle="Product Design"
          instructorname="Rayna Curtis"
          pricedefault="R$ 27,90"
          tag="Programa Learn"
        />
        <Card
          cardtitle="ReactJS"
          instructorname="Rayna Curtis"
          pricedefault="R$ 27,90"
          tag="Programa Learn"
        />
        <Card
          cardtitle="React Native"
          instructorname="Rayna Curtis"
          pricedefault="R$ 27,90"
          tag="Programa Learn"
        />
      </ScrollView>
    </Container >
  );
}