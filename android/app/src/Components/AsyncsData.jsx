import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import User from './android/app/src/Components/User'
const Storage = () => {
  const [user, setuser] = useState('')
  const Setdata = async () => {
    const mydata = await AsyncStorage.setItem("user", "shiv kashyap")
    console.warn(mydata)
  }
  const getdata = async () => {
    const data = await AsyncStorage.getItem("user")
    console.warn(data)
    setuser(data)
  }
  const removedata = async () => {
    await AsyncStorage.removeItem("user")
    setuser('')
  }
  return (
    <View style={{ margin: 10 }}>
      <Text>Async storage usage {user}</Text>
      <Button style={{ margin: 10 }} title='setdata' onPress={Setdata} />
      <Button title='getdata' onPress={getdata} />
      <Button title='removedata' onPress={removedata} user={User} />


    </View>
  )
}

export default Storage