import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { SubscriptionExpiredView } from 'react-native-subscription-expired';

export default function App() {
  const validTill = new Date('2022-10-15');
  return (
    <View style={styles.container}>
      <SubscriptionExpiredView
        validTill={validTill}
        // itemStyle={{ footer: { backgroundColor: 'red' } }}
        // Heading={<Text>dadfafd</Text>}
      >
        <Text>Our Content</Text>
      </SubscriptionExpiredView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
