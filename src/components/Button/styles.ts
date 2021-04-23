import styled from 'styled-components/native';
import { TouchableOpacityProps } from 'react-native';

export const Container = styled.TouchableOpacity.attrs<TouchableOpacityProps>({
  activeOpacity: 0.7,
})`
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  background-color: ${({ theme }) => theme.colors.green};
  height: 56px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.heading};
`;
