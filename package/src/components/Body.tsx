import React from 'react';
import { Image, StyleSheet } from 'react-native';
import type { StyleProps } from '../types/genericTypes';
import images from '../resource/images';

interface BodyProps extends StyleProps {}

export const Body = ({}: BodyProps) => (
  <Image
    source={images.timerPng}
    style={[styles.mainImage]}
    resizeMode="contain"
  />
);

const styles = StyleSheet.create({
  mainImage: {
    height: 200,
    width: 200,
  },
});
