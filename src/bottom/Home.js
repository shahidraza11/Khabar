import React from 'react'
import { Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import Section from '../component/Section'
import Slider from '../component/Slider'
import Tranding from '../component/Tranding'
import Search from '../component/Search'

const Home = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1, backgroundColor: 'white', margin: 15 }}>
        <View style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
          <Image source={require('../assets/icons/news.png')}
            style={{ backgroundColor: 'white', height: 80, width: 100 }} />
          <Image source={require('../assets/icons/bell.png')}
            style={{ backgroundColor: 'white', height: 40, width: 60 }} />
        </View>
        <Search/>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', marginBottom: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Trending</Text>
          <Text style={{ fontSize: 20, color: 'black' }}>See all</Text>
        </View>
        <Tranding />
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', marginBottom: 15, marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Latest</Text>
          <Text style={{ fontSize: 20, color: 'black' }}>See all</Text>
        </View>
        <Slider />
        <Section />
        <Section />
        <Section />
      </View>
    </ScrollView>
  )
}

export default Home
