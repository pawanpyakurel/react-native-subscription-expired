import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-subscription-expired' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type SubscriptionExpiredProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'SubscriptionExpiredView';

export const SubscriptionExpiredView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<SubscriptionExpiredProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
