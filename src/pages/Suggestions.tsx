import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { CardPrimary } from "../components/CardPrimary";
import { Tag } from "../components/Tag";

const DATA = [
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
    coursename: "UI Design",
    instrurctorname: "Rayna Curtis",
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

export function Suggestions() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sugestões para você</Text>
      <TextInput
        style={styles.input}
        placeholder="O que você quer aprender?"
        placeholderTextColor="#949494"
      />
      <View style={[{ flexDirection: "row", flexWrap: "nowrap" }]}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Tag coursename="UX Design" />
          <Tag coursename="UI Design" />
          <Tag coursename="Product Design" />
          <Tag coursename="React Native" />
          <Tag coursename="JavaScript" />
          <Tag coursename="NodeJS" />
        </ScrollView>
      </View>

      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.8}>
              <View style={styles.courselist}>
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: 80,
                    height: "auto",
                    resizeMode: "cover",
                    borderRadius: 8,
                  }}
                />
                <CardPrimary
                  course={item.coursename}
                  instructorname={item.instrurctorname}
                  pricedefault={item.pricedefault}
                  programtitle={item.tagprogram}
                />
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
    backgroundColor: "#FBFBFB",
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  title: {
    fontSize: 22,
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
  courselist: {
    flexDirection: "row",
    marginBottom: 12,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
});
