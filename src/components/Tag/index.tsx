import React from "react";
import {
    Container,
    TagTitle,
} from "../Tag/styles";

interface Props {
    tagtitle: string;
}

export function Tag({
    tagtitle, }: Props) {
    return (
        <Container>
            <TagTitle>
                {tagtitle}
            </TagTitle>
        </Container >
    );
}