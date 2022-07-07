import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import { Book } from "react-native-feather";

interface CardProps {
  type: 'default' | 'horizontal';
}

export const Container = styled.TouchableOpacity<CardProps>`
  flex-direction: row;
  background-color: #fff;
  border-radius: 8px;
  border-width: 1px;
  border-color: #f1f1f1;
  margin-bottom: 16px;


  ${(props) => props.type === 'horizontal' && css `
  flex-direction: column;
  width: ${RFValue(248)}px;
  margin-right: 16px;
 `}

 ${(props) => props.type === 'default' && css `
 `}
`;

export const Header = styled.View`
margin-left: 16px;
padding: 16px 16px 16px 0;
`;

export const CourseIcon = styled.View<CardProps>`
  padding: 32px;
  background-color: #f0fffe;
  border-radius: 8px;
  justify-content: center;

  ${(props) => props.type === 'horizontal' && css `
  align-items: center;
 `}
`;

export const Icon = styled(Book)`
  color: #16bbb0;
`;

export const CardTitle = styled.Text`
 font-size: 18px;
 font-weight: 700;
 color: #5f5f5f;
`;

export const InstructorName = styled.Text`
  margin: 4px;
  font-size: 16px;
  font-weight: 400;
  color: #999999;
`;

export const PriceDefault = styled.Text`
margin: 4px;
font-size: 16px;
font-weight: 700;
color: #373737;
`;

export const Footer = styled.View`
margin: 4px 0;
`;

export const Tag = styled.Text`
width: ${RFValue(116)}px;
background-color: #f0fffe;
border-radius: 4px;
font-size: 14px;
font-weight: 600;
color: #16bbb0;
margin-top: 4px;
padding: 4px 8px 4px;
`;
