import React, { useRef } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const MyRef = () => {
  const inputref = useRef(null);

  const updateinput = () => {
    console.warn('call')
    inputref.current && inputref.current.focus();
    inputref.current.setNativeProps({
   fontSize:20,
   Color:'red'
    })
  }

  return (
    <View>
      <Text>Use of ref</Text>
      <TextInput ref={inputref} style={{ margin: 15, borderColor: 'skyblue', borderWidth: 1 }} placeholder='enter name' />
      <TextInput style={{ margin: 15, borderColor: 'skyblue', borderWidth: 1 }} placeholder='enter email' />
      <Button onPress={updateinput} title='press me' />
    </View>
  )
}

export default MyRef