import { StatusBar, Platform, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === 'android'
    ? `${StatusBar.currentHeight}px`
    : 0};
`;

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-top: 38px;
  line-height: 34px;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: ${`${Dimensions.get('window').width * 0.7}px`};
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  text-align: center;
  padding: 0 20px;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.text};
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: ${({ theme }) => theme.colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  height: 56px;
  width: 56px;
`;

export const ButtonIcon = styled(Feather).attrs(({ theme }) => ({
  name: 'chevron-right',
  color: theme.colors.white,
  size: 32,
}))``;
