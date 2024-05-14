import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'


const RadioButton = () => {
    const [selectedradio, setselectedradion] = useState(1)

    const Skills = [
        {
            name: 'java',
            id: 1
        },
        {
            name: 'js',
            id: 2

        },
        {
            name: 'php',
            id: 3

        },
        {
            name: 'sql',
            id: 4
        }

    ]
    return (
        <View style={style.main}>
            {
                Skills.map((item) =>
                    <TouchableOpacity onPress={() => setselectedradion(item.id)}>
                        <View style={style.mainbox}>

                            <View style={style.box}>
                                {
                                    selectedradio === item.id ? <View style={style.radiobg}></View> : null
                                }
                            </View>
                            <Text style={style.textbar}>{item.name}</Text>


                        </View>
                    </TouchableOpacity>
                )
            }

        </View>
    )
}
const style = StyleSheet.create({
    main: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textbar: {
        color: 'red',
        fontSize: 20
    },

    box: {
        height: 40,
        width: 40,
        borderWidth: 2,
        color: 'black',
        borderRadius: 20,

    }, mainbox: {
        flexDirection: 'row',
        alignItems: 'center'

    },
    radiobg: {
        backgroundColor: 'green',
        height: 30,
        width: 30,
        borderRadius: 20,
        margin: 3


    }
})
export default RadioButton;