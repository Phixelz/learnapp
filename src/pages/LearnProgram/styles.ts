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

export const ProgramTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #373737;
`;

export const Icon = styled(Home)`
  font-size: ${RFValue(24)}px;
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
