import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button';
import { Container, Content, Emoji, Title, Subtitle, Footer } from './styles';

export const Confirmation = (): JSX.Element => {
  const navigation = useNavigation();

  const handleNavigateToPlantSelect = (): void =>
    navigation.navigate('PlantSelect');

  return (
    <Container>
      <Content>
        <Emoji>😄</Emoji>

        <Title>Prontinho</Title>

        <Subtitle>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Subtitle>

        <Footer>
          <Button onPress={handleNavigateToPlantSelect}>Começar</Button>
        </Footer>
      </Content>
    </Container>
  );
};
