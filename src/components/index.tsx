import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { GlobalStyle, screenHeight, screenWidth } from '../theme/GlobalStyles';
import { colors } from '../theme/colors';
import type { Style, StyleProps } from '../types/genericTypes';
import { isSubscribedFulfilled } from '../utils/dateUtils';
import { Header } from './Header';
import { Body } from './Body';
import { Footer } from './Footer';
import { ConditionalRendering } from './_common/ConditionalRednderer';

type itemStyle = {
  container?: Style;
  heading?: Style;
  body?: Style;
  footerHeadingText?: Style;
  footerContetntText?: Style;
  footer?: Style;
};
interface MainViewProps extends StyleProps {
  children?: React.ReactNode;
  Heading?: React.ReactNode;
  Body?: React.ReactNode;
  Footer?: React.ReactNode;
  itemStyle?: itemStyle;
  validTill: Date;
}

export const MainView = ({
  children,
  style,
  itemStyle = {
    container: {},
    footerContetntText: {},
    footerHeadingText: {},
    heading: {},
    body: {},
    footer: {},
  },
  validTill,
  Body: B,
  Footer: F,
  Heading: H,
}: MainViewProps) => {
  if (!isSubscribedFulfilled({ activationDate: validTill })) {
    return <>{children}</>;
  }
  return (
    <View style={[styles.root, style]}>
      <View style={[styles.container, itemStyle?.container]}>
        <ConditionalRendering content={H}>
          <Header style={itemStyle?.heading} />
        </ConditionalRendering>
        <ConditionalRendering content={B}>
          <Body style={itemStyle?.body} />
        </ConditionalRendering>
        <ConditionalRendering content={F}>
          <Footer
            style={itemStyle?.footer}
            footerContetntText={itemStyle?.footerContetntText}
            footerHeadingText={itemStyle?.footerHeadingText}
          />
        </ConditionalRendering>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
