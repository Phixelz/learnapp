import React from "react";
import { TouchableProps } from "react-native-svg";
import {
  Container,
  CardTitle,
  InstructorName,
  PriceDefault,
  Footer,
  Tag,
} from "../Card/styles";

interface CardProps extends TouchableProps {
  type: "horizontal" | "default";
  cardtitle: string;
  instructorname: string;
  pricedefault: string;
  tag: string;
}

export function Card({
  type,
  cardtitle,
  instructorname,
  pricedefault,
  tag,
}: CardProps) {
  return (
    <Container
      activeOpacity={0.8}
      type={type}>

      <CardTitle>
        {cardtitle}
      </CardTitle>

      <InstructorName>
        {instructorname}
      </InstructorName>

      <PriceDefault>
        {pricedefault}
      </PriceDefault>

      <Footer>
        <Tag>
          {tag}
        </Tag>
      </Footer>
    </Container>
  );
}
