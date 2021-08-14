import React ,{ useState } from 'react'
import { StyleSheet,StatusBar} from 'react-native';
import { ICONS, COLORS, Logo} from '../constants';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './Tabs';


const Dashboard = () => {
    return (
           <NavigationContainer independent={true}>
                     <StatusBar
                        animated={true}
                        backgroundColor={COLORS.primary}
                        networkActivityIndicatorVisible={true}
                        StatusBarStyle="light-content"
                      />
               <Tabs />
          </NavigationContainer>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
})
