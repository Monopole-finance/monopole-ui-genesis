import { mode } from '@chakra-ui/theme-tools';

export const globalStyles = {
  colors: {
    gray: {
      700: '#1f2733',
    },
    royal: '#000126',
  },
  styles: {
    global: props => ({
      body: {
        bg: mode('gray.50', 'royal')(props),
        fontFamily: 'DM Sans',
      },
      html: {
        fontFamily: 'DM Sans',
      },
    }),
  },
};
