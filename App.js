import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardScreen  from './src/screens/OnboardScreen';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import ResetPassword from './src/screens/ResetPassword';
import Dashboard from './src/screens/Dashboard';

const AppStack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <AppStack.Navigator>
          <AppStack.Screen name="onboarding" component={OnboardScreen}  options={{headerShown: false}}/>
          <AppStack.Screen name="Login"  component ={Login}  options={{headerShown: false}}/>
          <AppStack.Screen name="SignUp" component ={SignUp}  options={{headerShown: false}}/>
          <AppStack.Screen name="Reset"  component ={ResetPassword}   options={{headerShown: false}}/>
          <AppStack.Screen name="Dashboard"  component ={Dashboard} />
    </AppStack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({});
