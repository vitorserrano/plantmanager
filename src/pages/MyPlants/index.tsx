import React, { useEffect, useState } from 'react';

import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';

import { Header } from '../../components/Header';
import { PlantCardSecondary } from '../../components/PlantCardSecondary';

import {
  Container,
  SpotLight,
  SpotLightImage,
  SpotLightText,
  Plants,
  PlantsTitle,
  PlantsList,
} from './styles';
import waterdropImg from '../../assets/waterdrop.png';
import { loadPlant, PlantProps } from '../../libs/storage';

export const MyPlants = (): JSX.Element => {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [nextWatered, setNextWatered] = useState<string>('');

  const [loading, setLoading] = useState(true);

  const handleLoadStorageData = async (): Promise<void> => {
    const plantsStoraged = await loadPlant();

    const nextTime = formatDistance(
      new Date(plantsStoraged[0].dateTimeNotification).getTime(),
      new Date().getTime(),
      {
        locale: pt,
      },
    );

    setNextWatered(`Regue sua ${plantsStoraged[0].name} daqui a ${nextTime}`);

    setMyPlants(plantsStoraged);
    setLoading(false);
  };

  useEffect(() => {
    handleLoadStorageData();
  }, []);

  return (
    <Container>
      <Header />

      <SpotLight>
        <SpotLightImage source={waterdropImg} />
        <SpotLightText>{nextWatered}</SpotLightText>
      </SpotLight>

      <Plants>
        <PlantsTitle>Próximas regadas</PlantsTitle>
        <PlantsList
          data={myPlants}
          keyExtractor={(item: PlantProps) => item.id}
          renderItem={({ item }) => <PlantCardSecondary data={item} />}
        />
      </Plants>
    </Container>
  );
};
