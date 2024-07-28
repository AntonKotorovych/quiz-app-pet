import { extendTheme } from '@chakra-ui/react';
import styles from './styles';
import fonts from './typography/fonts';

const overrides = {
  styles,
  fonts,
};

export const theme = extendTheme(overrides);
