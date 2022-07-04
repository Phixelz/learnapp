import styled from "styled-components/native";
import { Check, Star } from "react-native-feather";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
flex: 1;
  background-color: #ffffff;
`;

export const Header = styled.View`
`;

export const Wrapper = styled.View`
  padding: 24px;
`;

export const Title = styled.Text`
  font-size: 17px;
  font-weight: 700;
  color: #373737;
  margin-bottom: 4px;
`;

export const Description = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: #999999;
  margin-bottom: 24px;
`;

export const Instructor = styled.View`
  margin: 16px 0 0 0;
  flex-direction: row;
  align-items: center;
`;

export const InstructorName = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: #999999;
`;

export const SubTitle = styled.Text`
  font-size: 15px;
  font-weight: 400;
  color: #999999;
`;

export const Avatar = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 50px;
  margin: 0 12px 0 0;
`;

export const CourseImage = styled.Image`
  height: ${RFValue(140)}px;
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const RatingsView = styled.View`
  margin-top: 8px;
  align-items: center;
  flex-direction: row;
`;

export const RatingsNumber = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #fbbc05;
`;

export const Divider = styled.View`
  margin: 24px 0 24px 0;
  border-bottom-width: 1px;
  border-color: #dbdbdb;
`;

export const CourseTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #373737;
  margin-bottom: 4px;
`;

export const Price = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #373737;
`;

export const Checks = styled.View`
align-items: flex-start;
flex-direction: row;
`;

export const LearnTo = styled.Text`
  font-size: 15px;
  margin: 0 0 32px 0;
  color: #999999;
`;

export const Icon = styled(Check)`
  font-size: ${RFValue(24)}px;
  color: #16bbb0;
  margin-right: 4px;
`;

export const Ratings = styled(Star)`
  color: #fbbc05;
  margin-right: 4px;
`;

export const DividerFooter = styled.View`
  margin: 0 0 24px 0;
  border-bottom-width: 1px;
  border-color: #dbdbdb;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px 16px;
  border-top-width: 1px;
  border-color: #f2f2f2;
`;
