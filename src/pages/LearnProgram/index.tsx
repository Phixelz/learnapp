import React from "react";
import {
  ScrollView
} from "react-native";
import {
  Container,
  Header,
  ProgramTitle,
  Icon,
  Title,
  Description,
} from '../LearnProgram/styles';
import { Banner } from "../../components/Banner";
import { Card } from "../../components/Card";
export function LearnProgram({ navigation }: { navigation: any }) {
  return (
    <Container>
      <ScrollView
        showsVerticalScrollIndicator={false}>
        <Header>
        <Icon
            onPress={() => navigation.navigate("Home")}
          />
          <ProgramTitle>
            Programa Learn
          </ProgramTitle> 
        </Header>

        <Banner
          programname="Learn."
        />

        <Title>
          Sobre o Programa Learn
        </Title>
        <Description>
          O objetivo do programa é ajudar estudantes e profissionais que estão
          buscando se especializar em uma determinada área ou que não possuem
          renda suficiente para fazer vários cursos.
        </Description>

        <Title>
          Benefícios
        </Title>
        <Description>
          Os benefícios são gerados de acordo com o level dentro do programa.
          Cada curso terá um benefício diferente, seja no level inicial (1) ou
          no level máximo (10) com descontos mais altos e gerando mais
          pontuação.
        </Description>

        <Title>
          Cursos cadastrados
        </Title>
        <Description>
          Os cursos cadastrados no programa podem ser identificados pela "Tag
          Verde".
        </Description>

        <Card
          type="default"
          cardtitle="UI Design "
          instructorname="Rayna Curtis"
          pricedefault="R$: 27,90"
          tag="Programa Learn"
        />

        <Title>
          Instrutores
        </Title>
        <Description>
          Ao cadastrar um curso, o instrutor decide uma pontuação limite para
          que o aluno consiga pagar utilizando apenas sua pontuação. A
          pontuação maior ou menor de acordo com o tipo de curso.
        </Description>

        <Title>
          Trocar pontos Learn
        </Title>
        <Description>
          Cada curso cadastrado possui um determinado requisito de pontuação.
          Caso você tenha a pontuação necessária, basta utilizá-la como forma
          de pagamento.
        </Description>

        <Title>
          Como adquirir Learn Points
        </Title>
        <Description>
          Cada curso adquirido gera um determinado número de Learn Points, que
          será exibido após finalizar o pagamento do curso selecionado.{" "}
        </Description>
      </ScrollView>
    </Container>
  );
}
