import React from "react";
import { TouchableOpacityProps } from "react-native";
import {
  Container,
  Header,
  Footer,
  Icon,
  CardTitle,
  InstructorName,
  PriceDefault,
  Tag,
} from "../Card/styles";

interface CardProps extends TouchableOpacityProps {
  type: 'default' | 'horizontal';
  cardtitle: string
  instructorname: string
  pricedefault: string
  tag: string
}

export function Card({
  type,
  cardtitle,
  instructorname,
  pricedefault,
  tag,
  ...rest
}, {
}: CardProps) {
  return (
    <Container
      activeOpacity={0.8}
      type={type}
      {...rest}>

      <Header
        type={type}>
        <Icon
          width={32}
          height={32}
        />
      </Header>

      <Footer>
        <CardTitle>{cardtitle}</CardTitle>
        <InstructorName>{instructorname}</InstructorName>
        <PriceDefault>{pricedefault}</PriceDefault>
        <Tag>{tag}</Tag>
      </Footer>
    </Container>
  );
}
