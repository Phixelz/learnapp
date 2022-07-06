import React from "react";
import { useState, useEffect } from "react";
import {
  Container,
  Header,
  Perfil,
  GrettingsView,
  Grettings,
  Avatar,
  Title,
  Wrapper,
  TextInput,
  LearnProgram,
  Populares,
  Suggestions,
  Section,
  HorizontalCards,
  SectionName,
  Chevron,
} from "../Home/styles";
import { LearnCard } from "../../components/LearnCard";
import { Card } from "../../components/Card";

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
        <GrettingsView>
          <Grettings>{grettings}</Grettings>
          <Title>Rafaela Meireles</Title>
        </GrettingsView>

        <Perfil
          onPress={() => navigation.navigate("Perfil")}
        >
          <Avatar
            resizeMode="cover"
            source={require("../../assets/avatar.png")}
          />
        </Perfil>
      </Header>

      <TextInput
        onPressIn={() => navigation.navigate("Search")}
        placeholder="O que você quer aprender?"
        placeholderTextColor="#949494"
      />

      <Wrapper>
        <LearnProgram
          onPress={() => navigation.navigate("LearnProgram")}
        >
          <LearnCard
            programname="Programa Learn"
            subtitle="Programa de incentivo Learn"
          />
        </LearnProgram>

        <Section>
          <SectionName>Populares</SectionName>
          <Populares>
            <Chevron />
          </Populares>
        </Section>

        <HorizontalCards>
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
        </HorizontalCards>

        <Section>
          <SectionName>Sugestões para você</SectionName>
          <Suggestions
            onPress={() => navigation.navigate("Suggestions")}
          >
            <Chevron />
          </Suggestions>
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
      </Wrapper>
    </Container >
  );
}
