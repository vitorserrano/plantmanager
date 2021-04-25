import React, { useState } from 'react';

import { Keyboard, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  const handleSubmit = async (): Promise<void> => {
    try {
      if (name) {
        await AsyncStorage.setItem('@plantmanager:user', name);

        navigation.navigate('Confirmation', {
          title: 'Prontinho',
          subtitle:
            'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
          buttonTitle: 'Começar',
          icon: 'smile',
          nextScreen: 'PlantSelect',
        });
      }
    } catch (error) {
      Alert.alert('Não foi possível salver seu nome.');
    }
  };

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
