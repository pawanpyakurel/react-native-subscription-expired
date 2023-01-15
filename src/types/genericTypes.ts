import type { StyleProp, ViewStyle } from 'react-native';

export interface StyleProps {
  style?:
    | StyleProp<ViewStyle>
    | Array<StyleProp<ViewStyle>>
    | { [key: string]: string | number | React.FC<any> }
    | any;
}

export type Style = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
