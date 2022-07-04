import styled from "styled-components/native";
import { Home } from "react-native-feather";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: #fbfbfb;
`;

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`;

export const PerfilTitle = styled.Text`
  font-size: 22px;
  font-weight: 700;
  color: #373737;
`;

export const Icon = styled(Home)`
  font-size: ${RFValue(24)}px;
  color: #404040;
`;

export const UserArea = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 0 0 24px;
  border-bottom-width: 1px;
  border-color: #dbdbdb;
  margin: 16px 0 0;
`;

export const User = styled.View``;

export const Menu = styled.View`
  margin: 16px 0 0;
  padding: 0 0 24px;
  border-bottom-width: 1px;
  border-color: #dbdbdb;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #4e4e4e;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: #a5a5a5;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin: 0 12px 0 0;
`;
