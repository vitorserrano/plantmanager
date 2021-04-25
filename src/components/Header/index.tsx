import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Container, Content, Greeting, UserName, Image } from './styles';

import userImg from '../../assets/avatar.png';

export const Header = (): JSX.Element => {
  const [userName, setUserName] = useState<string>();

  const handleLoadStorageUserName = async (): Promise<void> => {
    const storagedUser = await AsyncStorage.getItem('@plantmanager:user');

    return setUserName(storagedUser || '');
  };

  useEffect(() => {
    handleLoadStorageUserName();
  }, [userName]);

  return (
    <Container>
      <Content>
        <Greeting>Olá,</Greeting>
        <UserName>{userName}</UserName>
      </Content>

      <Image source={userImg} />
    </Container>
  );
};
