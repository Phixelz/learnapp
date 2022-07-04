import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: #ffffff;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-weight: 900;
  color: #16bbb0;
`;

export const Wrapper = styled.View`
  margin-top: ${RFPercentage(15)}px;
`;

export const Illustration = styled.Image`
  width: ${RFValue(180)}px;
  height: ${RFValue(180)}px;
  align-self: center;
  margin-bottom: 40px;
`;

export const TextInput = styled.TextInput`
  background-color: #f2f2f2;
  padding: 12px 12px;
  border-radius: 12px;
  margin-bottom: 16px;
`;

export const Link = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
`;

export const EmailForgot = styled.Text`
  align-self: flex-end;
  font-size: 15px;
  font-weight: 600;
  color: #16bbb0;
  margin-bottom: 8px;
`;
