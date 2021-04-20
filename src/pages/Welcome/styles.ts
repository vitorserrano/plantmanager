import { StatusBar, Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding-top: ${Platform.OS === 'android'
    ? `${StatusBar.currentHeight}px`
    : 0};
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-top: 38px;
  color: ${({ theme }) => theme.colors.heading};
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  text-align: center;
  padding: 0 20px;
  color: ${({ theme }) => theme.colors.heading};
`;
