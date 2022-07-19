import React from "react";
import {
  Container,
  Header,
  Icon,
  ProgramName,
  SubTitle,
} from "../LearnCard/styles";

interface Props {
  programname: string,
  subtitle: string,
}

export function LearnCard({ programname, subtitle }: Props) {
  return (
    <Container>
      <Header>
        <ProgramName>{programname}</ProgramName>
        <Icon />
      </Header>

      <SubTitle>{subtitle}</SubTitle>

    </Container>
  );
}