import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
              <Tab.Screen />
        </Tab.Navigator> 
    )
}

export default Tabs;

const styles = StyleSheet.create({})
