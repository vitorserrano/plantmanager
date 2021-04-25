import styled from 'styled-components/native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.colors.background};
  margin-top: ${`${getStatusBarHeight()}px`};
`;

export const Content = styled.View``;

export const Greeting = styled.Text`
  font-size: 32px;
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.heading};
`;

export const UserName = styled.Text`
  font-size: 32px;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.heading};
  line-height: 40px;
  text-transform: capitalize;
`;

export const Image = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
`;
