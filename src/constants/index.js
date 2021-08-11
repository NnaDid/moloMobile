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
        logo:   <Image source ={require('../assets/logo.png')} style={{resizeMode: 'contain',aspectRatio:3/4, marginVertical:0}}/>, 
        splash: <Image source ={require('../assets/logo.png')} style={{resizeMode: 'contain',aspectRatio:3/4}}/>,
        moloBg: <Image source ={require('../assets/icons/molobg.png')} style={{resizeMode: 'contain',aspectRatio:3/4}}/>,

        money:  <Image source ={require('../assets/icons/money.png')} style={{resizeMode: 'contain',aspectRatio:3/4}}/>,
        rightArrow:  <Image source ={require('../assets/icons/right_arrow.png')} style={{resizeMode: 'contain',aspectRatio:3/4}}/>,
        leftArrow:  <Image source ={require('../assets/icons/left_arrow.png')} style={{resizeMode: 'contain',aspectRatio:3/4}}/>,


        wallet:  <Image source ={require('../assets/icons/wallet.png')} style={{resizeMode: 'contain',aspectRatio:3/4}}/>,
        user:    <Image source ={require('../assets/icons/user.png')} style={{resizeMode: 'contain',aspectRatio:3/4}}/>,
        user:    <Image source ={require('../assets/icons/user.png')} style={{resizeMode: 'contain',aspectRatio:3/4}}/>,
        
        partnership:{
            innerCirty:    <Image source ={require('../assets/icons/innercity.png')} style={{resizeMode: 'contain',aspectRatio:3/4}}/>,
            children:      <Image source ={require('../assets/icons/children.png')} style={{resizeMode: 'contain',aspectRatio:3/4}}/>,
            healingSchool: <Image source ={require('../assets/icons/healingsch.jpg')} style={{resizeMode: 'contain',aspectRatio:3/4}}/>,
            loveworldPlus: <Image source ={require('../assets/icons/loveworld-plus.jpg')} style={{resizeMode: 'contain',aspectRatio:3/4}}/>,
            loveworldSat:  <Image source ={require('../assets/icons/lvworldsat.png')} style={{resizeMode: 'contain',aspectRatio:3/4}}/>,
            itm:           <Image source ={require('../assets/icons/itm.png')} style={{resizeMode: 'contain',aspectRatio:3/4}}/>,
            ror:           <Image source ={require('../assets/icons/ror.png')} style={{resizeMode: 'contain',aspectRatio:3/4}}/>,
            imam:          <Image source ={require('../assets/icons/imm1.png')} style={{resizeMode: 'contain',aspectRatio:3/4}}/>,
        }

 }


 export const Logo = ()=>(
    ICONS.logo
);

 export const APIS ={
     AUTH:{
         SIGNUP:"",
         LOGIN:"",
         RECOVER_PASSSWORD:"",
         CHANGE_PASSWORD:"",
         UPDATE_PROFILE:"",
     },
     WALLET:{
         FUND:"",
         TRASNFER:"",
         DONATION:"",
     },
     UTILITY:{
         LIGHT:"",
         TV:"",
     },
     VTU:{
         AIRTIME_TOPUP:"",
         DATA_TOPUP:"",
     }
 }