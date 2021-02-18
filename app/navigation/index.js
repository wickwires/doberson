import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/Login';
import Home from '../screens/Home';
import SelectedMessage from '../screens/SelectedMessage';

const Stack = createStackNavigator();

const NavigationRoot = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Selected Message" component={SelectedMessage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationRoot;
