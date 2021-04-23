import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px;
`;

export const Emoji = styled.Text`
  font-size: 78px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.heading};
  text-align: center;
  line-height: 38px;
  margin-top: 15px;
`;

export const Subtitle = styled.Text`
  font-size: 17px;
  text-align: center;
  padding: 10px 0;
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.heading};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 0 50px;
  margin-top: 20px;
`;
