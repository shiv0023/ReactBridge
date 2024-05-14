import React from 'react'
import { View, Text, StyleSheet, ScrollView, Button, TextInput } from 'react-native'
const Grid = (props) => {
  const { myname, age } = props.route.params
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
    name: 'bhup',
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
  }, {
    name: 'vishal',
    age: 12
  }, {
    name: 'vishal',
    age: 12
  }, {
    name: 'vishal',
    age: 12
  }]


  return (
    <ScrollView>
      <View >
        <Text style={{ color: 'red', fontSize: 25, marginLeft: 20 }}>How to make a dynamic grid</Text>
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', margin: 8 }}>
          {
            user.map((item, index) => <Text key={index} style={Styles.GridTemplate}>{item.name}</Text>)
          }
        </View>
        <Text style={{ color: 'black', backgroundColor: 'red', fontSize: 20 }}>{myname}</Text>
        <Text style={{ color: 'green' }}>{age}</Text>

        <Button title='Press me for Input' onPress={() => props.navigation.navigate("InputField")}></Button>
      </View>

    </ScrollView>
  )
}

const Styles = StyleSheet.create({
  GridTemplate: {
    padding: 2,
    margin: 2,
    backgroundColor: 'black',
    fontSize: 30,
    color: 'green',
    width: 120,
    textAlign: 'center',
    height: 80,
    textAlignVertical: 'center'
  }
})
export default Grid