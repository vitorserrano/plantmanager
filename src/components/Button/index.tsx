import React, { ComponentProps } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';

type ButtonProps = ComponentProps<typeof Container> &
  TouchableOpacityProps & {
    children: string;
  };

export const Button = ({ children, ...rest }: ButtonProps): JSX.Element => (
  <Container {...rest}>
    <Title>{children}</Title>
  </Container>
);
