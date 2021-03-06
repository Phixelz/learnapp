import styled from "styled-components/native";
import { ArrowLeft, ShoppingCart } from "react-native-feather";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  flex-direction: row;
  margin-bottom: 24px;
  justify-content: space-between;
  align-items: center;
`;

export const IconLeft = styled.View`
flex-direction: row;
align-items: center;
`;

export const SuggestionsTitle = styled.Text`
  align-self: center;
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.title};
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
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 12px 12px;
  border-radius: 8px;
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
