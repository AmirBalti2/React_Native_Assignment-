/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import{Stack} from "./scr/nav.js"
import { Login } from './scr/login.js';
import { Register } from './scr/Register.js';


const App: () => React$Node = () => {

  return (
    <View style={{
      backgroundColor:'#5f9ea0',
      flex:1
     }}>
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login" screenOptions={{
      headerShown:false
    }}>
    <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />    
    </Stack.Navigator>
  </NavigationContainer>
  </View>


);

};

export default App;
