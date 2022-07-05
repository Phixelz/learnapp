import React from "react";
import { View, ScrollView } from "react-native";
import { CustomButton } from "../../components/Button";
import {
  Container,
  CourseImage,
  Header,
  RatingsView,
  RatingsNumber,
  Ratings,
  Wrapper,
  Title,
  SubTitle,
  Description,
  Checks,
  LearnTo,
  Divider,
  Instructor,
  InstructorName,
  Avatar,
  CourseTitle,
  Price,
  Icon,
  Footer,
  DividerFooter,
  Cart,
  Share,
  Icons,
  Arrow,
} from "../Course/styles";

export function Course({ navigation }: { navigation: any }) {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Wrapper>
          <Header>
            <Arrow onPress={() => navigation.navigate("Home")} />
            <Icons>
              <Share />
              <Cart onPress={() => navigation.navigate("Cart")} />
            </Icons>
          </Header>

          <CourseImage
            resizeMode="cover"
            source={{
              uri: "https://media.istockphoto.com/photos/web-designer-planning-website-ux-app-development-with-marker-pen-picture-id1172202165?k=20&m=1172202165&s=612x612&w=0&h=M33V4tdNYiw3fqCcZj2lcUyKvvzEyMTNwC6FAXYpXOw=",
            }}
          />
          <CourseTitle>UX Design - User Experience</CourseTitle>
          <InstructorName>Thilak Sundaram</InstructorName>

          <RatingsView>
            <Ratings fill="#FBBC05" />
            <RatingsNumber>4.5</RatingsNumber>
          </RatingsView>

          <Divider />

          <Title>Requisitos</Title>
          <Description>• Computador com conexão à Internet</Description>

          <Title>Descrição</Title>
          <Description>
            A ideia de UX, ou experiência do usuário, não é nova, mas continua a
            ser um ponto sensível para designers e usuários finais.
          </Description>

          <Title>O que você vai aprender</Title>
          <Description>12h e 45m de duração total</Description>

          <Checks>
            <Icon />
            <LearnTo>Você aprenderá sobre ferramentas relevantes</LearnTo>
          </Checks>

          <Checks>
            <Icon />
            <LearnTo>A relatar os resultados dos testes do usuário</LearnTo>
          </Checks>

          <Checks>
            <Icon />
            <LearnTo>Você aprenderá a diferença entre UI e UX</LearnTo>
          </Checks>

          <Checks>
            <Icon />
            <LearnTo>Você aprenderá a criar wireframes</LearnTo>
          </Checks>

          <Title>Programa Learn</Title>
          <Description>
            Este curso está cadastrado no programa Learn
          </Description>

          <DividerFooter />

          <Title>Educador</Title>

          <Instructor>
            <Avatar
              resizeMode="cover"
              source={{
                uri: "https://img-b.udemycdn.com/user/200_H/186416782_a8ae_2.jpg",
              }}
            />
            <View>
              <Title>Thilak Sundaram</Title>
              <SubTitle>UI/UX Designer</SubTitle>
            </View>
          </Instructor>
        </Wrapper>
      </ScrollView>

      <Footer>
        <Price>R$ 27,90</Price>
        <CustomButton
          color="primary"
          title="Adicionar ao carrinho"
        />
      </Footer>
    </Container>
  );
}
