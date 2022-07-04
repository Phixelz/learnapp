import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  padding: ${RFValue(12)}px;
  align-items: center;
  background-color: #16bbb0;
  border-radius: 8px;
`;

export const ProgramName = styled.Text`
  font-size: ${RFValue(24)}px;
  font-weight: 900;
  color: #fff;
`;

