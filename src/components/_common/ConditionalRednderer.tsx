import React from 'react';

type ConditionalRenderingProps = {
  content?: React.ReactNode;
  children?: React.ReactChild;
};

export const ConditionalRendering = ({
  content,
  children,
}: ConditionalRenderingProps) => {
  if (!!content) {
    return <>{content}</>;
  }
  return <>{children}</>;
};
