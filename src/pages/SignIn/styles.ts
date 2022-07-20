import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.ScrollView`
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFPercentage(15)}px;
  margin-bottom: ${RFPercentage(10)}px;
`;

export const Logo = styled.Text`
  font-size: ${RFValue(32)}px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary_dark};
`;

export const Form = styled.View`
`;

export const Illustration = styled.Image`
  width: ${RFValue(200)}px;
  height: ${RFValue(200)}px;
`;

export const TextInput = styled.TextInput`
  padding: 12px 12px;
  margin-bottom: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const EmailForgot = styled.Text`
  align-self: flex-end;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.primary_dark};
`;
