react-native-subscription-expired
=================================

<img src="https://github.com/pawanpyakurel/react-native-subscription-expired/blob/main/resources/screenshoots/defaultView.png" width="250" height="500" />

A simple and easy to use subscription expired dialog for React Native apps.

Installation
------------

You can install the package via npm:

```
npm install react-native-subscription-expired

```

or via yarn:

```
yarn add react-native-subscription-expired

```

Usage
-----
### Wrap your project with `SubscriptionExpired` at the top
```
import React from 'react';
import {RootNavigation} from './navigation/rootNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './navigation/navigationService';

// subscription-expired import
import {SubscriptionExpiredView} from 'react-native-subscription-expired';

const App = () => {

  //app will be validate upto
  const subscriptionValidatonDate = new Date('2023-03-01');

  return (
    <SubscriptionExpiredView validTill={subscriptionValidatonDate}> //subscription-expired wrapping
    
    // your rest code here
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer ref={navigationRef}>
           <RootNavigation />
         </NavigationContainer>
      </GestureHandlerRootView>
    </SubscriptionExpiredView>
  );
};

export default App;

```

Props
-----

| Property  | Type     | #Option    | Default Value |Description |
| :---:     | :---:    | :---:     |:---:          |    :---:   |
| validTill | Date     | Required  | undefined     |            |
| Heading | JSX     |   Optional  |                |



Example
-------

You can find an example of how to use the package in the [example](https://github.com/pawanpyakurel/react-native-subscription-expired/tree/master/example) folder.

Support
-------

Please open an issue if you find any bug or have any feature request.

Contribution
------------

Please feel free to open a pull request if you want to contribute to this project.

Licence
-------

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/pawanpyakurel/react-native-subscription-expired/blob/master/LICENSE) file for details.
