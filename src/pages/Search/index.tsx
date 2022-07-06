import React from "react";
import { FlatList } from "react-native";
import {
  Container,
  Icon,
  Header,
  TextInput,
  Tags,
  Title,
  Link,
} from "../Search/styles";
import { Tag } from "../../components/Tag";

const CategoryList = [

  { key: "Design", },
  { key: "Marketing", },
  { key: "Social Media", },
  { key: "Desenvolvimento Web", },
  { key: "Softwares", },
  { key: "Business", },
  { key: "Fotografia", },
  { key: "Psicologia", },
  { key: "Filosofia", },
  { key: "História da Arte", },
];

export function Search() {
  return (
    <Container>
      <Header>
        <TextInput
          placeholder="O que você quer aprender?"
          placeholderTextColor="#949494"
        />
        <Icon
        />
      </Header>

      <Title>Mais procurados</Title>
      <Tags>
        <Tag tagtitle="UX Design" />
        <Tag tagtitle="UI Design" />
        <Tag tagtitle="Product Design" />
        <Tag tagtitle="React Native" />
        <Tag tagtitle="JavaScript" />
        <Tag tagtitle="NodeJS" />
      </Tags>

      <Title>Categorias</Title>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={CategoryList}
        renderItem={({ item }) => <Link>{item.key}</Link>}
        keyExtractor={(item) => item.key}
      />
    </Container>
  );
}
