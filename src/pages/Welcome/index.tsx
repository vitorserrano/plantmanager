import React from 'react';
import { View, Text, Image } from 'react-native';

import { Button } from '../../components/Button';
import { Container, Title, Subtitle } from './styles';

import wateringImg from '../../assets/watering.png';

export const Welcome = () => {
  return (
    <Container>
      <Title>Gerencie {'\n'} suas plantas {'\n'} de forma fácil</Title>

      <Image source={wateringImg} />

      <Subtitle>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Subtitle>

      <Button title="Avançar" />
    </Container>
  );
};

