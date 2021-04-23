import styled, { css } from 'styled-components/native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

interface ContainerProps extends RectButtonProps {
  isActive?: boolean;
}

interface TitleProps {
  isActive?: boolean;
}

export const Container = styled(RectButton)<ContainerProps>`
  width: 76px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin: 0 5px;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.green_light : theme.colors.shape};
`;

export const Title = styled.Text<TitleProps>`
  ${({ theme, isActive }) =>
    isActive &&
    css`
      font-family: ${theme.fonts.heading};
      color: ${theme.colors.green_dark};
    `}

  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.heading};
`;
