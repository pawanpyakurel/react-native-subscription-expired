import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GlobalConstants } from '../constant/GlobalConstatnt';
import { colors } from '../theme/colors';
import type { Style, StyleProps } from '../types/genericTypes';
import { Spacer } from './_common/Spacer';

interface FooterProps extends StyleProps {
  footerHeadingText?: Style;
  footerContetntText?: Style;
}

export const Footer = ({
  style,
  footerContetntText,
  footerHeadingText,
}: FooterProps) => (
  <View style={style}>
    <Text style={[styles.footerContent, footerHeadingText]}>
      {GlobalConstants.FOOTER_CONTET}
    </Text>
    <Spacer spacing={4} />
    <Text style={[styles.footer, footerContetntText]}>
      {GlobalConstants.FOOTER}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  footer: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  footerContent: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.light,
  },
});
