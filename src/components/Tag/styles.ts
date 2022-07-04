import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
background-color: #fefefe;
border-radius: 8px;
border-width: 1px;
border-color: #dddddd;
padding: 8px 12px;
margin: 0 12px 12px 0;
`;

export const TagTitle = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #5f5f5f;
`;
