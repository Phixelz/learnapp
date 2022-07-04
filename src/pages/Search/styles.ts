import styled from "styled-components/native";
import { ShoppingCart } from "react-native-feather";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: #fbfbfb;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  background-color: #f2f2f2;
  padding: 12px;
  border-radius: 12px;
  margin: 0 12px 0 0;
`;

export const Icon = styled(ShoppingCart)`
  font-size: ${RFValue(24)}px;
  color: #404040;
`;


export const Title = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #373737;
  margin-bottom: 16px;
`;

export const Tags = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

export const Link = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #373737;
  margin: 16px 0;
`;
