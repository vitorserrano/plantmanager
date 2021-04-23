import styled from 'styled-components/native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

export const Container = styled(RectButton)<RectButtonProps>`
  flex: 1;
  max-width: 45%;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 20px;
  padding: 10px 0;
  align-items: center;
  margin: 10px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.green_dark};
  margin: 16px 0;
`;
