import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

export function Course({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <Image
            style={{
              width: "100%",
              height: 140,
              borderRadius: 8,
              marginBottom: 12,
            }}
            resizeMode="cover"
            source={{
              uri: "https://media.istockphoto.com/photos/web-designer-planning-website-ux-app-development-with-marker-pen-picture-id1172202165?k=20&m=1172202165&s=612x612&w=0&h=M33V4tdNYiw3fqCcZj2lcUyKvvzEyMTNwC6FAXYpXOw=",
            }}
          />
          <View>
            <Text style={styles.titlecourse}>UX Design - User Experience</Text>
            <Text style={styles.descriptioncourse}>Thilak Sundaram</Text>
          </View>

          <View style={styles.divider}></View>

          <View>
            <Text style={styles.title}>Requisitos</Text>
            <Text style={styles.description}>
              • Computador com conexão à Internet
            </Text>

            <Text style={styles.title}>Descrição</Text>
            <Text style={styles.description}>
              A ideia de UX, ou experiência do usuário, não é nova, mas continua
              a ser um ponto sensível para designers e usuários finais.
            </Text>

            <View style={styles.bulletsview}>
              <Text style={styles.title}>O que você vai aprender</Text>
              <Text style={styles.description}>12h e 45m de duração total</Text>

              <Text style={styles.bullets}>
                • Você aprenderá sobre ferramentas relevantes
              </Text>

              <Text style={styles.bullets}>
                • A relatar os resultados dos testes do usuário
              </Text>
              <Text style={styles.bullets}>
                • Você aprenderá a diferença entre UI e UX
              </Text>
              <Text style={styles.bullets}>
                • Você aprenderá a criar wireframes
              </Text>
            </View>

            <Text style={styles.title}>Programa Learn</Text>
            <Text style={styles.description}>
              Este curso está cadastrado no programa Learn
            </Text>

            <View style={styles.divider}></View>

            <Text style={styles.title}>Educador</Text>

            <View style={styles.instructor}>
              <Image
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 50,
                  marginHorizontal: 12,
                  marginLeft: 0,
                }}
                resizeMode="cover"
                source={{
                  uri: "https://img-b.udemycdn.com/user/200_H/186416782_a8ae_2.jpg",
                }}
              />
              <View>
                <Text style={styles.title}>Thilak Sundaram</Text>
                <Text style={styles.subtitle}>UI/UX Designer</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.courseprice}>R$ 27,90</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPressIn={() => navigation.navigate("Cart")}
        >
          <View style={styles.cartbutton}>
            <Text style={styles.textbutton}>Adicionar ao carrinho</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  wrapper: {
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 17,
    fontWeight: "700",
    color: "#373737",
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "400",
    color: "#999999",
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    color: "#999999",
    marginBottom: 32,
  },
  bulletsview: {
    marginBottom: 16,
  },
  bullets: {
    fontSize: 15,
    fontWeight: "400",
    color: "#999999",
    marginBottom: 16,
  },
  instructor: {
    paddingVertical: 16,
    flexDirection: "row",
  },
  divider: {
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#DBDBDB",
  },
  titlecourse: {
    fontSize: 18,
    fontWeight: "700",
    color: "#373737",
    marginBottom: 4,
  },
  descriptioncourse: {
    fontSize: 16,
    fontWeight: "400",
    color: "#999999",
    marginBottom: 24,
  },
  footer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderTopWidth: 1,
    borderTopColor: "#F2F2F2",
  },
  courseprice: {
    fontSize: 20,
    fontWeight: "700",
    color: "#373737",
  },
  textbutton: {
    fontSize: 15,
    fontWeight: "600",
    color: "#FFF",
  },
  cartbutton: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: "#16BBB0",
    borderRadius: 8,
  },
});
