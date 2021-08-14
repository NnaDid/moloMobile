import React from 'react'
import { StyleSheet, Text, View ,Image, TouchableOpacity,ImageBackground} from 'react-native';
import { ApplicationProvider,IconRegistry,Button, Icon, Layout, Card} from '@ui-kitten/components'; 
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import {COLORS} from '../../constants/index'



const UtilityBills = ({navigation}) => {
    return (
        <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
            <ImageBackground
                style={ styles.imgBackground } 
                resizeMode='cover' 
                source={require('../../assets/splash.png')}>
                  {/*  Row One */}
                   <Layout style={styles.Exc_card}>
                        <Card style ={{width:"48%",margin:2, backgroundColor:COLORS.primary,borderWidth:2,borderRadius:18,alignItems:"center",justifyContent:'center'}}>
                            <Image source={require('../../assets/icons/tabicons/bulb.png')} style={{height:60,width:60,borderRadius:8}}/>
                            <TouchableOpacity onPress={()=>{navigation.navigate('Bible Reading Plan')}}>
                                 <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                                        <Text style={{color:"#ffffff", fontWeight:'bold', fontSize:16}}>Electricity</Text>
                                        <Image source={require('../../assets/icons/right_arrow.png')} style={{height:20,width:20,marginLeft:4}}/>
                                </View>
                            </TouchableOpacity>
                        </Card>

                        <Card style ={{width:"48%",margin:2, backgroundColor:COLORS.ash,borderWidth:2,borderRadius:18,alignItems:"center",justifyContent:'center'}}>
                            <Image source={require('../../assets/icons/tabicons/tv.png')} style={{height:60,width:60,borderRadius:8}}/>
                            <TouchableOpacity  onPress={()=>{navigation.navigate('Partnership')}}>
                                <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                                    <Text  style={{color:COLORS.primary, fontWeight:'bold', fontSize:16}}>Cable TV</Text>
                                    <Image source={require('../../assets/icons/right_arrow.png')} style={{height:20,width:20,marginLeft:4}}/>
                                </View>                                
                            </TouchableOpacity>
                        </Card>
                   </Layout>
                 {/*  Row one Ends */}

                {/* ROW TWO BEGINS */}
                <Layout style={styles.Exc_card}>
                        <Card style ={{width:"48%",margin:2, backgroundColor:COLORS.ash,borderWidth:2,borderRadius:18,alignItems:"center",justifyContent:'center'}}>
                            <Image source={require('../../assets/icons/tabicons/phone.png')} style={{height:60,width:60,borderRadius:8}}/>
                            <TouchableOpacity onPress={()=>{navigation.navigate('Bible Reading Plan')}}>
                                 <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                                        <Text  style={{color:COLORS.primary, fontWeight:'bold', fontSize:16}}>Mobile Data</Text>
                                        <Image source={require('../../assets/icons/right_arrow.png')} style={{height:20,width:20,marginLeft:4}}/>
                                </View>
                            </TouchableOpacity>
                        </Card>

                        <Card style ={{width:"48%",margin:2, backgroundColor:COLORS.primary,borderWidth:2,borderRadius:18,alignItems:"center",justifyContent:'center'}}>
                            <Image source={require('../../assets/icons/tabicons/phone.png')} 
                                   style={{height:60,width:60,borderRadius:8,}}
                            />
                            <TouchableOpacity  onPress={()=>{navigation.navigate('Partnership')}}>
                                <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                                    <Text  style={{color:"#ffffff", fontWeight:'bold', fontSize:14}}>Airtime Recharge</Text>
                                    <Image source={require('../../assets/icons/right_arrow.png')} style={{height:20,width:20,marginLeft:4}}/>
                                </View>                                
                            </TouchableOpacity>
                        </Card>
                   </Layout>
                
                {/* ROW TWO Ends */}

                
                {/* ROW TWO BEGINS */}
                <Layout style={styles.Exc_card}>
                        <Card style ={{width:"48%",margin:2,backgroundColor:COLORS.primary,borderWidth:2,borderRadius:18,alignItems:"center",justifyContent:'center'}}>
                            <Image source={require('../../assets/icons/wallet.png')} style={{height:60,width:60,borderRadius:8}}/>
                            <TouchableOpacity onPress={()=>{navigation.navigate('Bible Reading Plan')}}>
                                 <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                                        <Text  style={{color:"#ffffff", fontWeight:'bold', fontSize:16}}>PCDL Voucher</Text>
                                        <Image source={require('../../assets/icons/right_arrow.png')} style={{height:20,width:20,marginLeft:4}}/>
                                </View>
                            </TouchableOpacity>
                        </Card>

                        <Card style ={{width:"48%",margin:2, backgroundColor:COLORS.ash,borderWidth:2,borderRadius:18,alignItems:"center",justifyContent:'center'}}>
                            <Image source={require('../../assets/icons/money.png')} style={{height:60,width:60,borderRadius:8}}/>
                            <TouchableOpacity  onPress={()=>{navigation.navigate('Partnership')}}>
                                <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                                    <Text  style={{color:COLORS.primary, fontWeight:'bold', fontSize:16}}>Give Offering</Text>
                                    <Image source={require('../../assets/icons/right_arrow.png')} style={{height:20,width:20,marginLeft:4}}/>
                                </View>                                
                            </TouchableOpacity>
                        </Card>
                   </Layout>
                
                {/* ROW TWO Ends */}
       
            </ImageBackground>

        </ApplicationProvider>
        </>
    )
}

export default UtilityBills;


const styles = StyleSheet.create({
    Exc_card:{
        flex:0.2,
        flexDirection:'row',
        justifyContent:'space-between',
        width:"90%",
        backgroundColor:"transparent",
        marginVertical:5,
    }, 
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1 ,
        justifyContent:"center",alignItems:'center'
   },
 })
