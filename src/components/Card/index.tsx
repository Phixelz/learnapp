import React from "react";
import { TouchableOpacityProps } from "react-native";
import {
  Container,
  CardTitle,
  InstructorName,
  PriceDefault,
  Footer,
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
}, {}: CardProps) {
  return (
    <Container
      activeOpacity={0.8}
      type={type}
      {...rest}>
      <CardTitle>{cardtitle}</CardTitle>
      <InstructorName>{instructorname}</InstructorName>
      <PriceDefault>{pricedefault}</PriceDefault>
      <Footer>
        <Tag>{tag}</Tag>
      </Footer>
    </Container>
  );
}
