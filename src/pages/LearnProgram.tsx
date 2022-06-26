import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Banner } from "../components/Banner";
import { CardPrimary } from "../components/CardPrimary";

export function LearnProgram() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.titlemain}>Programa Learn</Text>

        <View style={styles.banner}>
          <Banner programname="Learn." />
        </View>

        <View>
          <Text style={styles.title}>Sobre o Programa Learn</Text>
          <Text style={styles.description}>
            O objetivo do programa é ajudar estudantes e profissionais que estão
            buscando se especializar em uma determinada área ou que não possuem
            renda suficiente para fazer vários cursos.
          </Text>

          <Text style={styles.title}>Benefícios</Text>
          <Text style={styles.description}>
            Os benefícios são gerados de acordo com o level dentro do programa.
            Cada curso terá um benefício diferente, seja no level inicial (1) ou
            no level máximo (10) com descontos mais altos e gerando mais
            pontuação.
          </Text>

          <Text style={styles.title}>Cursos cadastrados</Text>
          <Text style={styles.description}>
            Os cursos cadastrados no programa podem ser identificados pela "Tag
            Verde".
          </Text>

          <CardPrimary
            course="UI Design "
            instructorname="Rayna Curtis"
            pricedefault="R$: 27,90"
            programtitle="Programa Learn"
          />

          <Text style={styles.title}>Instrutores</Text>
          <Text style={styles.description}>
            Ao cadastrar um curso, o instrutor decide uma pontuação limite para
            que o aluno consiga pagar utilizando apenas sua pontuação. A
            pontuação maior ou menor de acordo com o tipo de curso.
          </Text>

          <Text style={styles.title}>Trocar pontos Learn</Text>
          <Text style={styles.description}>
            Cada curso cadastrado possui um determinado requisito de pontuação.
            Caso você tenha a pontuação necessária, basta utilizá-la como forma
            de pagamento.
          </Text>

          <Text style={styles.title}>Como adquirir Learn Points</Text>
          <Text style={styles.description}>
            Cada curso adquirido gera um determinado número de Learn Points, que
            será exibido após finalizar o pagamento do curso selecionado.{" "}
          </Text>
        </View>
      </ScrollView>
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
  banner: {
    marginBottom: 16,
  },
  titlemain: {
    fontSize: 22,
    fontWeight: "700",
    color: "#373737",
    marginBottom: 24,
  },
  title: {
    fontSize: 17,
    fontWeight: "700",
    color: "#373737",
    marginBottom: 8,
    marginVertical: 16,
  },
  description: {
    fontSize: 16,

    marginBottom: 16,
    color: "#999999",
  },
});
