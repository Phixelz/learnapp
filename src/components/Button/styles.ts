import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ButtonProps {
  type: "primary" | "secondary" | "payment" | "link";
}

export const CustomButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})<ButtonProps>`

  padding: 16px;
  align-items: center;
  border-radius: 8px;

  ${(props) => props.type === 'primary' && css `
  background-color: ${({ theme }) => theme.colors.primary_dark};
  `}

  ${(props) => props.type === 'secondary' && css `
   padding: 16px 0;
   align-items: flex-start;
  `}

  ${(props) => props.type === 'payment' && css `
  background-color: ${({ theme }) => theme.colors.secondary_dark};
  `}

  ${(props) => props.type === 'link' && css `
    padding: 0;
    margin-bottom: 8px;
    align-items: flex-end;
  `}
`;

export const ButtonText = styled.Text<ButtonProps>`
  font-size: ${RFValue(14)}px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};

  ${(props) => props.type === 'secondary' && css `
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.secondary_dark};
  `}

  ${(props) => props.type === 'link' && css `
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.primary_dark};
  `}
`;
