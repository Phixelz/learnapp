import styled, { css } from 'styled-components/native';

interface ButtonProps {
  color: 'primary' | 'secondary';
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  padding: 16px 24px;
  align-items: center;
  border-radius: 12px;

  ${(props) => props.color === 'primary' && css `
  background-color: #16BBB0;
  `}

  ${(props) => props.color === 'secondary' && css `
  background-color: #373737;
  `}
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: 600;
`;
