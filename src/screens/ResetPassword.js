import React from 'react';
import { StyleSheet } from 'react-native';
import {  ApplicationProvider, Button, Icon, IconRegistry, Layout, Text, Input} from '@ui-kitten/components'; 
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import { ICONS, COLORS, Logo} from '../constants';

const EmailIcon = (props) => (
  <Icon {...props} name='email-outline'/>
);

const ResetPassword = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  return (
    <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
    <Layout style={{ flex:1, flexDirection:'column', alignItems: 'center', justifyContent:'center'}}>
                  <Logo />
                   <Layout style={styles.inputBackground}>
                        <Input
                          value ={email}
                          label ='Email'
                          size  ='large'
                          accessoryRight ={EmailIcon}
                          placeholder='Your Email' 
                          onChangeText={nextValue => setEmail(nextValue)}
                          style ={{ width:'90%'}}
                      />
                   </Layout>
                   <Button style ={styles.btnBg,{ width:'87%',margin:20,backgroundColor:COLORS.primary, borderColor:COLORS.primary}} > Reset Password </Button>   
                   <Layout style ={{ flex:1,flexDirection:'row',justifyContent:'space-between',width:'87%'}}>
                       <Text category='h6' onPress ={()=>navigation.navigate('Login')}>Login</Text>  
                       <Text category='h6' onPress ={()=>navigation.navigate('SignUp')}>Create account</Text>
                   </Layout>   
              </Layout>

    </ApplicationProvider>
  </>
  )
}

export default ResetPassword;

const styles = StyleSheet.create({
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
    color:'#ffffff'
  },
  captionText: {
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "opensans-regular",
    color: '#ffffff',
  },
  inputBackground:{ 
     borderRadius: 4, 
     margin: 2,  
     padding: 6, 
     backgroundColor: '#ffffff'
    },
    btnBg:{
      backgroundColor: '#007bff'
    }
})
