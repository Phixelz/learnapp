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

// export const image = [
//   {
//     id: "1",
//     image:
//       "https://media.istockphoto.com/photos/web-designer-planning-website-ux-app-development-with-marker-pen-picture-id1172202165?k=20&m=1172202165&s=612x612&w=0&h=M33V4tdNYiw3fqCcZj2lcUyKvvzEyMTNwC6FAXYpXOw=",
//   },
//   {
//     id: "2",
//     image:
//       "https://media.istockphoto.com/photos/close-up-ux-developer-and-ui-designer-use-augmented-reality-about-picture-id1300792680?k=20&m=1300792680&s=612x612&w=0&h=2ePwTK_CjCJGrCOouNAr5b0ZXEZ0LGWhC8wa2ExIqac=",

//   },

//   {
//     id: "3",
//     image:
//       "https://media.istockphoto.com/photos/designers-drawing-website-ux-app-development-picture-id1196702694?k=20&m=1196702694&s=612x612&w=0&h=yKMJJP5YfwWzYpkXKKwSPtNmf1bVVuwZ98Y97AvsYLo=",
//   },

//   {
//     id: "4",
//     image:
//       "https://media.istockphoto.com/photos/freelance-programmer-or-developer-working-at-home-and-typing-source-picture-id1036557452?k=20&m=1036557452&s=612x612&w=0&h=dJLiD_Xy1XBfVV3Sz_Ual3Pzox-YaJnk3w830uhfFvU=",
//   },

//   {
//     id: "5",
//     image:
//       "https://media.istockphoto.com/photos/team-of-professional-developer-programmer-cooperation-meeting-and-picture-id1144131733?k=20&m=1144131733&s=612x612&w=0&h=Td888XQyuhzubvLO9fDUgJQamNDW7ut5ruQjLOFEVGQ=",
//   },
// ];

interface CardProps extends TouchableProps {
  type: "horizontal" | "vertical";
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
        <Tag>{tag}</Tag>
      </Footer>
    </Container>
  );
}
