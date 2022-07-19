import styled from "styled-components/native";
import { X } from "react-native-feather";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primary_dark};
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 24px 16px 24px 24px;
`;

export const ProgramName = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Icon = styled(X)`
  color: ${({ theme }) => theme.colors.primary};
`;
