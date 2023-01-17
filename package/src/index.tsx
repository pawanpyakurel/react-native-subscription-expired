import React, { memo } from 'react';
import { View } from 'react-native';
import type { Style, StyleProps } from './types/genericTypes';
import { isSubscribedFulfilled } from './utils/dateUtils';
import { Header } from './components/Header';
import { Body } from './components/Body';
import { Footer } from './components/Footer';
import { ConditionalRendering } from './components/_common/ConditionalRednderer';
import { styles } from './resource/styles';

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

const MainView = ({
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

export const SubscriptionExpiredView = memo(MainView);
