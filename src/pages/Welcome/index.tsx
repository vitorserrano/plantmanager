import React from 'react';

import { useNavigation } from '@react-navigation/native';

import {
  Wrapper,
  Container,
  Title,
  Image,
  Subtitle,
  Button,
  ButtonIcon,
} from './styles';

import wateringImg from '../../assets/watering.png';

export const Welcome = (): JSX.Element => {
  const navigation = useNavigation();

  const handleNavigateToUserIndentification = (): void =>
    navigation.navigate('UserIndentification');

  return (
    <Wrapper>
      <Container>
        <Title>
          Gerencie {'\n'} suas plantas de {'\n'} forma fácil
        </Title>

        <Image source={wateringImg} />

        <Subtitle>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Subtitle>

        <Button onPress={handleNavigateToUserIndentification}>
          <ButtonIcon />
        </Button>
      </Container>
    </Wrapper>
  );
};
