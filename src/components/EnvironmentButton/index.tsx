import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface EnvironmentButtonProps extends RectButtonProps {
  active?: boolean;
  children: string;
}

export const EnvironmentButton = ({
  active,
  children,
  ...rest
}: EnvironmentButtonProps): JSX.Element => {
  return (
    <Container isActive={active} {...rest}>
      <Title isActive={active}>{children}</Title>
    </Container>
  );
};

EnvironmentButton.defaultProps = {
  active: false,
};
