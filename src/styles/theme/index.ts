import { extendTheme } from '@chakra-ui/react';
import styles from './styles';
import fonts from './typography/fonts';
import radii from './foundations/borders/radii';

export const theme = extendTheme({ styles, fonts, radii });
