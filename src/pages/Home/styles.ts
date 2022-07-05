import { ChevronRight } from "react-native-feather";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: #fbfbfb;
`;

export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  margin-bottom: 16px;
  justify-content: space-between;
`;

export const Grettings = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: #373737;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 50px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: 700;
  color: #373737;
`;

export const TextInput = styled.TextInput`
  background-color: #f2f2f2;
  padding: 12px 12px;
  border-radius: 12px;
  margin-bottom: 16px;
`;

export const Section = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 12px;
`;

export const SectionName = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #373737;
`;

export const Chevron = styled(ChevronRight)`
  color: #373737;
`;
