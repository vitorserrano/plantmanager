import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { EnvironmentButton } from '../../components/EnvironmentButton';

import { Header } from '../../components/Header';
import { PlantCardPrimary } from '../../components/PlantCardPrimary';
import { Load } from '../../components/Load';

import api from '../../services/api';

import {
  Container,
  HeaderContent,
  Title,
  Subtitle,
  EnvironmentContainer,
  EnvironmentList,
  PlantsCardContainer,
  PlantsCardList,
  LoadIndicator,
} from './styles';

import { EnvironmentsProps } from './types';
import { PlantProps } from '../../libs/storage';

export const PlantSelect = (): JSX.Element => {
  const [environments, setEnvironments] = useState<EnvironmentsProps[]>([]);
  const [environmentsSelected, setEnvironmentsSelected] = useState('all');

  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);

  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);

  const navigation = useNavigation();

  const handleLoadEnvironment = async (): Promise<EnvironmentsProps> => {
    try {
      const { data } = await api.get(
        'plants_environments?_sort=title&order=asc',
      );

      setEnvironments([
        {
          key: 'all',
          title: 'Todos',
        },
        ...data,
      ]);

      return data;
    } catch (error) {
      return error;
    }
  };

  const handleLoadPlants = async (): Promise<void | PlantProps> => {
    try {
      const { data } = await api.get(
        `plants?_sort=name&order=asc&_page=${page}&_limit=8`,
      );

      if (!data) {
        return setLoading(true);
      }

      if (page > 1) {
        setPlants(oldValue => [...oldValue, ...data]);
        setFilteredPlants(oldValue => [...oldValue, ...data]);

        setLoading(false);
        setLoadingMore(false);

        return;
      }

      setPlants(data);
      setFilteredPlants(data);

      setLoading(false);
      setLoadingMore(false);

      return data;
    } catch (error) {
      return error;
    }
  };

  const handleLoadMore = (distance: number): void => {
    if (distance < 1) {
      return;
    }

    setLoadingMore(true);
    setPage(oldValue => oldValue + 1);

    handleLoadPlants();
  };

  const handleEnvironmentSelected = (environment: string): void => {
    setEnvironmentsSelected(environment);

    if (environment === 'all') {
      return setFilteredPlants(plants);
    }

    const filtered = plants.filter(plant =>
      plant.environments.includes(environment),
    );

    return setFilteredPlants(filtered);
  };

  const handlePlantSelect = (plant: PlantProps): void => {
    navigation.navigate('PlantSave', { plant });
  };

  useEffect(() => {
    handleLoadEnvironment();
    handleLoadPlants();
  }, []);

  if (loading) {
    return <Load />;
  }

  return (
    <Container>
      <HeaderContent>
        <Header />

        <Title>Em qual ambiente</Title>
        <Subtitle>você quer colocar sua planta?</Subtitle>
      </HeaderContent>

      <EnvironmentContainer>
        <EnvironmentList
          data={environments}
          keyExtractor={(item: EnvironmentsProps) => String(item.key)}
          renderItem={({ item }) => (
            <EnvironmentButton
              active={item.key === environmentsSelected}
              onPress={() => handleEnvironmentSelected(item.key)}
            >
              {item.title}
            </EnvironmentButton>
          )}
        />
      </EnvironmentContainer>

      <PlantsCardContainer>
        <PlantsCardList
          data={filteredPlants}
          keyExtractor={(item: PlantProps) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardPrimary
              data={item}
              onPress={() => handlePlantSelect(item)}
            />
          )}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) =>
            handleLoadMore(distanceFromEnd)
          }
          ListFooterComponent={loadingMore ? <LoadIndicator /> : <></>}
          ListFooterComponentStyle={{
            marginVertical: loadingMore ? 30 : 0,
          }}
        />
      </PlantsCardContainer>
    </Container>
  );
};
