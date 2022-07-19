import React from "react";
import {
  Container,
  Header,
  Icon,
  IconLeft,
  SuggestionsTitle,
  Wrapper,
  TextInput,
  TagsView,
  Tags,
  BackHome,
} from "../Suggestions/styles";
import { Card } from "../../components/Card";
import { Tag } from "../../components/Tag";

export function Suggestions({ navigation }: { navigation: any }) {
  return (
    <Container>
      
      <Header>
        <IconLeft>
          <BackHome onPress={() => navigation.navigate("Home")} />
          <SuggestionsTitle>
            Sugestões para você
          </SuggestionsTitle>
        </IconLeft>
        <Icon/>
      </Header>

      <Wrapper>
        <TextInput
          placeholder="O que você quer aprender?"
          placeholderTextColor="#949494"
        />

        <TagsView>
          <Tags>
            <Tag tagtitle="UX Design" />
            <Tag tagtitle="UI Design" />
            <Tag tagtitle="Product Design" />
            <Tag tagtitle="React Native" />
            <Tag tagtitle="JavaScript" />
            <Tag tagtitle="NodeJS" />
          </Tags>
        </TagsView>

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
        <Card
          type="default"
          cardtitle="ReactJS"
          instructorname="Rayna Curtis"
          pricedefault="R$ 27,90"
          tag="Programa Learn"
        />
        <Card
          type="default"
          cardtitle="React Native"
          instructorname="Rayna Curtis"
          pricedefault="R$ 27,90"
          tag="Programa Learn"
        />
      </Wrapper>
    </Container>
  );
}
