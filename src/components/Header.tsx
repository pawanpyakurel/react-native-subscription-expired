import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { GlobalConstants } from '../constant/GlobalConstatnt';
import { colors } from '../theme/colors';
import type { StyleProps } from '../types/genericTypes';

interface HeaderProps extends StyleProps {}

export const Header = ({ style }: HeaderProps) => (
  <Text style={[styles.heading, style]}>{GlobalConstants.HEADING}</Text>
);

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.darkFaded,
  },
});
