import styled, { css } from 'styled-components/native';
import { Book } from "react-native-feather";
import { RFValue } from 'react-native-responsive-fontsize';

interface CardProps {
  type: 'default' | 'horizontal';
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<CardProps>`

  background-color: ${({ theme }) => theme.colors.background};
  flex-direction: row;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 16px;


  ${(props) => props.type === 'horizontal' && css `
  flex-direction: column;
  width: ${RFValue(248)}px;
  margin-right: 16px;
 `}

 ${(props) => props.type === 'default' && css `
 `}
`;

export const Header = styled.View<CardProps>`
  padding: 32px;
  border-radius: 8px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary_light};

  ${(props) => props.type === 'horizontal' && css `
  align-items: center;
 `}
`;

export const Footer = styled.View`
margin-left: 16px;
padding: 16px 16px 16px 0;
`;

export const Icon = styled(Book)`
  color: ${({ theme }) => theme.colors.primary_dark};
`;

export const CardTitle = styled.Text`
 font-size: 18px;
 font-weight: 700;
 color: ${({ theme }) => theme.colors.title_light};
`;

export const InstructorName = styled.Text`
  margin: 4px 0;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.description};
`;

export const PriceDefault = styled.Text`
margin: 4px 0;
font-size: 16px;
font-weight: 700;
color: ${({ theme }) => theme.colors.title};
`;

export const Tag = styled.Text`
width: ${RFValue(116)}px;
background-color: ${({ theme }) => theme.colors.primary_light};
border-radius: 4px;
font-size: 14px;
font-weight: 600;
color: ${({ theme }) => theme.colors.primary_dark};
margin-top: 4px;
padding: 4px 8px 4px;
`;
