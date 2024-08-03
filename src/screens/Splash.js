import React, { useState } from 'react'
import { View,Text, Image } from 'react-native'

const Splash = ({navigation}) => {
  useState(()=>{
    setTimeout(()=>{
      navigation.navigate('Login')
    },1000)
  },[])
  return (
    <View style={{flex:1,alignItems:'center',marginTop:200}}>
        <Image source={require('../assets/icons/news.png')}
          />
    </View>



  )
}

export default Splash