import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const Input = (props) => {
    const [name, setname] = useState()
    const [myname, setnamee] = useState("")
    const [password, setpassword] = useState()
    const [email, setemail] = useState()
    const [display, setdisplay] = useState(false)

    const resetData = () => {
        setdisplay(false)
        setemail("")
        setname("")
        setpassword("")
    }
    return (
        <View>
            <Text style={{ padding: 2, marginLeft: 5, color: 'skyblue', fontSize: 25 }}>Simple form in react native</Text>
            <TextInput onChangeText={(text) => setname(text)} value={name} style={Styles.TextInput} placeholderTextColor={"black"} placeholder='enter user name' />
            <TextInput onChangeText={(text) => setemail(text)} value={email} style={Styles.TextInput} placeholderTextColor={"black"} placeholder='enter your email id' />
            <TextInput secureTextEntry={true} onChangeText={(text) => setpassword(text)} value={password} placeholderTextColor={"black"} style={Styles.TextInput} placeholder='enter your password' />
            <View style={{ padding: 10 }}>
                <Button color={"green"} onPress={() => setdisplay(true)} title='print value' />

                <Button color={"red"} title='clear value' onPress={resetData} />

            </View>
            <TextInput placeholderTextColor={"black"} onChangeText={(text) => setnamee(text)} placeholder='write something'></TextInput>
            <View>
                {display ? <View>
                    <Text style={{ fontSize: 20, color: 'green' }}> user name is {name}</Text>
                    <Text style={{ fontSize: 20, color: 'red' }}> user email is {email}</Text>
                    <Text style={{ fontSize: 20, color: 'orange' }}> user password is {password}</Text>

                </View> : null}
                <Button title='press me for Grid' onPress={() => props.navigation.navigate("grid", { myname, age: 21 })}></Button>
            </View>

        </View>
    )

}

const Styles = StyleSheet.create({
    TextInput: {
        fontSize: 18,
        borderWidth: 2,
        borderColor: 'skyblue',
        margin: 12,
        fontWeight: '400',
        borderRadius: 4,
        color: 'black'


    },
})
export default Input;



