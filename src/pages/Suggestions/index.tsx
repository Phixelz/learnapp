import React from "react";
import {
    Container,
    Header,
    Icon,
    SuggestionsTitle,
    TextInput,
    Tags,
} from '../Suggestions/styles';
import { Card } from "../../components/Card";
import { Tag } from "../../components/Tag";

export function Suggestions({ navigation }: { navigation: any }) {
    return (
        <Container>
            <Header>
                <SuggestionsTitle>
                    Sugestões para você
                </SuggestionsTitle>
                <Icon
                    onPress={() => navigation.navigate("Cart")}
                />
            </Header>

            <TextInput
                placeholder="O que você quer aprender?"
                placeholderTextColor="#949494"
            />

            <Tags>
                <Tag
                    tagtitle="UX Design"
                />
                <Tag
                    tagtitle="UI Design"
                />
                <Tag
                    tagtitle="Product Design"
                />
                <Tag
                    tagtitle="React Native"
                />
                <Tag
                    tagtitle="JavaScript"
                />
                <Tag
                    tagtitle="NodeJS"
                />
            </Tags>

            <Card
                cardtitle="UX Design"
                instructorname="Rayna Curtis"
                pricedefault="R$ 27,90"
                tag="Programa Learn"
            />
            <Card
                cardtitle="UX Research"
                instructorname="Rayna Curtis"
                pricedefault="R$ 27,90"
                tag="Programa Learn"
            />
            <Card
                cardtitle="Product Design"
                instructorname="Rayna Curtis"
                pricedefault="R$ 27,90"
                tag="Programa Learn"
            />
            <Card
                cardtitle="ReactJS"
                instructorname="Rayna Curtis"
                pricedefault="R$ 27,90"
                tag="Programa Learn"
            />
            <Card
                cardtitle="React Native"
                instructorname="Rayna Curtis"
                pricedefault="R$ 27,90"
                tag="Programa Learn"
            />
        </Container>
    );
}
