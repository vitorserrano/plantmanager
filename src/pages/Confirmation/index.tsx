import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Button } from '../../components/Button';
import { Container, Content, Emoji, Title, Subtitle, Footer } from './styles';

interface ParamsProps {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug';
  nextScreen: string;
}

const emojis = {
  hug: '🤗',
  smile: '😄',
};

export const Confirmation = (): JSX.Element => {
  const navigation = useNavigation();
  const route = useRoute();

  const {
    title,
    subtitle,
    buttonTitle,
    icon,
    nextScreen,
  } = route.params as ParamsProps;

  const handleMoveOn = (): void => navigation.navigate(nextScreen);

  return (
    <Container>
      <Content>
        <Emoji>{emojis[icon]}</Emoji>

        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>

        <Footer>
          <Button onPress={handleMoveOn}>{buttonTitle}</Button>
        </Footer>
      </Content>
    </Container>
  );
};
