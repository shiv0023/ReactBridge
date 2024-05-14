import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import Student from "./Student";



class ClassCom extends React.Component {

  constructor() {
    super()
    this.state = {
      name: 'shiva',
      age: 20
    }
  }

  update (text)  {
    this.setState({ name: text })
  }
  render() {
    return (
      <View>
        <Text style={{ color: 'red', fontSize: 20, margin: 12 }}>class Component in react native {this.state.name}</Text>
        <TextInput onChangeText={(val) => this.update(val)} placeholder="hello " />
        <Button  title="press me"></Button>
        <Student name={this.state.name} />
      </View>
    )
  }
}
export default ClassCom;