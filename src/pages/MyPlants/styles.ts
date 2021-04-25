import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { PlantProps } from '../../libs/storage';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 50px 30px 0 30px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const SpotLight = styled.View`
  background-color: ${({ theme }) => theme.colors.blue_light};
  padding: 0 20px;
  border-radius: 20px;
  height: 110px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SpotLightImage = styled.Image`
  width: 60px;
  height: 60px;
`;

export const SpotLightText = styled.Text`
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.blue};
  padding: 0 20px;
`;

export const Plants = styled.View`
  flex: 1;
  width: 100%;
`;

export const PlantsTitle = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.heading};
  margin: 20px 0;
`;

export const PlantsList = styled(
  FlatList as new () => FlatList<PlantProps>,
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flexGrow: 1,
  },
})``;
