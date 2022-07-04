import styled from "styled-components/native";
import { ShoppingCart } from "react-native-feather";
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

export const SuggestionsTitle = styled.Text`
  font-size: 22px;
  font-weight: 700;
  color: #373737;
`;

export const Icon = styled(ShoppingCart)`
  font-size: ${RFValue(24)}px;
  color: #404040;
`;

export const TextInput = styled.TextInput`
  background-color: #f2f2f2;
  padding: 12px 12px;
  border-radius: 12px;
  margin-bottom: 16px;
`;

export const Tags = styled.View`
  flex-direction: row;
  flex-wrap: nowrap;
`;
