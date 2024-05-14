import React, { useEffect } from 'react'
import { Text, TextInput, View } from 'react-native'

const User = ({data}) => {
    const {title}=data
    return (
        <View>
           <TextInput style={{backgroundColor:'black',borderWidth:2,margin:4,borderRadius:4}} placeholder='hello'/>
            <Text style={{color:'black'}}>hello world </Text>
            <Text style={{color:'black'}}>hello world </Text>



        </View>
    )
}

export default User;