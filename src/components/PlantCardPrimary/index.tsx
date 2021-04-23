import React from 'react';

import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

import { Container, Title } from './styles';

interface PlantCardPrimaryProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  };
}

export const PlantCardPrimary = ({
  data,
  ...rest
}: PlantCardPrimaryProps): JSX.Element => {
  return (
    <Container {...rest}>
      <SvgFromUri uri={data.photo} width={70} height={70} />

      <Title>{data.name}</Title>
    </Container>
  );
};
