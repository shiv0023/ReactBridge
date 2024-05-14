import React from 'react'
import { View, Text, SectionList } from 'react-native'

const SectionLists = () => {

    const user = [
        {
            name: 'shiva',
            age: 21,
            data: ["php", "laravel", 'angular', 'next js', 'react js']
        }, {
            name: 'rahul',
            age: 22,
            data: ['react js', 'native', 'bootstrap', 'tailwind css']
        }, {
            name: 'rahul',
            age: 22,
            data: ['react js', 'native', 'bootstrap', 'tailwind css']
        }, {
            name: 'rahul',
            age: 22,
            data: ['react js', 'native', 'bootstrap', 'tailwind css']
        }, {
            name: 'rahul',
            age: 22,
            data: ['react js', 'native', 'bootstrap', 'tailwind css']
        }, {
            name: 'rahul',
            age: 22,
            data: ['react js', 'native', 'bootstrap', 'tailwind css']
        }, {
            name: 'rahul',
            age: 22,
            data: ['react js', 'native', 'bootstrap', 'tailwind css']
        }

    ]

    return (

        <View>
            <Text>Section list in array</Text>
            <SectionList sections={user}
                renderItem={({ item }) => <Text style={{ color: 'red', fontSize: 20,marginLeft:20 }}>{item}</Text>}
                renderSectionHeader={({ section: { name } }) => <Text style={{ color: 'green', fontSize: 20 ,marginLeft:20 }}>{name}</Text>}
            />

        </View>
    )
}

export default SectionLists