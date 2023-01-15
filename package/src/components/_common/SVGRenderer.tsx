import React from 'react';
import { Insets, TouchableOpacity, View } from 'react-native';
import { GlobalConstants } from '../../constant/GlobalConstatnt';
import type { StyleProps } from '../../types/genericTypes';

interface SVGRendererProps extends StyleProps {
  children?: React.ReactChild;
  onPress?: () => void;
  secondaryIcon?: React.ReactChild;
  showSecondary?: boolean;
  hitSlop?: Insets;
  hideOpacity?: boolean;
}

export const SVGRenderer: React.FC<SVGRendererProps> = ({
  children,
  secondaryIcon,
  showSecondary = false,
  hideOpacity = false,
  ...rest
}) => {
  if (hideOpacity) {
    return (
      <View {...rest}>
        {!!secondaryIcon && showSecondary ? secondaryIcon : children}
      </View>
    );
  }
  return (
    <TouchableOpacity activeOpacity={GlobalConstants.ACTIVE_OPACITY} {...rest}>
      {!!secondaryIcon && showSecondary ? secondaryIcon : children}
    </TouchableOpacity>
  );
};
