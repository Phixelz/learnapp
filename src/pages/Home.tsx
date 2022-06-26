import React from "react";
import { useState, useEffect } from "react";
import { CardLearn } from "../components/LearnCard";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { CardPrimary } from "../components/CardPrimary";

const images = [
  {
    id: "1",
    image:
      "https://media.istockphoto.com/photos/web-designer-planning-website-ux-app-development-with-marker-pen-picture-id1172202165?k=20&m=1172202165&s=612x612&w=0&h=M33V4tdNYiw3fqCcZj2lcUyKvvzEyMTNwC6FAXYpXOw=",
    coursename: "UX Design",
    instrurctorname: "Thilak Sundaram",
    pricedefault: "R$ 27,90",
    tagprogram: "Programa Learn",
  },
  {
    id: "2",
    image:
      "https://media.istockphoto.com/photos/close-up-ux-developer-and-ui-designer-use-augmented-reality-about-picture-id1300792680?k=20&m=1300792680&s=612x612&w=0&h=2ePwTK_CjCJGrCOouNAr5b0ZXEZ0LGWhC8wa2ExIqac=",
    coursename: "UX Research",
    instrurctorname: "Carter Siphron",
    pricedefault: "R$ 27,90",
    tagprogram: "Programa Learn",
  },

  {
    id: "3",
    image:
      "https://media.istockphoto.com/photos/designers-drawing-website-ux-app-development-picture-id1196702694?k=20&m=1196702694&s=612x612&w=0&h=yKMJJP5YfwWzYpkXKKwSPtNmf1bVVuwZ98Y97AvsYLo=",
    coursename: "Product Design",
    instrurctorname: "Rayna Curtis",
    pricedefault: "R$ 27,90",
    tagprogram: "Programa Learn",
  },

  {
    id: "4",
    image:
      "https://media.istockphoto.com/photos/freelance-programmer-or-developer-working-at-home-and-typing-source-picture-id1036557452?k=20&m=1036557452&s=612x612&w=0&h=dJLiD_Xy1XBfVV3Sz_Ual3Pzox-YaJnk3w830uhfFvU=",
    coursename: "ReactJS",
    instrurctorname: "Rayna Curtis",
    pricedefault: "R$ 27,90",
    tagprogram: "Programa Learn",
  },

  {
    id: "5",
    image:
      "https://media.istockphoto.com/photos/team-of-professional-developer-programmer-cooperation-meeting-and-picture-id1144131733?k=20&m=1144131733&s=612x612&w=0&h=Td888XQyuhzubvLO9fDUgJQamNDW7ut5ruQjLOFEVGQ=",
    coursename: "React Native",
    instrurctorname: "Rayna Curtis",
    pricedefault: "R$ 27,90",
    tagprogram: "Programa Learn",
  },
];

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
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.grettings}>{grettings}</Text>
          <Text style={styles.title}>Rafaela Meireles</Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Perfil")}
        >
          <Image
            style={{
              width: 40,
              height: 40,
              borderRadius: 50,
              borderWidth: 2,
            }}
            resizeMode="cover"
            source={require("../assets/avatar.png")}
          />
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        onPressIn={() => navigation.navigate("Search")}
        placeholder="O que você quer aprender?"
        placeholderTextColor="#949494"
        autoCorrect={true}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate("LearnProgram")}
        activeOpacity={0.8}
      >
        <CardLearn
          programname="Programa Learn"
          subtitle="Programa de incentivo Learn"
        />
      </TouchableOpacity>

      <View style={styles.subtitlecontainer}>
        <Text style={styles.subtitle}>Sugestões para você</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Suggestions")}
        >
          <Text style={styles.viewall}>Ver todos</Text>
        </TouchableOpacity>
      </View>

      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={images}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.8}>
              <View style={styles.cardprimary}>
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: 80,
                    height: "auto",
                    resizeMode: "cover",
                    borderRadius: 8,
                  }}
                />

                <TouchableOpacity
                  activeOpacity={0.8}
                  onPressIn={() => navigation.navigate("Course")}
                >
                  <CardPrimary
                    course={item.coursename}
                    instructorname={item.instrurctorname}
                    pricedefault={item.pricedefault}
                    programtitle={item.tagprogram}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: "#FBFBFB",
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  grettings: {
    fontSize: 16,
    fontWeight: "400",
    color: "#373737",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#373737",
    marginBottom: 16,
  },
  subtitlecontainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#373737",
  },
  viewall: {
    alignSelf: "flex-end",
    fontSize: 17,
    fontWeight: "500",
    color: "#16BBB0",
  },
  input: {
    backgroundColor: "#E7E7E7",
    padding: 12,
    borderRadius: 12,
    marginBottom: 24,
  },
  cardprimary: {
    flexDirection: "row",
    marginBottom: 12,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
});
