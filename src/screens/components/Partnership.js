import React from 'react'
import { StyleSheet, Text, View ,Image, TouchableOpacity, ImageBackground} from 'react-native';
import { ApplicationProvider,IconRegistry,Button, Icon, Layout, Card} from '@ui-kitten/components'; 
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import {COLORS} from '../../constants/index'

const Partnership = ({navigation}) => {
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
                        <Card style ={{width:"48%",margin:2,  backgroundColor:COLORS.primary,borderWidth:2,borderRadius:18,alignItems:"center",justifyContent:'center'}}>
                            <Image source={require('../../assets/icons/ror.png')} style={{height:60,width:60}}/>
                            <TouchableOpacity onPress={()=>{navigation.navigate('Bible Reading Plan')}}>
                                 <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                                        <Text style={{color:"#ffffff", fontWeight:'bold', fontSize:16}}>Rapsody of Realities</Text>
                                        <Image source={require('../../assets/icons/right_arrow.png')} style={{height:20,width:20,marginLeft:4}}/>
                                </View>
                            </TouchableOpacity>
                        </Card>

                        <Card style ={{width:"48%",margin:2, backgroundColor:COLORS.ash,borderWidth:2,borderRadius:18,alignItems:"center",justifyContent:'center'}}>
                            <Image source={require('../../assets/icons/innercity.png')} style={{height:60,width:60,borderRadius:30}}/>
                            <TouchableOpacity  onPress={()=>{navigation.navigate('Partnership')}}>
                                <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                                    <Text style={{color:COLORS.primary, fontWeight:'bold', fontSize:16}}>Inner City Mission</Text>
                                    <Image source={require('../../assets/icons/right_arrow.png')} style={{height:20,width:20,marginLeft:4}}/>
                                </View>                                
                            </TouchableOpacity>
                        </Card>
                   </Layout>
                 {/*  Row one Ends */}

                {/* ROW TWO BEGINS */}
                <Layout style={styles.Exc_card}>
                        <Card style ={{width:"48%",margin:2, backgroundColor:COLORS.ash,borderWidth:2,borderRadius:18,alignItems:"center",justifyContent:'center'}}>
                            <Image source={require('../../assets/icons/lvworldsat.png')} style={{height:60,width:60,borderRadius:30}}/>
                            <TouchableOpacity onPress={()=>{navigation.navigate('Bible Reading Plan')}}>
                                 <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                                        <Text style={{color:COLORS.primary, fontWeight:'bold', fontSize:16}}>Loveworld Sat</Text>
                                        <Image source={require('../../assets/icons/right_arrow.png')} style={{height:20,width:20,marginLeft:4}}/>
                                </View>
                            </TouchableOpacity>
                        </Card>

                        <Card style ={{width:"48%",margin:2,  backgroundColor:COLORS.primary,borderWidth:2,borderRadius:18,alignItems:"center",justifyContent:'center'}}>
                            <Image source={require('../../assets/icons/loveworld-plus.jpg')} style={{height:60,width:100,borderRadius:6}}/>
                            <TouchableOpacity  onPress={()=>{navigation.navigate('Partnership')}}>
                                <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                                    <Text style={{color:"#ffffff", fontWeight:'bold', fontSize:16}}>Love World Plus</Text>
                                    <Image source={require('../../assets/icons/right_arrow.png')} style={{height:20,width:20,marginLeft:4}}/>
                                </View>                                
                            </TouchableOpacity>
                        </Card>
                   </Layout>
                
                {/* ROW TWO Ends */}

                
                {/* ROW TWO BEGINS */}
                <Layout style={styles.Exc_card}>
                        <Card style ={{width:"48%",margin:2,  backgroundColor:COLORS.primary,borderWidth:2,borderRadius:18,alignItems:"center",justifyContent:'center'}}>
                            <Image source={require('../../assets/icons/lmam.png')} style={{height:70,width:70,borderRadius:30}}/>
                            <TouchableOpacity onPress={()=>{navigation.navigate('Bible Reading Plan')}}>
                                 <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                                        <Text style={{color:"#ffffff", fontWeight:'bold', fontSize:16}}>Loveworld USA</Text>
                                        <Image source={require('../../assets/icons/right_arrow.png')} style={{height:20,width:20,marginLeft:4}}/>
                                </View>
                            </TouchableOpacity>
                        </Card>

                        <Card style ={{width:"48%",margin:2, backgroundColor:COLORS.ash,borderWidth:2,borderRadius:18,alignItems:"center",justifyContent:'center'}}>
                            <Image source={require('../../assets/icons/lmam.png')} style={{height:60,width:100,borderRadius:6}}/>
                            <TouchableOpacity  onPress={()=>{navigation.navigate('Partnership')}}>
                                <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                                    <Text style={{color:COLORS.primary, fontWeight:'bold', fontSize:16}}>Love World TV</Text>
                                    <Image source={require('../../assets/icons/right_arrow.png')} style={{height:20,width:20,marginLeft:4}}/>
                                </View>                                
                            </TouchableOpacity>
                        </Card>
                   </Layout>
                
                {/* ROW TWO Ends */}


                {/* ROW Four BEGINS */}
                <Layout style={styles.Exc_card}>
                        <Card style ={{width:"48%",margin:2, backgroundColor:COLORS.ash,borderWidth:2,borderRadius:18,alignItems:"center",justifyContent:'center'}}>
                            <Image source={require('../../assets/icons/lvworldsat.png')} style={{height:60,width:60,borderRadius:30}}/>
                            <TouchableOpacity onPress={()=>{navigation.navigate('Bible Reading Plan')}}>
                                 <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                                        <Text style={{color:COLORS.primary, fontWeight:'bold', fontSize:16}}>Loveworld Sat</Text>
                                        <Image source={require('../../assets/icons/right_arrow.png')} style={{height:20,width:20,marginLeft:4}}/>
                                </View>
                            </TouchableOpacity>
                        </Card>

                        <Card style ={{width:"48%",margin:2,  backgroundColor:COLORS.primary,borderWidth:2,borderRadius:18,alignItems:"center",justifyContent:'center'}}>
                            <Image source={require('../../assets/icons/loveworld-plus.jpg')} style={{height:60,width:100,borderRadius:6}}/>
                            <TouchableOpacity  onPress={()=>{navigation.navigate('Partnership')}}>
                                <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                                    <Text style={{color:"#ffffff", fontWeight:'bold', fontSize:16}}>Love World Plus</Text>
                                    <Image source={require('../../assets/icons/right_arrow.png')} style={{height:20,width:20,marginLeft:4}}/>
                                </View>                                
                            </TouchableOpacity>
                        </Card>
                   </Layout>
                
                {/* ROW Four Ends */}

                </ImageBackground>
 
        </ApplicationProvider>
        </>
    )
}

export default Partnership;

const styles = StyleSheet.create({
   Exc_card:{
       flex:0.19,
       flexDirection:'row',
       justifyContent:'space-between',
       width:"90%",
       backgroundColor:"transparent",
       marginVertical:1,
   },
   imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1 ,
    justifyContent:"center",
    alignItems:'center',
    marginBottom:30,
},
})
