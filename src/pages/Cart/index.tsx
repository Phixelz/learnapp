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

export function Cart() {
  return (
    <Container>
      <Header>
        <Icon />
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
        cardtitle="UX Design - Experiência do Usuário"
        instructorname="Thilak Sundaram"
        pricedefault="R$: 27,90"
        tag="Programa Learn"
      />

      <CustomButton
        type="secondary"
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
        type="primary"
        title="Learn points insuficientes"
      />
    </Container>
  );
}
