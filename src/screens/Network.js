import React,{useState,useEffect} from 'react';

import AsyncStorage from '@react-native-community/async-storage'; 

export const User = () =>{
    const [user, setUser] = useState({});
    useEffect(        
        AsyncStorage.getItem('MOLO_USER').then((response)=>{
        if(response !== null || response!== undefined){
            setUser(JSON.parse(response)); 
        } 
    }),[]);

    return( user  );
};



export const UserWallet =()=>{
  const [uerBalance, setUserBalance] = useState({});
  let dataToSend = {email:User.email, action: "bal"};

 useEffect(  
   fetch(APIS.WALLET.FUND, { method: 'POST',body: JSON.stringify(dataToSend),
    headers: {'Accept': 'application/json', 'Content-Type': 'application/json',},
  })
  .then((response)=> response.json())
  .then((responseJson) => { 
      if (responseJson.message.status === 'Success') { 
        setUserBalance(responseJson.message);
      }  
      AsyncStorage.getItem('MOLO_USER_WALLET').then((response)=>{
        if(response !== null || response!== undefined){
            setUserBalance(JSON.parse(response)); 
        } 
    })
    })
    .catch((error) => { 
      console.error(error);
    }),[uerBalance]);
    return(  uerBalance );
}


 
