import { sharedColors, lightColors, darkColors } from './colors';
import { margins } from './margins';

export const lightTheme = {
  colors: {
    ...sharedColors,
    ...lightColors,
  },
  margins: margins,
} as const;

export const darkTheme = {
  colors: {
    ...sharedColors,
    ...darkColors,
  },
  margins: margins,
} as const;
