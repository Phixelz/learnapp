import React from "react";
import { useState, useEffect } from "react";
import { LearnCard } from "../../components/LearnCard";
import { Card } from "../../components/Card";
import { View, TouchableOpacity, ScrollView } from "react-native";
import {
  Container,
  Header,
  Grettings,
  Avatar,
  Title,
  TextInput,
  Section,
  SectionName,
  Chevron,
} from "../Home/styles";

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
          <Grettings>{grettings}</Grettings>
          <Title>Rafaela Meireles</Title>
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
      />
      <ScrollView showsVerticalScrollIndicator={false}>
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
          <SectionName>Populares</SectionName>
          <TouchableOpacity activeOpacity={0.8}>
            <Chevron />
          </TouchableOpacity>
        </Section>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Card
            type="horizontal"
            cardtitle="React Native"
            instructorname="Rayna Curtis"
            pricedefault="R$ 27,90"
            tag="Programa Learn"
          />
          <Card
            type="horizontal"
            cardtitle="ReactJS"
            instructorname="Rayna Curtis"
            pricedefault="R$ 27,90"
            tag="Programa Learn"
          />
          <Card
            type="horizontal"
            cardtitle="Styled Components"
            instructorname="Rayna Curtis"
            pricedefault="R$ 27,90"
            tag="Programa Learn"
          />
        </ScrollView>

        <Section>
          <SectionName>Sugestões para você</SectionName>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Suggestions")}
          >
            <Chevron />
          </TouchableOpacity>
        </Section>

        <Card
          type="default"
          cardtitle="UX Design"
          instructorname="Rayna Curtis"
          pricedefault="R$ 27,90"
          tag="Programa Learn"
        />
        <Card
          type="default"
          cardtitle="UX Research"
          instructorname="Rayna Curtis"
          pricedefault="R$ 27,90"
          tag="Programa Learn"
        />
        <Card
          type="default"
          cardtitle="Product Design"
          instructorname="Rayna Curtis"
          pricedefault="R$ 27,90"
          tag="Programa Learn"
        />
      </ScrollView>
    </Container>
  );
}
