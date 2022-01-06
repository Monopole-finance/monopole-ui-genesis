import { extendTheme } from '@chakra-ui/react';
import { globalStyles } from './styles';
import { breakpoints } from './foundations/breakpoints';
import { buttonStyles } from './components/button';
import { ThemeColor } from './foundations/theme';

export default extendTheme(
  { breakpoints }, // Breakpoints
  globalStyles,
  buttonStyles, // Button styles
  ThemeColor,
);
