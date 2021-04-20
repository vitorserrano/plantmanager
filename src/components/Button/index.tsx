import React from 'react';
import { Text, TouchableHighlightBase } from 'react-native';

import { Container } from './styles';

interface ButtonProps {
  title: string;
}

export const Button = ({ title }: ButtonProps) => {
  return (
    <Container>
      <Text>
        {title}
      </Text>
    </Container>
  );
}

