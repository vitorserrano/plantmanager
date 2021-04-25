import React, { useState } from 'react';

import { Platform, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import DateTimePicker, { Event } from '@react-native-community/datetimepicker';

import { isBefore, format } from 'date-fns';
import { SvgFromUri } from 'react-native-svg';
import { Button } from '../../components/Button';

import {
  Container,
  PlantInfo,
  PlantName,
  PlantAbout,
  Controller,
  TipContainer,
  TipImage,
  TipText,
  AlertLabel,
  DateTimePickerButton,
  DateTimePickerText,
} from './styles';

import waterdropImg from '../../assets/waterdrop.png';
import { PlantProps, plantSave } from '../../libs/storage';

interface ParamsProps {
  plant: PlantProps;
}

export const PlantSave = (): JSX.Element => {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

  const navigation = useNavigation();
  const route = useRoute();

  const { plant } = route.params as ParamsProps;

  const handleChangeDateTime = (
    event: Event,
    dateTime: Date | undefined,
  ): void => {
    if (Platform.OS === 'android') {
      setShowDatePicker(oldState => !oldState);
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());
      return Alert.alert('Escolha uma hora no futuro!');
    }

    if (dateTime) {
      setSelectedDateTime(dateTime);
    }
  };

  const handleSave = async (): Promise<void> => {
    try {
      await plantSave({
        ...plant,
        dateTimeNotification: selectedDateTime,
      });

      navigation.navigate('Confirmation', {
        title: 'Tudo certo',
        subtitle:
          'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com muito cuidado.',
        buttonTitle: 'Muito obrigado :D',
        icon: 'hug',
        nextScreen: 'MyPlants',
      });
    } catch {
      Alert.alert('Não foi possível salvar.');
    }
  };

  const handleOpenDateTimePickerForAndroid = (): void =>
    setShowDatePicker(oldState => !oldState);

  return (
    <Container>
      <PlantInfo>
        <SvgFromUri uri={plant.photo} width={150} height={150} />

        <PlantName>{plant.name}</PlantName>

        <PlantAbout>{plant.about}</PlantAbout>
      </PlantInfo>

      <Controller>
        <TipContainer>
          <TipImage source={waterdropImg} />

          <TipText>{plant.water_tips}</TipText>
        </TipContainer>

        <AlertLabel>Escolha o melhor horário para ser lembrado</AlertLabel>

        {showDatePicker && (
          <DateTimePicker
            value={selectedDateTime}
            mode="time"
            display="spinner"
            onChange={handleChangeDateTime}
          />
        )}

        {Platform.OS === 'android' && (
          <DateTimePickerButton onPress={handleOpenDateTimePickerForAndroid}>
            <DateTimePickerText>
              {`Mudar ${format(selectedDateTime, 'HH:mm')}`}
            </DateTimePickerText>
          </DateTimePickerButton>
        )}

        <Button onPress={handleSave}>Cadastrar Planta</Button>
      </Controller>
    </Container>
  );
};
