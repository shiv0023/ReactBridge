import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const App = () => {
  return (
    <View style={Styles.MainContainer}>
<Text style={Styles.TitleBar}>
      Hello World?
    </Text>
    </View>
    
  )
}

const Styles = StyleSheet.create({
  TitleBar: {
    fontSize: 20,
    color:'red',
  },
  MainContainer:{backgroundColor:"green"
  
  }

})

export default App