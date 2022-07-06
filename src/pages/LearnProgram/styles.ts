import styled from "styled-components/native";
import { ArrowLeft } from "react-native-feather";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: #fbfbfb;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`;

export const ProgramTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #373737;
  margin-left: 12px;
`;

export const Icon = styled(ArrowLeft)`
  color: #404040;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #373737;
  margin-top: 24px;
  margin-bottom: 8px;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #999999;
  margin: 12px 0;
`;
