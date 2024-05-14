import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
// import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import User from './User';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RadioButton from './RadioButton';

const TabNavigation = () => {
    const Tab=createMaterialTopTabNavigator();
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name='login' component={User}></Tab.Screen>
      <Tab.Screen name="radiobtn" component={RadioButton}/>
     
    
    </Tab.Navigator>
    
    </NavigationContainer>
  )
}

export default TabNavigation;