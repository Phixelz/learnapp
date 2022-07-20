import React from "react";
import {
  Container,
  Header,
  Icon,
  ProgramName,
  SubTitle,
} from "../LearnCard/styles";

interface Props {
  type: "default" | "static";
  programname: string,
  subtitle: string,
}

export function LearnCard({ type, programname, subtitle }: Props) {
  return (
    <Container type={type}>
      <Header>
        <ProgramName type={type}>{programname}</ProgramName>
        <Icon type={type} />
      </Header>

      <SubTitle type={type}>{subtitle}</SubTitle>
    </Container>
  );
}