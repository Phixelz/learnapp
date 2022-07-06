import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ButtonProps {
  type: 'payment';
}

export const CustomButton = styled.TouchableOpacity<ButtonProps>`
  padding: 16px;
  align-items: center;
  border-radius: 12px;
  background-color: #16BBB0;

  ${(props) => props.type === 'payment' && css `
  background-color: #373737;
  `}
`;

export const ButtonText = styled.Text`
  font-size: ${RFValue(14)}px;
  color: #fff;
  font-weight: 600;
`;
