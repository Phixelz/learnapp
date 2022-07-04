import styled from 'styled-components/native';
export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  padding: 16px 16px;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 12px;
  border-width: 1px;
  border-color: #f1f1f1;
`;

export const CardTitle = styled.Text`
 font-size: 18px;
 font-weight: 700;
 color: #5f5f5f;
`;

export const InstructorName = styled.Text`
  margin: 4px;
  font-size: 16px;
  font-weight: 400;
  color: #999999;
`;

export const PriceDefault = styled.Text`
margin: 4px;
font-size: 16px;
font-weight: 700;
color: #373737;
`;

export const Footer = styled.View`
width: 128px;
margin: 4px 0;
`;

export const Tag = styled.Text`
background-color: #f0fffe;
border-radius: 8px;
font-size: 14px;
font-weight: 600;
color: #16bbb0;
padding: 4px 8px 4px;
`;