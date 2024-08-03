import React from 'react'
import { View,TextInput} from 'react-native'

const Input = ({placeholder , keyboard,is_password }) => {
  return (
    <View>
        <TextInput
        placeholder={placeholder}
        placeholderTextColor={'#4E4B66'}
            style={{fontSize:18,
                color:'black',
                borderWidth:1,
                borderColor:'black',
                // margin:10,
                // marginStart:30,
                marginBottom:20,
                padding:10,
                borderRadius:5}}
                secureTextEntry={is_password}
                keyboardType={keyboard} />
            
    </View>
  )
}


export default Input