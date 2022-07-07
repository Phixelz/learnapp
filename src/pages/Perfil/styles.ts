import styled from "styled-components/native";
import { ArrowLeft, ChevronRight } from "react-native-feather";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
margin-bottom: 24px;
`;

export const Icon = styled(ArrowLeft)`
  color: #373737;
`;

export const Chevron = styled(ChevronRight)`
  color: #dddddd;
`;

export const UserArea = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 24px 24px;
  margin-bottom: 32px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 12px;
`;

export const User = styled.View`
`;

export const Divider = styled.View`
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 24px;
`;

export const Menu = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  padding: 0 0 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.View``;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.title};
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.subtitle};
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin: 0 12px 0 0;
`;
