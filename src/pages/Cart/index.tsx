import React from "react";
import { CustomButton } from "../../components/Button";
import { Card } from "../../components/Card";
import {
  Container,
  CartTitle,
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
        <CartTitle>
          Carrinho
        </CartTitle>
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
        type="primary"
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
        type="secondary"
        title="Learn points insuficientes"
      />
    </Container>
  );
}
