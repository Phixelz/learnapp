import React from "react";
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
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";

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
        title="default"
        cardtitle="UI Design - User Interface"
        instructorname="Thilak Sundaram"
        pricedefault="R$: 27,90"
        tag="Programa Learn"     />

      <Button
        type="payment"
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

      <Button
        type="primary"
        title="Learn points insuficientes"
      />
    </Container>
  );
}
