import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { UIActivityIndicator } from 'react-native-indicators';
import { EnvironmentsProps, PlantProps } from './types';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const HeaderContent = styled.View`
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 17px;
  line-height: 20px;
  margin-top: 15px;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const Subtitle = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.text};
`;

export const EnvironmentContainer = styled.View``;

export const EnvironmentList = styled(
  FlatList as new () => FlatList<EnvironmentsProps>,
).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    flexGrow: 1,
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 32,
    paddingRight: 42,
    marginVertical: 32,
  },
})``;

export const PlantsCardContainer = styled.View`
  flex: 1;
  padding: 0 32px;
  justify-content: center;
`;

export const PlantsCardList = styled(
  FlatList as new () => FlatList<PlantProps>,
).attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})``;

export const LoadIndicator = styled(UIActivityIndicator).attrs(({ theme }) => ({
  size: 30,
  color: theme.colors.green,
}))``;
