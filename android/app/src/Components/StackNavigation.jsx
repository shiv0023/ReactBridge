import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Button } from 'react-native';
import Input from './Input';
import Grid from './Grid';

const StackNavigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTitle: () => <Button title='Left' onPress={() => { }} />, // You need to specify an onPress handler
                    headerStyle: {
                        backgroundColor: 'black',
                    },
                    headerTintColor: "white",
                    headerTitleStyle: {
                        fontSize: 20,
                    }
                }}
            >
                <Stack.Screen name='InputField' component={Input} options={{
                    title:'user login',
                    headerStyle:{
                        backgroundColor:'orange'
                    },
                    headerTintColor:'red'
                }} />
                <Stack.Screen name='grid' component={Grid} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigation;
