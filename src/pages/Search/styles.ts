import styled from "styled-components/native";
import { ShoppingCart } from "react-native-feather";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;

`;

export const Icon = styled(ShoppingCart)`
  color: #404040;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  padding: 12px;
  border-radius: 8px;
  margin: 0 12px 0 0;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 16px;
`;

export const Tags = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

export const Section = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.title};

`;

export const CategoryList = styled.SectionList.attrs({
  showsVerticalScrollIndicator: false,
})`
`;
