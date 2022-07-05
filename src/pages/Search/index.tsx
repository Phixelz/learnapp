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
  {
    id: "1",
    category: "Design",
  },

  {
    id: "2",
    category: "Marketing",
  },

  {
    id: "3",
    category: "Social Media",
  },

  {
    id: "4",
    category: "Desenvolvimento Web",
  },

  {
    id: "5",
    category: "Softwares",
  },

  {
    id: "6",
    category: "Business",
  },

  {
    id: "7",
    category: "Fotografia",
  },

  {
    id: "8",
    category: "Psicologia",
  },
];

export function Search({ navigation }: { navigation: any }) {
  return (
    <Container>
      <Header>
        <TextInput
          placeholder="O que você quer aprender?"
          placeholderTextColor="#949494"
        />
        <Icon onPress={() => navigation.navigate("Cart")} />
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
        renderItem={({ item }) => <Link>{item.category}</Link>}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
}
