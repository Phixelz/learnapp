import React from "react";
import {
  Container,
  ProgramName,
  SubTitle,
} from "../LearnCard/styles";

interface Props {
  programname: string,
  subtitle: string,
}

export function LearnCard({
  programname,
  subtitle }: Props) {
  return (
    <Container>
      <ProgramName>
        {programname}
      </ProgramName>

      <SubTitle>
        {subtitle}
      </SubTitle>
    </Container>
  );
}