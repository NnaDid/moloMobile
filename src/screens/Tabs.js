import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import  {  
    Home, UtilityBills,  
    BibleReadingPlan, 
    Partnership ,QuickDonate,
    Profile,Fundwallet
} from './components/index';
import Login from '../screens/Login' 
import { ICONS, COLORS,} from '../constants';


const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

const HoemSCreen =({navigation})=>(
    <HomeStack.Navigator >
            <HomeStack.Screen name ="Home" component={Home} options={{headerShown: false}}/>
            <HomeStack.Screen name ="Bible Reading Plan" component={BibleReadingPlan} options={{headerShown: false}}/>
            <HomeStack.Screen name ="Partnership" component={Partnership} options={{headerShown: false}}/>
            <HomeStack.Screen name ="FundWallet" component={Fundwallet} options={{headerShown: true}}/>
            <HomeStack.Screen name ="login" component={Login} options={{headerShown: false}}/>
    </HomeStack.Navigator>
);

const QuickDonationPlus= ({children, onPress})=>(
    <TouchableOpacity
    style ={{
        top:-30,
        alignItems:"center",
        justifyContent:"center",
        ...styles.shadow
    }}
    onPress ={onPress}
    >
        <View
           style ={{
               width:70,
               height:70,
               borderRadius:35,
               backgroundColor:COLORS.GOLD
           }}
        >{children}</View>

    </TouchableOpacity>
);


const Tabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="home"
             screenOptions ={{
                tabBarActiveTintColor: COLORS.DARKERBLUE,
                tabBarInactiveTintColor: 'gray',
                tabBarShowLabel:false,
                tabBarStyle:{
                     position:'absolute',
                     left:5,
                     right:5, 
                     elevation:0,
                     paddingHorizontal:15,
                     height:90,
                     borderTopLeftRadius:25,
                     borderTopRightRadius:25,
                     backgroundColor:'#ffffff',
                     ...styles.shadow
                }
             }}
        >
              <Tab.Screen name ="home" component ={HoemSCreen}  
                          options={{
                              headerShown: false,
                              tabBarIcon:({focused})=>(
                                  <View style={{justifyContent:"center", alignItems:"center",top:10}}>
                                      <Image 
                                      source ={require('../assets/icons/tabicons/home.png')}
                                      resizeMode="contain"
                                      style={{
                                          height:25,
                                          width:25,
                                      }}/>
                                      <Text style ={{ color:focused ? COLORS.DARKERBLUE : COLORS.ash,fontSize:12, fontWeight:"900"}}>Home</Text>
                                  </View>
                              ),
                        }}
             />

              <Tab.Screen name ="Partnership" component ={Partnership}  
                     options={{
                        headerShown: false,
                        tabBarIcon:({focused})=>(
                            <View style={{justifyContent:"center", alignItems:"center",top:10}}>
                                <Image 
                                source ={require('../assets/icons/tabicons/partnership.png')}
                                resizeMode="contain"
                                style={{
                                    height:25,
                                    width:25,
                                }}/>
                                <Text style ={{ color:focused ? COLORS.DARKERBLUE : COLORS.ash,fontSize:12, fontWeight:"900"}}>
                                    Partnership
                                </Text>
                            </View>
                        ),
                  }}
              />


              <Tab.Screen name ="Quick Donation" component ={QuickDonate} 
                          options={{
                               headerShown: false,
                               tabBarIcon:({focused})=>(
                                   <Image 
                                     source ={require('../assets/icons/tabicons/plus.png')}
                                     resizeMode="contain"
                                     style={{
                                         height:50,
                                         width:50,
                                         tintColor:COLORS.primary,
                                         borderRadius:35,
                                         zIndex:4000,
                                         aspectRatio:3/4
                                     }}
                                   />
                               ),
                               tabBarButton:(props)=>(
                                   <QuickDonationPlus {...props}/>
                               )
                        }}  
              />
                 

              <Tab.Screen name ="Bills Payment" component ={UtilityBills} 
                  options={{
                    headerShown: false,
                    tabBarIcon:({focused})=>(
                        <View style={{justifyContent:"center", alignItems:"center",top:10}}>
                            <Image 
                            source ={require('../assets/icons/tabicons/utility.png')}
                            resizeMode="contain"
                            style={{
                                height:25,
                                width:25,
                            }}/>
                            <Text style ={{ color:focused ? COLORS.DARKERBLUE : COLORS.ash,fontSize:12, fontWeight:"900"}}>
                                Utility Bills
                            </Text>
                        </View>
                    ),
              }}
              />

              <Tab.Screen name ="Profile" component ={Profile} 
                  options={{
                    headerShown: false,
                    tabBarIcon:({focused})=>(
                        <View style={{justifyContent:"center", alignItems:"center",top:10}}>
                            <Image 
                            source ={require('../assets/icons/tabicons/user.png')}
                            resizeMode="contain"
                            style={{
                                height:25,
                                width:25,
                                marginRight:4
                            }}/>
                            <Text style ={{ color:focused ? COLORS.DARKERBLUE : COLORS.ash,fontSize:12, fontWeight:"900"}}>
                               Profile
                            </Text>
                        </View>
                    ),
              }}
                 />
        </Tab.Navigator> 
    )
}

export default Tabs;

const styles = StyleSheet.create({
    shadow:{
        shadowColor:COLORS.ash,
        shadowOffset:{
            width:0,
            height:10,
        },
        shadowOpacity:0.25,
        shadowRadius:5,
        elevation:5,
    },
})
