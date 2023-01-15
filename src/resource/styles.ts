import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { GlobalStyle, screenHeight, screenWidth } from '../theme/GlobalStyles';

export const styles = StyleSheet.create({
  root: {
    height: screenHeight,
    width: screenWidth,
    ...GlobalStyle.container,
    backgroundColor: colors.primaryFaded,
    padding: 30,
  },
  container: {
    ...GlobalStyle.parentSize,
    ...GlobalStyle.radiusTriple,
    height: screenHeight / 1.5,
    padding: 16,
    backgroundColor: colors.secondary,
    ...GlobalStyle.alignCenter,
    ...GlobalStyle.justifySpaceBetween,
  },
});
