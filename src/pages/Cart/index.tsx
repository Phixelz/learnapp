import React from "react";
import { CustomButton } from "../../components/Button";
import { Card } from "../../components/Card";
import {
  Container,
  Header,
  Section,
  CartItem,
  ButtonRemove,
  Icon,
  Divider,
  ProgramCard,
  ProgramTitle,
  ProgramSubtitle,
} from "./styles";

export function Cart({ navigation }: { navigation: any }) {
  return (
    <Container>
      <Header>
        <Icon
          onPress={() => navigation.navigate("Course")}
        />
      </Header>

      <Section>
        <CartItem>
          1 Item
        </CartItem>

        <ButtonRemove>
          Remover
        </ButtonRemove>
      </Section>

      <Card
        type="default"
        cardtitle="UI Design - User Interface"
        instructorname="Thilak Sundaram"
        pricedefault="R$: 27,90"
        tag="Programa Learn"
      />

      <CustomButton
        color="secondary"
        title="Ir para pagamento"
      />

      <Divider
      />

      <ProgramCard>
        <ProgramTitle>
          Programa Learn
        </ProgramTitle>

        <ProgramSubtitle>
          Você não possui pontos suficientes
        </ProgramSubtitle>
      </ProgramCard>

      <CustomButton
        color="primary"
        title="Learn points insuficientes"
      />
    </Container>
  );
}
