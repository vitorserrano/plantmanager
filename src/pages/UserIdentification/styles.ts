import { Platform, TouchableWithoutFeedbackProps } from 'react-native';
import styled from 'styled-components/native';

interface InputProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'android' ? 'height' : 'padding',
})`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const HiddenButton = styled.TouchableWithoutFeedback<TouchableWithoutFeedbackProps>``;

export const Content = styled.View`
  flex: 1;
  width: 100%;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 54px;
`;

export const Header = styled.View`
  align-items: center;
`;

export const Emoji = styled.Text`
  font-size: 44px;
`;

export const Title = styled.Text`
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.heading};
  margin-top: 20px;
`;

export const Input = styled.TextInput<InputProps>`
  border-color: ${({ theme, isFocused, isFilled }) =>
    isFocused || isFilled ? theme.colors.green : theme.colors.gray};
  border-bottom-width: 1px;
  color: ${({ theme }) => theme.colors.heading};
  width: 100%;
  margin-top: 50px;
  padding: 10px;
  text-align: center;
  font-size: 18px;
`;

export const Footer = styled.View`
  width: 100%;
  margin-top: 40px;
  padding: 0 20px;
`;
