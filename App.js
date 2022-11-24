/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginStack from './src/presentation/navigation/stack/LoginStack';
import linking from './src/presentation/navigation/linking/Linking';
import { BLACK_1 } from './src/presentation/styles/Colors'

const App = () => {
  return (
    <NavigationContainer linking={linking} >
      <StatusBar barStyle={'light-content'} backgroundColor={BLACK_1} />
      <LoginStack/>
    </NavigationContainer>
  );
};

export default App;
