import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';

import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';

import { appTheme } from './src/styles/theme';
import { colors } from './src/styles/theme/colors';

import Routes from './src/routes';

const App = (): JSX.Element => {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={appTheme}>
      <StatusBar
        backgroundColor={colors.background}
        barStyle="dark-content"
        translucent
      />

      <Routes />
    </ThemeProvider>
  );
};

export default App;
