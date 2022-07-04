import { ArrowLeft } from "react-native-feather";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: #fefefe;
`;

export const Icon = styled(ArrowLeft)`
  font-size: ${RFValue(24)}px;
  color: #404040;
  margin: 0 12px 0 0;
`;

export const Header = styled.View`
  margin-bottom: 32px;
`;

export const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const CartItem = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #373737;
`;

export const ButtonRemove = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: #cc4c4d;
`;

export const Divider = styled.View`
  border-bottom-width: 1px;
  border-color: #dbdbdb;
  margin: 24px 0;
`;

export const ProgramCard = styled.View`
  padding: 16px 16px;
  border-width: 1px;
  border-color: #dddddd;
  background-color: #ffffff;
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const ProgramSubtitle = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: #909090;
  margin: 4px;
`;

export const ProgramTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #373737;
`;
