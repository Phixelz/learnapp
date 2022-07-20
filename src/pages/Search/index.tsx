import React from "react";
import {
  Container,
  Icon,
  Header,
  TextInput,
  CategoryList,
  Section,
  Tags,
  Title,
} from "../Search/styles";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";

const List = [
  { id: "1", title: "Design" },
  { id: "2", title: "Marketing" },
  { id: "3", title: "Social Media" },
  { id: "4", title: "Desenvolvimento Web" },
  { id: "5", title: "Softwares" },
  { id: "6", title: "Business" },
  { id: "7", title: "Fotografia" },
  { id: "8", title: "Psicologia" },
  { id: "9", title: "Filosofia" },
  { id: "10", title: "História da Arte" },
];

export function Search() {
  return (
    <Container>
      <Header>
        <TextInput
          placeholder="O que você quer aprender?"
          placeholderTextColor="#949494"
        />
        <Icon />
      </Header>

      <Title>Mais procurados</Title>
      <Tags>
        <Tag
          tagtitle="UX Design"
        />
        <Tag
          tagtitle="UI Design"
        />
        <Tag
          tagtitle="Product Design"
        />
        <Tag
          tagtitle="React Native"
        />
        <Tag
          tagtitle="JavaScript"
        />
        <Tag
          tagtitle="NodeJS"
        />
      </Tags>

      <CategoryList
        sections={[
          { sectiontitle: "Categorias", data: List }
        ]}
        renderItem={({ item }) => (
          <Button
            type="secondary"
            title={item.title}
          />
        )}
        renderSectionHeader={({ section }) => (
          <Section>
            {section.sectiontitle}
          </Section>
        )}
      />
    </Container>
  );
}
