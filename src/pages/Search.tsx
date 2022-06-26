import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Tag } from "../components/Tag";

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

export function Search() {
  return (
    <View style={styles.container}>
      <Text
        style={[styles.title, { marginTop: 0, marginBottom: 24, fontSize: 22 }]}
      >
        Pesquisar
      </Text>
      <TextInput
        style={styles.input}
        placeholder="O que você quer aprender?"
        placeholderTextColor="#949494"
      />

      <Text style={styles.titlesecondary}>Mais procurados</Text>

      <View
        style={[{ flexDirection: "row", flexWrap: "wrap" }]}
      >
        <Tag coursename="UX Design" />
        <Tag coursename="UI Design" />
        <Tag coursename="Product Design" />
        <Tag coursename="React Native" />
        <Tag coursename="JavaScript" />
        <Tag coursename="NodeJS" />
      </View>

      <Text style={[styles.title]}>Categorias</Text>

      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={CategoryList}
          renderItem={({ item }) => (
            <Text style={styles.subtitle}>{item.category}</Text>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFBFB",
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#373737",
    marginBottom: 12,
  },
  titlesecondary: {
    fontSize: 18,
    fontWeight: "700",
    color: "#373737",
    marginBottom: 24,
  },
  input: {
    backgroundColor: "#F2F2F2",
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
  },
  textbutton: {
    fontSize: 14,
    fontWeight: "600",
    color: "#373737",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#373737",
    marginVertical: 16,
  },
});
