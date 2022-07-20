import styled, {css} from "styled-components/native";
import { X } from "react-native-feather";

interface Props {
  type: "default" | "static";
}

export const Container = styled.View<Props>`
  background-color: ${({ theme }) => theme.colors.primary_dark};
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 24px 16px 24px 24px;

  ${(props) => props.type === 'static' && css `
  padding: 16px;
  align-items: center;
  `}
`;

export const ProgramName = styled.Text<Props>`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};

  ${(props) => props.type === 'static' && css `
  font-size: 24px;
  font-weight: 900;
  `}
`;

export const SubTitle = styled.Text<Props>`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};

  ${(props) => props.type === 'static' && css `
    display: none;
  `}
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Icon = styled(X)<Props>`
  color: ${({ theme }) => theme.colors.primary};

  ${(props) => props.type === 'static' && css `
    display: none;
  `}
`;
