import { getStatusBarHeight as statusBarHeightHelper } from 'react-native-iphone-x-helper';

export const getStatusBarHeight = (): string => {
  return `${statusBarHeightHelper()}px`;
};
