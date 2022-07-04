import styled, { css } from 'styled-components/native';

interface ButtonProps {
  type: 'default' | 'pagament' | 'learn';
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  padding: 16px 24px;
  align-items: center;
  border-radius: 12px;

  ${(props) => props.type === 'default' && css `
  background-color: #16BBB0;
  `}

  ${(props) => props.type === 'pagament' && css `
  background-color: #373737;
  `}

  ${(props) => props.type === 'learn' && css `
  background-color: #16BBB0;
  `}
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: 600;
`;
