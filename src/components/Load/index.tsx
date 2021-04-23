import React from 'react';
import loadAnimation from '../../assets/load.json';

import { Container, Animation } from './styles';

export const Load = (): JSX.Element => {
  return (
    <Container>
      <Animation source={loadAnimation} autoPlay loop />
    </Container>
  );
};
