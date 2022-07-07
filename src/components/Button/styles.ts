import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ButtonProps {
  type: 'payment';
}

export const CustomButton = styled.TouchableOpacity<ButtonProps>`
  padding: 16px;
  align-items: center;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.primary};

  ${(props) => props.type === 'payment' && css `
  background-color: ${({ theme }) => theme.colors.secondary_dark};
  `}
`;

export const ButtonText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: 600;
  color: #fff;
`;
