import React from 'react';

import { Container, Content, Greeting, UserName, Image } from './styles';

import userImg from '../../assets/avatar.png';

export const Header = (): JSX.Element => {
  return (
    <Container>
      <Content>
        <Greeting>Olá,</Greeting>
        <UserName>Vitor</UserName>
      </Content>

      <Image source={userImg} />
    </Container>
  );
};
