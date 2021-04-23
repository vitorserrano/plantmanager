import React from 'react';

import { Button } from '../../components/Button';
import { Container, Content, Emoji, Title, Subtitle, Footer } from './styles';

export const Confirmation = (): JSX.Element => {
  return (
    <Container>
      <Content>
        <Emoji>😄</Emoji>

        <Title>Prontinho</Title>

        <Subtitle>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Subtitle>

        <Footer>
          <Button>Começar</Button>
        </Footer>
      </Content>
    </Container>
  );
};
