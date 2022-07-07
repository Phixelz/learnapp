import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Wrapper = styled.View`
  margin-top: ${RFPercentage(15)}px;
`;

export const Illustration = styled.Image`
  width: ${RFValue(200)}px;
  height: ${RFValue(200)}px;
  align-self: center;
  margin-bottom: 40px;
`;

export const TextInput = styled.TextInput`
  padding: 12px 12px;
  border-radius: 12px;
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Link = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
`;

export const EmailForgot = styled.Text`
  align-self: flex-end;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.primary};
`;
