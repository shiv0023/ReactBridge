import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const Maps = () => {

  const user = [{
    name: 'shiva',
    age: 12
  }, {
    name: 'sachin',
    age: 12
  },
  {
    name: 'katu',
    age: 12
  }, {
    name: 'bhupender',
    age: 12
  }, {
    name: 'manjeet',
    age: 12
  }, {
    name: 'vishal',
    age: 12
  }, {
    name: 'vishal',
    age: 12
  }, {
    name: 'vishal',
    age: 12
  }, {
    name: 'vishal',
    age: 12
  }, {
    name: 'vishal',
    age: 12
  }, {
    name: 'vishal',
    age: 12
  }, {
    name: 'vishal',
    age: 12
  }, {
    name: 'vishal',
    age: 12
  }, {
    name: 'vishal',
    age: 12
  }, {
    name: 'vishal',
    age: 12
  }, {
    name: 'vishal',
    age: 12
  }, {
    name: 'vishal',
    age: 12
  }

  ]

  return (
   
      <View>
        <Text style={{ color: 'skyblue', fontSize: 20 }}>List With Map Function</Text>
      
        <ScrollView style={{marginBottom:50}}>
          {user.map((item) => <Text style={Styles.item} key={item.id}>{item.name}</Text>)}
    </ScrollView>

      
      </View>
  )

}

const Styles = StyleSheet.create({
  item: {
    padding: 4,
    backgroundColor: 'black',
    margin: 4,
    fontSize: 30,
    color:'green'
  }
})

export default Maps