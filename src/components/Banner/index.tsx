import React from "react";
import {
    Container,
    ProgramName,
} from './styles';

interface Props {
    programname: string;
}

export function Banner({
    programname, }: Props) {
    return (
        <Container>
            <ProgramName>
                {programname}
            </ProgramName>
        </Container>
    );
}

