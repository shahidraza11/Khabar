import React from 'react'
import { Text, View, Image, StyleSheet, Pressable, ScrollView } from 'react-native'
import Input from '../screens/Input'
import ProfileImage from '../component/ProfileImage'

const Profile = ({navigation}) => {
  return (
    <ScrollView style={{ backgroundColor: 'white', flex: 1, margin: 1 }}>
      <View style={{ backgroundColor: 'white', flex: 9, margin: 10 }}>
        <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
          <Image onPress={() => navigation.navigate('Home')} source={require('../assets/icons/arrow.png')}
            style={{ height: 30, width: 30 }} />
          <Text style={{ fontSize: 17, fontWeight: 'bold',color:'black' }}>Fill your Profile</Text>
          <View style={{ paddingLeft: 30 }} ></View>
        </View>
        <View style={{ backgroundColor: 'white', flex: 8 }}>
          <ProfileImage/>
          <Text style={{ fontSize: 17, color: 'black' }}>Username</Text>
          <Input keyboard="default" />
          <Text style={{ fontSize: 17, color: 'black' }}>Full Name </Text>
          <Input keyboard="default" />
          <Text style={{ fontSize: 17, color: 'black' }}>Email Address <Text style={{ color: 'red' }}>*</Text></Text>
          <Input keyboard="email-address" />
          <Text style={{ fontSize: 17, color: 'black' }}>Phone Number <Text style={{ color: 'red' }}>*</Text></Text>
          <Input keyboard="number-pad" />
        </View>
      </View>
      <View style={{ backgroundColor: 'white', flex: 1, padding: 10 }}>
        <Pressable>
          <Text onPress={() => navigation.navigate('Dashboard')} style={styles.Pressable}>Next</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Pressable: {
    backgroundColor: '#1877F2',
    color: 'white',
    height: 50,
    marginTop: 10,
    borderRadius: 5,
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 10

  }
})

export default Profile