import styled from "styled-components/native";
import { ArrowLeft, ShoppingCart } from "react-native-feather";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: #fbfbfb;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-bottom: 24px;
  justify-content: space-between;
`;

export const IconLeft = styled.View`
flex-direction: row;
`;

export const SuggestionsTitle = styled.Text`
  align-self: center;
  font-size: 18px;
  font-weight: 700;
  color: #373737;
`;

export const BackHome = styled(ArrowLeft)`
  color: #404040;
  margin-right: 12px;
`;

export const Icon = styled(ShoppingCart)`
  color: #404040;
`;

export const Wrapper = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
`;

export const TextInput = styled.TextInput`
  flex: 1;
  background-color: #f2f2f2;
  padding: 12px 12px;
  border-radius: 12px;
  margin-bottom: 16px;
`;

export const TagsView = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
`;

export const Tags = styled.View`
  flex-direction: row;
  flex-wrap: nowrap;
`;
