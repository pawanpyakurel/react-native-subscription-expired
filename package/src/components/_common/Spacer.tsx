import React from 'react';
import { View } from 'react-native';
import type { StyleProps } from '../../types/genericTypes';

interface SpacerProps extends StyleProps {
  spacing?: number;
}

export const Spacer = ({ spacing = 0, style }: SpacerProps) => (
  <View style={{ padding: spacing, ...style }} />
);
