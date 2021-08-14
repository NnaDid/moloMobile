import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

 export const COLORS = {
     primary:"#A677FB",
     primaryBlue:"#7C37FA",
     darkBlue:"#3C5A99",
     paleGreen:"#2DE6EA",
     yellow:"#FFCC0A",
     red:"#FF0000",
     ash:"#cccccc",
     DARKERBLUE:"#191970",
     GOLD:"#FFD700"
 }

 export const ICONS ={
        logo:    require('../assets/logo.png') , 
        splash:  require('../assets/splash.png') ,
        moloBg:  require('../assets/icons/molobg.png'),
        settings:  require('../assets/icons/tabicons/settings.png'),

        money:  require('../assets/icons/money.png') ,
        rightArrow:  require('../assets/icons/right_arrow.png'),
        leftArrow:   require('../assets/icons/left_arrow.png'),


        wallet:require('../assets/icons/wallet.png'),
        user:  require('../assets/icons/user.png'),
        user:  require('../assets/icons/user.png'),
        
        partnership:{
            innerCirty:    require('../assets/icons/innercity.png'),
            children:      require('../assets/icons/children.png'),
            healingSchool: require('../assets/icons/healingsch.jpg'),
            loveworldPlus: require('../assets/icons/loveworld-plus.jpg'),
            loveworldSat:  require('../assets/icons/lvworldsat.png'),
            itm:           require('../assets/icons/itm.png'),
            ror:           require('../assets/icons/ror.png'),
            imam:          require('../assets/icons/imm1.png'),
        }

 }


 export const Logo = ()=>(
      <Image  source={ICONS.logo} style={{height:150,width:150, resizeMode: 'contain', marginVertical:10, aspectRatio:3/4}} />
);

const BASE_URL1 ="http://192.168.43.13:80/works/moloNet/api"; 
const BASE_URL  ="http://hack.vestcoin.org/api"; 

 export const APIS ={
     AUTH:{
         SIGNUP:            BASE_URL+"/v1/Auth/Register.php",
         LOGIN:             BASE_URL+"/v1/Auth/Login.php",
         RECOVER_PASSSWORD:"",
         CHANGE_PASSWORD:"",
         UPDATE_PROFILE:"",
     },
     WALLET:{
         FUND:        BASE_URL+"/api/v1/Wallet/",
         TRASNFER:    BASE_URL+"/api/v1/Wallet/",
         BAL:         BASE_URL+"/api/v1/Wallet/",
         DONATION:    BASE_URL+"/api/v1/Wallet/",
     },
     UTILITY:{
         LIGHT:"",
         TV:"",
     },
     VTU:{
         AIRTIME_DATA_TOPUP:    BASE_URL+"/api/v1/Topup",
         DATAPLANS:             BASE_URL+"/api/v1/Dataplans/",
     },

     BIBLE_READING_PLAN:"",
     
 }