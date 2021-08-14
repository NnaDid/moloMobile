import React from 'react';
import { StyleSheet, ToastAndroid} from 'react-native';
import {  ApplicationProvider, Button, Icon, IconRegistry, Layout, Text, Input, View} from '@ui-kitten/components'; 
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import { COLORS , Logo, APIS} from '../../constants';
import AsyncStorage from '@react-native-community/async-storage';

import PaystackWebView from 'react-native-paystack-popup';


const card = (props) => (
  <Icon {...props} name='credit-card-outline'/>
);

const Fundwallet = ({navigation}) => {
    const [amount, setAmount] = React.useState('');
    const ref    = React.useRef(null);
    const [showPayment, setShowPayment] = React.useState(false);
    const  [userData, setUserData] = React.useState({});

    React.useEffect(() => {
     AsyncStorage.getItem('MOLO_USER').then((response)=>{
         if(response !== null || response!== undefined){
             const user = JSON.parse(response); 
             setUserData(user); 
         }else{
             setUserData(['No user Data']); 
         }
     }); 
    }, [userData,navigation]) 

  function FundWallet (action,amount,email,ref){
      let dataToSend = {email:email, action: action, ref:ref,amount:amount};

      fetch(APIS.WALLET.FUND, { method: 'POST',body: JSON.stringify(dataToSend),
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json',},
      })
      .then((response)=> response.json())
      .then((responseJson) => { 
          if (responseJson.message.status === 'Wallet funding successful') { 
            ToastAndroid.showWithGravityAndOffset(
              'Successful', ToastAndroid.LONG, ToastAndroid.BOTTOM,
              25, 500 
              );
              // Log out the Response
              console.log(responseJson.message);

              const userAccountBalance ={
                      amount:responseJson.message.amount_funded,
                      wallet_balance:responseJson.message.wallet_balance,
              };
              AsyncStorage.setItem('MOLO_USER_WALLET',JSON.stringify(userAccountBalance)).then((response)=>{
                navigation.navigate('Dashboard',{user:userAccountBalance});
                console.log("stringified data->:",JSON.stringify(userAccountBalance));
                console.log(response);
              }).catch((error)=>{
                  console.error(error);
                  alert(error);
              });
            
          } else {
            alert(responseJson.message);
          }
        })
        .catch((error) => { 
          console.error(error);
        });
    };

    return (
        <>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider {...eva} theme={eva.light}>
              
              <Layout style={{ height:"90%",alignItems: 'center', justifyContent:'center'}}>               
               {!showPayment &&<Logo />}
                   <Text style={{color:COLORS.primary, fontWeight:'bold',fontSize:18}}>Funding Molo Wallet</Text>
                    {!showPayment &&<Layout style={styles.inputBackground}>
                        <Input
                          value ={amount}
                          label ='Amount'
                          size  ='large'
                          accessoryRight ={card}
                          keyboardType="numeric"
                          placeholder='Funding amount eg. 20000' 
                          onChangeText={nextValue => setAmount(nextValue)}
                          style ={{ width:'90%'}}
                      />
                   </Layout> } 
                    {!showPayment && <Button onPress={()=>{setShowPayment(true)}} title="Continue"
                     style ={{ width:'87%',margin:20,backgroundColor:COLORS.primary, borderColor:COLORS.primary}}>Continue</Button>
                     }
                        {showPayment && 
                        <PaystackWebView
                            ref={ref} 
                            onError={(err) => {
                            setShowPayment(false);
                            alert(`Failed...:${err}`);
                            }}    
                            metadata={{ custom_fields: [{ display_name: "MOLO WALLET FUNDING"}] }}
                            onDismissed={() => {
                                ref.current.reload(); //reload if dismissed. pk_live_7568eb1ef389bd0454df4d963ac0d4593e9cd567
                            }}
                            onSuccess={(response) => { 
                              setShowPayment(false);
                              console.log({response});
                              console.log("User Data: "+userData.email);
                              FundWallet("fund",amount,userData.email,response.reference);
                              alert(`Transaction successful: ${response.reference}`);
                              
                            }}
                            paystackKey={"pk_test_19664bf78caa8b47737e664c103295aea5e1475d"} 
                            customerEmail={userData.email} 
                            amount={amount*100} 
                            />}   
              </Layout>

          </ApplicationProvider>
        </>
    )
}

export default Fundwallet;

const styles = StyleSheet.create({})
