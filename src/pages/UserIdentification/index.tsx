import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button';

import {
  Wrapper,
  Container,
  HiddenButton,
  Content,
  Form,
  Header,
  Emoji,
  Title,
  Input,
  Footer,
} from './styles';

export const UserIdentification = (): JSX.Element => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  const navigation = useNavigation();

  const handleInputBlur = (): void => {
    setIsFocused(false);
    setIsFilled(!!name);
  };

  const handleInputFocus = (): void => setIsFocused(true);

  const handleInputChange = (value: string): void => {
    setIsFilled(!!value);
    setName(value);
  };

  const handleSubmit = (): void => navigation.navigate('Confirmation');

  return (
    <Wrapper>
      <Container>
        <HiddenButton onPress={Keyboard.dismiss}>
          <Content>
            <Form>
              <Header>
                <Emoji>{isFilled ? '😄' : '😀'}</Emoji>
                <Title>
                  Como podemos {'\n'}
                  chamar voce?
                </Title>
              </Header>

              <Input
                placeholder="Digite um nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
                isFocused={isFocused}
                isFilled={isFilled}
              />

              <Footer>
                <Button onPress={handleSubmit} disabled={!isFilled}>
                  Confirmar
                </Button>
              </Footer>
            </Form>
          </Content>
        </HiddenButton>
      </Container>
    </Wrapper>
  );
};
