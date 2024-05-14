import React, { useState } from 'react'
import { ActivityIndicator, Button, Text, View } from 'react-native'

const Loader = () => {
  const [show, setshow] = useState(false)

  const displayloader = () => {
    setshow(true)
    setTimeout(() => {
      setshow(false)
    }, 3000)
  }
  return (
    <View>
      <Text>Activity Indicator</Text>
      {show ?
        <ActivityIndicator size={200} color={'golden'} ></ActivityIndicator> : null

      }
      <Button title='press me' onPress={displayloader} />
    </View>
  )
}

export default Loader