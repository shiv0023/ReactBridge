import React from 'react'
import { Text, View } from 'react-native';
class Student extends React.Component {
    render() {
        console.warn(this.props);
        return (

            <View>
                <Text style={{ color: 'green', fontSize: 20 }}>Student component{this.props.name}</Text>
            </View>
        )
    }
}


export default Student;