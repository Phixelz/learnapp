import React from "react";
import {
    Container,
    Header,
    Icon,
    SuggestionsTitle,
    TextInput,
    TagsView,
    Tags,
} from '../Suggestions/styles';
import { Card } from "../../components/Card";
import { Tag } from "../../components/Tag";
import { ScrollView } from "react-native-gesture-handler";

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

            <ScrollView
                showsVerticalScrollIndicator={false}>
                <TextInput
                    placeholder="O que você quer aprender?"
                    placeholderTextColor="#949494"
                />

                <TagsView
                    showsHorizontalScrollIndicator={false}>
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
                </TagsView>

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
            </ScrollView>
        </Container>
    );
}
