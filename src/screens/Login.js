import React from 'react';
import { StyleSheet, ToastAndroid, ScrollView,ImageBackground} from 'react-native';
import { ApplicationProvider, Button, Icon, IconRegistry, Layout, Text, Input, View} from '@ui-kitten/components'; 
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import { ICONS, COLORS, Logo, APIS} from '../constants';
import Loader from './Loader';
import AsyncStorage from '@react-native-community/async-storage'; 



const EmailIcon = (props) => (
  <Icon {...props} name='email-outline'/>
);

const googlePlus = (props) => (
  <Icon {...props} name='google-outline'/>
);

const messenger = (props) => (
  <Icon {...props} name='message-circle-outline'/>
);

const LoginScreen = ({navigation}) => {
  const [loading, setLoading]   = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const [errortext, setErrortext]             = React.useState('');

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => ( 
      <Icon onPress={toggleSecureEntry} {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
  );



  const handleSubmitPress = () => { 
    if (!email) {
      alert('Please fill Email');
      return;
    }
    if (!password) {
      alert('Please fill Password');
      return;
    }
    setLoading(true);
    let dataToSend = {email: email, paswd: password};
    fetch(APIS.AUTH.LOGIN, {
      method: 'POST',
      body: JSON.stringify(dataToSend),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((response)=> response.json())
    .then((responseJson) => {
        setLoading(false);
        if (responseJson.message === 'success') { 
          ToastAndroid.showWithGravityAndOffset(
            'Login Successful', ToastAndroid.LONG, ToastAndroid.BOTTOM,
            25, 500 
            );
            const userData ={
                    name:responseJson.data.name,
                    email:responseJson.data.email,
                    phone:responseJson.data.phone,
                    user_id:responseJson.data.user_id
            };
          AsyncStorage.setItem('MOLO_USER',JSON.stringify(userData)).then((response)=>{
            navigation.navigate('Dashboard',{user:JSON.stringify(userData)});
            console.log("stringified data->:",JSON.stringify(userData));
            console.log(response);
          }).catch((error)=>{
              console.error(error);
              setErrortext(error);
          });
          
        } else {
          setErrortext(responseJson.message);
        }
      })
      .catch((error) => {
        setLoading(false);//Hide Loader
        console.error(error);
      });
  };


  return (
        <>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider {...eva} theme={eva.light}>
          <Loader loading={loading} />
          <ImageBackground
                style={ styles.imgBackground } 
                resizeMode='cover' 
                source={ICONS.splash}>
                <ScrollView keyboardShouldPersistTaps="handled">
                      <Layout style={{ flex:2, alignItems: 'center', justifyContent:'center',marginTop:0,backgroundColor:'transparent'}}>               
                          <Logo />
                          <Layout style={styles.inputBackground}>
                                <Input
                                  value ={email}
                                  label ='Email'
                                  size  ='large'
                                  accessoryRight ={EmailIcon}
                                  placeholder='christian@molo.com' 
                                  onChangeText={nextValue => setEmail(nextValue)}
                                  style ={{ width:'90%'}}
                              />
                          </Layout>

                          <Layout style ={styles.inputBackground}>
                              <Input
                                  value ={password}
                                  label ='Password'
                                  size  ='large' 
                                  placeholder='**********' 
                                  accessoryRight={renderIcon}
                                  secureTextEntry={secureTextEntry}
                                  onChangeText={nextValue => setPassword(nextValue)}
                                  style ={{ width:'90%'}}
                                />
                          </Layout> 
                          {errortext !== '' ? (
                              <Text style={styles.errorTextStyle}>{errortext}</Text>
                            ) : null}
                          <Button style ={styles.btnBg,{ width:'87%',margin:20,backgroundColor:COLORS.primary, borderColor:COLORS.primary}}
                                  onPress ={handleSubmitPress}
                                  > Login </Button>   
                          <Layout style ={{ flex:1,flexDirection:'row',justifyContent:'space-between',width:'87%'}}>
                              <Text category='c1' onPress ={()=>navigation.navigate('Reset')}>Forgot password ?</Text> 
                              <Text category='c1' onPress ={()=>navigation.navigate('SignUp')}>Create account</Text>
                          </Layout>  

                          
                      <Layout style ={{ flex:0.5,flexDirection:'row',justifyContent:'space-around',width:'87%', marginTop:20}}>
                              <Text category='c1' style ={styles.separator}></Text> 
                              <Text category='c1' style={{justifyContent:"center",alignItems:"center", height:16}}>Or</Text> 
                              <Text category='c1' style ={styles.separator1}></Text>
                    </Layout>

                      </Layout>

                      <Layout style ={{ flex:0.4,flexDirection:'row', alignItems:'center', justifyContent:'space-between',width:'100%'}}>
                          <Button style ={styles.btnBg,{ width:'40%',marginLeft:"5%",backgroundColor:COLORS.darkBlue, borderColor:COLORS.darkBlue}} 
                                  onPress ={()=>{alert("This feature is under way")}}
                                  accessoryLeft={messenger}> Kingschat </Button>   
                          <Button style ={styles.btnBg,{ width:'40%',marginRight:"5%",backgroundColor:COLORS.red, borderColor:COLORS.red}} 
                                  onPress ={()=>{alert("This feature is under way")}}
                                  accessoryLeft={googlePlus}>+ Google </Button>                     
                      </Layout> 
                </ScrollView> 
                </ImageBackground>


          </ApplicationProvider>
        </>
  )
}

export default LoginScreen

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
    },
    errorTextStyle: {
      color: 'red',
      textAlign: 'center',
      fontSize: 14,
      marginVertical:5,
    },
    separator:{
      borderWidth:3,
      width:120,
      borderColor:COLORS.ash,
      height:4,
      borderRadius:4,
      marginRight:10,
    },
    separator1:{
      borderWidth:3,
      width:120,
      borderColor:COLORS.ash,
      height:4,
      borderRadius:4,
      marginLeft:10,
    },
    imgBackground: {
     width: '100%',
     height: '100%',
     flex: 1 ,
     marginBottom:30,
 },
})
