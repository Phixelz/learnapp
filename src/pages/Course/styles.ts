import styled from "styled-components/native";
import { Check, Star, ShoppingCart, Share2, ArrowLeft,} from "react-native-feather";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const CourseName = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Icons = styled.View`
  flex-direction: row;
`;

export const Wrapper = styled.View`
  padding: 24px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 4px;
`;

export const Description = styled.Text`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.description};
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
  color: ${({ theme }) => theme.colors.subtitle};
`;

export const Avatar = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 50px;
  margin-right: 12px;
`;

export const CourseImage = styled.Image`
  height: ${RFValue(140)}px;
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const RatingsView = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const RatingsNumber = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.attention};
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

export const Checks = styled.View`
  align-items: flex-start;
  flex-direction: row;
`;

export const LearnTo = styled.Text`
  font-size: 15px;
  margin: 0 0 32px 0;
  color: ${({ theme }) => theme.colors.description};
`;

export const Icon = styled(Check)`
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 4px;
`;

export const Ratings = styled(Star)`
  color: ${({ theme }) => theme.colors.attention};
  margin-right: 4px;
`;

export const Arrow = styled(ArrowLeft)`
  color: #373737;
`;

export const Cart = styled(ShoppingCart)`
  color: #373737;
`;

export const Share = styled(Share2)`
  color: #373737;
  margin-right: 24px;
`;

export const DividerFooter = styled.View`
  margin: 0 0 24px 0;
  border-bottom-width: 1px;
  border-color: #dbdbdb;
`;

export const Price = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.title};
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px 16px;
  border-top-width: 1px;
  border-color: #f2f2f2;
`;
