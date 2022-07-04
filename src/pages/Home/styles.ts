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
  justify-content: space-between ;
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

export const HorizontalCards = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
  horizontal: true,
})`
`;

export const Section = styled.KeyboardAvoidingView`
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 12px;
`;

export const SectionName = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #373737;
`;

export const ViewAll = styled.Text`
  align-self: flex-end;
  font-size: 16px;
  font-weight: 500;
  color: #16bbb0;
`;
