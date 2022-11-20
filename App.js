/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginStack from './src/presentation/navigation/stack/LoginStack';
import linking from './src/presentation/navigation/linking/Linking';

const App = () => {
  return (
    <NavigationContainer linking={linking} >
      <LoginStack/>
    </NavigationContainer>
  );
};

export default App;
