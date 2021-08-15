import React ,{useEffect} from 'react'
import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native';
import { ApplicationProvider,IconRegistry,Button, Icon, Layout, Card} from '@ui-kitten/components'; 
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import {COLORS} from '../../constants/index'
import AsyncStorage from '@react-native-community/async-storage';

const MenuEllipsis = (props) => (
    <Icon {...props} name='more-horizontal-outline'/>
  );

const Home = ({navigation}) => {
    const  [userData, setUserData] = React.useState({});
    const  [userBal, setUserBal]   = React.useState({});

   useEffect(() => {
    AsyncStorage.getItem('MOLO_USER').then((response)=>{
        if(response !== null || response!== undefined){
            const user = JSON.parse(response); 
            setUserData(user); 
        }
    }); 
   }, [userData,navigation]) ;


   useEffect(() => {
    AsyncStorage.getItem('MOLO_USER_WALLET').then((response)=>{
        if(response !== null || response!== undefined){
            const userBalance = JSON.parse(response); 
            setUserBal(userBalance); 
        } 
    });
   }, [navigation,userBal]);


   const logout = ()=>{ 
        AsyncStorage.removeItem('MOLO_USER').then((val)=>{
             navigation.navigate('login'); 
        });
    };

const logoutIcon = (props) => ( <Icon onPress ={logout} {...props} name='power-outline'/>);

    return (
        <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
             <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', width:'95%', position: 'relative', top: 4,alignItems: 'center'}}>
                 <Card style={{ backgroundColor: 'transparent',width:"90%", borderWidth:0}}> 
                         <Text style={{fontSize:18,fontWeight:"bold"}}>{userData.name}</Text>
                 </Card>
                <Button style ={{
                                boderRadius:40, width:30, height:30, borderWidth:0,justifyContent: 'center',
                                 alignItems: 'center',backgroundColor:COLORS.primary
                             }} accessoryRight={logoutIcon}
                        onPress={()=>{navigation.navigate('Login')}}
                />         
            </Layout>

                <Layout style={{ flex:1,justifyContent:"center",alignItems:'center', backgroundColor:COLORS.primary}}>

                    <Layout style={{...styles.Card,height:90}}> 
                         <Layout style={styles.walletMenu}>
                            <Text style ={{fontSize:18,fontWeight:'bold'}}>Wallet Ballance</Text>
                            <Button onPress={()=>{navigation.navigate("FundWallet")}} accessoryRight={MenuEllipsis} style={styles.fundWalletBtn} />
                         </Layout>
                         <Layout style={styles.walletBalance}>
                             <Text style ={styles.walletBalanceText}> 
                                 {'\u20A6'}{!userBal && 0}
                            </Text>
                        </Layout>   
                                              
                   </Layout>

                   <Layout style={{...styles.Exc_card,marginVertical:15}}>
                        <Card style ={{width:"48%",margin:2, backgroundColor:'transparent',borderWidth:2,borderRadius:18}}>
                            <Image source={require('../../assets/icons/wallet.png')} style={{height:60,width:60}}/>
                            <TouchableOpacity onPress={()=>{navigation.navigate('Bible Reading Plan')}}>
                                 <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                                        <Text>Reading Plans</Text>
                                        <Image source={require('../../assets/icons/right_arrow.png')} style={{height:20,width:20,marginLeft:4}}/>
                                </View>
                            </TouchableOpacity>
                        </Card>

                        <Card style ={{width:"48%",margin:2, backgroundColor:'transparent',borderWidth:2,borderRadius:18}}>
                            <Image source={require('../../assets/icons/user.png')} style={{height:60,width:60}}/>
                            <TouchableOpacity  onPress={()=>{navigation.navigate('Partnership')}} >
                                <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                                    <Text>Partnership</Text>
                                    <Image source={require('../../assets/icons/right_arrow.png')} style={{height:20,width:20,marginLeft:4}}/>
                                </View>                                
                            </TouchableOpacity>
                        </Card>
                   </Layout>

                 <Layout style={{marginBottom:55,...styles.Card,height:90,}}>
                        <Text style={{color:COLORS.primary,fontWeight:'bold',fontSize:19}}>Scripture of the day!</Text>
                        <Text style={{color:COLORS.paleGreen,fontWeight:'bold',fontSize:13}}>(1 year bible reading plan)</Text>
                        <Text>1. In the begining, God created heaves and the earth</Text>
                        <View style ={{flexDirection:'row',justifyContent:'space-between',marginVertical:8}}>
                            <Text>Gen 1:1</Text>
                            <Text>NKJV</Text>
                        </View>
                 </Layout>



                </Layout>
        </ApplicationProvider>
        </>
    )
}

export default Home;

const styles = StyleSheet.create({
     Card:{
        flex:0.25,
        width:"90%",
        backgroundColor:"#ffffff", 
        padding:15,  
        borderRadius:18,
        marginVertical:1,
    },
    Exc_card:{
        flex:0.28,
        flexDirection:'row',
        justifyContent:'space-between',
        width:"90%",
        backgroundColor:"transparent",
    },
    addToCArd:{
        marginBottom:25,
    },
    walletMenu:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    fundWalletBtn:{
        backgroundColor:COLORS.GOLD,
        borderRadius:50,
        width:40,
        height:40,
        borderColor:COLORS.GOLD,
        fontSize:18,
        fontWeight:'900'
    },
    walletBalance:{
       justifyContent:'center',
       alignItems:'center',
    },
    walletBalanceText:{
        fontSize:34,
        fontWeight:'bold', 
    },
})
