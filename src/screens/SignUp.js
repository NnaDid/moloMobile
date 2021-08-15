import React ,{ useState } from 'react'
import { StyleSheet, ScrollView,KeyboardAvoidingView,ImageBackground,ToastAndroid} from 'react-native'
import { ApplicationProvider, Button, Icon, IconRegistry, Layout, Text, Input ,Spinner} from '@ui-kitten/components'; 
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import { ICONS, COLORS, Logo,APIS} from '../constants';
import Loader from './Loader';



const EmailIcon = (props) => (
  <Icon {...props} name='email-outline'/>
);

const PersonIcon = (props) => (
  <Icon {...props} name='person-done-outline'/>
);
const PhoneIcon = (props) => (
  <Icon {...props} name='phone-outline'/>
);

const googlePlus = (props) => (
  <Icon {...props} name='google-outline'/>
);

const messenger = (props) => (
  <Icon {...props} name='message-circle-outline'/>
);

const SignUp = ( props ) => {
  
const toggleSecureEntry = () => { setSecureTextEntry(!secureTextEntry);};

const renderIcon  = (props) => (<Icon onPress={toggleSecureEntry} {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>);
const renderIcon2 = (props) => (<Icon onPress={toggleSecureEntry} {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>);


  const [fName, setfName]               = useState('');
  const [email, setEmail]               = useState('');
  const [phoneNumber, setPhoneNumber]   = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading]           = useState(false);
  const [errortext, setErrortext]       = useState('');
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleSubmitButton = async () => {
    setErrortext('');
    if (!fName) {
      alert('Please fill Name');
      return;
    }
    if (!email) {
      alert('Please fill Email');
      return;
    }
    if (!phoneNumber) {
      alert('Please fill Address');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    if (!confirmPassword) {
      alert('Please Confirm Your Password');
      return;
    }
    if (userPassword!==confirmPassword) {
      setErrortext('Psssword Mismatch');
      return;
    }
    //Show Loader
    setLoading(true);
    var dataToSend = {
            name: fName,
            email: email,
            phone: phoneNumber,
            paswd: userPassword,
      };

   await fetch(APIS.AUTH.SIGNUP, { method: 'POST', body: JSON.stringify(dataToSend),
      headers: {'Accept': 'application/json','Content-Type': 'application/json', },
    })
    .then((response) => await response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.message === 'success') {
          setIsRegistraionSuccess(true);
          ToastAndroid.showWithGravityAndOffset(
            'Registration Successful', ToastAndroid.LONG, ToastAndroid.BOTTOM,
            25, 500 
            );
          props.navigation.replace('Login');
          console.log('Registration Successful. Please Login to proceed');
        } else {
          setErrortext(responseJson.message);
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };
 
  
  return (
    <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
    <Loader loading={loading} />
     <ScrollView keyboardShouldPersistTaps="handled">
     <ImageBackground
                style={styles.imgBackground } 
                resizeMode='cover' 
                source={ICONS.splash}>

        <KeyboardAvoidingView enabled>
            <Layout style={{ justifyContent: 'center', alignItems: 'center', backgroundColor:'transparent'}}>
                <Layout style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Logo />
                </Layout>

            <Layout style={{flex:0.5,justifyContent: 'center', alignItems: 'center'}}>
                <Layout style={styles.inputBackground}>
                <Input
                  value ={fName}
                  label ='Full Name'
                  size  ='large'
                  accessoryRight ={PersonIcon}
                  placeholder='Your full name' 
                  onChangeText={nextValue => setfName(nextValue)}
                  style ={{ width:'90%'}}
              />
            </Layout>

            <Layout style={styles.inputBackground}>
                <Input
                  value ={email}
                  label ='Email'
                  size  ='large'
                  keyboardType="email-address"
                  accessoryRight ={EmailIcon}
                  placeholder='christian@gmail.com' 
                  onChangeText={nextValue => setEmail(nextValue)}
                  style ={{ width:'90%'}}
              />
            </Layout>

            <Layout style={styles.inputBackground}>
                <Input
                  value ={phoneNumber}
                  label ='Phone Number'
                  size  ='large'
                  keyboardType="phone-pad"
                  accessoryRight ={PhoneIcon}
                  placeholder='Your phone number eg. 08098766545' 
                  onChangeText={nextValue => setPhoneNumber(nextValue)}
                  style ={{ width:'90%'}}
              />
            </Layout>
            <Layout style={{...styles.inputBackground}}>
                <Input
                  value ={userPassword}
                  label ='Choose Password'
                  size  ='large'
                  accessoryRight={renderIcon}
                  placeholder='**********' 
                  secureTextEntry={secureTextEntry}
                  onChangeText={nextValue => setUserPassword(nextValue)}
                  style ={{ width:'90%'}}
              />
            </Layout>
            <Layout style={{...styles.inputBackground}}>
                <Input
                  value ={confirmPassword}
                  label ='Confirm Password'
                  size  ='large'
                  accessoryRight={renderIcon}
                  placeholder='Confirm Pasword' 
                  secureTextEntry={secureTextEntry}
                  onChangeText={nextValue => setConfirmPassword(nextValue)}
                  style ={{ width:'90%'}}
              />
            </Layout>

                </Layout>


             {errortext !== '' ? (<Text style={{color:'red',fontWeight:'bold'}}>{errortext}</Text> ) : null}
            <Button style ={styles.btnBg,{ width:'87%',margin:20, backgroundColor:COLORS.primary, borderColor:COLORS.primary}} 
                    onPress ={handleSubmitButton}> Create Account</Button>   
               
                <Layout style ={{ flex:0.3,flexDirection:'row',justifyContent:'space-around',width:'87%',marginBottom:5}}>
                    <Text category='c1' onPress ={()=>props.navigation.navigate('Reset')}>Forgot Password ?</Text>                  
                    <Text category='c1' onPress ={()=>props.navigation.navigate('Login')}>Have Account? </Text>
                </Layout> 
                <Layout style ={{ flex:0.5,flexDirection:'row',justifyContent:'space-around',width:'87%', marginTop:20}}>
                        <Text category='c1' style ={styles.separator}></Text> 
                        <Text category='c1' style={{justifyContent:"center",alignItems:"center", height:16}}>Or</Text> 
                        <Text category='c1' style ={styles.separator1}></Text>
               </Layout>
          </Layout>

          <Layout style ={{ flex:0.4,flexDirection:'row', alignItems:'center', justifyContent:'space-between',width:'100%',marginBottom:15}}>
                    <Button style ={styles.btnBg,{ width:'40%',marginLeft:"5%",backgroundColor:COLORS.darkBlue, borderColor:COLORS.darkBlue}} 
                            onPress ={()=>{alert("This feature is under way")}}
                            accessoryLeft={messenger}> Kignschat </Button>   
                    <Button style ={styles.btnBg,{ width:'40%',marginRight:"5%",backgroundColor:COLORS.red, borderColor:COLORS.red}} 
                            onPress ={()=>{alert("This feature is under way")}}
                            accessoryLeft={googlePlus}>+ Google </Button>                     
          </Layout> 
      </KeyboardAvoidingView>
    

        </ImageBackground>

    </ScrollView>

    </ApplicationProvider>
  </>
  )
}

export default SignUp;

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
    imageBackground:{ 
      flex: 1, 
      width:"100%",
      height:"100%",
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
