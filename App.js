import React from 'react';
import { StyleSheet, TouchableOpacity,Image, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardScreen  from './src/screens/OnboardScreen';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import ResetPassword from './src/screens/ResetPassword';
import Dashboard from './src/screens/Dashboard';
import QuickDonate from './src/screens/components/QuickDonate';

import { Partnership, BibleReadingPlan, Profile, Fundwallet} from './src/screens/components';
import { COLORS ,ICONS}  from './src/constants/index';
import Network from './src/screens/Network';

const AppStack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <AppStack.Navigator>
          <AppStack.Screen name="onboarding" component={OnboardScreen}  options={{headerShown: false}}/>
          <AppStack.Screen name="Login"      component={Login}  options={{headerShown: false}}/>
          <AppStack.Screen name="SignUp"     component={SignUp}  options={{headerShown: false}}/>
          <AppStack.Screen name="Reset"      component={ResetPassword}   options={{headerShown: false}}/>
          <AppStack.Screen name="Dashboard"  component={Dashboard}   
                           options={{
                            headerShown: false,  //Set Header Title below this
                            headerRight: ({navigation, route}) => (
                              <TouchableOpacity onPress={() => navigation={navigation}}>
                              <Image 
                                 source={ICONS.settings}
                                 style={{height:40, width:40,borderRadius:25}}
                                 />
                              </TouchableOpacity>
                            ),
                            headerStyle: {
                              backgroundColor: COLORS.primary, //Set Header color
                              borderBottomWidth: 1,
                              borderColor:"#ffffff"
                            },
                            headerTintColor: '#fff', //Set Header text color
                            headerTitleStyle: {
                              fontWeight: 'bold', //Set Header text style
                            },
                          }}
                          // navigationOptions={ } 
                          />
          <AppStack.Screen name="Quick Donate"  component ={QuickDonate} options={{headerShown: false}} />

          <AppStack.Screen name="Bible Reading Plan" component ={BibleReadingPlan}/>
          <AppStack.Screen name="Partnership"  component ={Partnership}/>
          
          <AppStack.Screen name="Funding Wallet"  component ={Fundwallet} />
          <AppStack.Screen name="Profile"  component ={Profile} />


    </AppStack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({});
