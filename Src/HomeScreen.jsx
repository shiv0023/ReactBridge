// HomeScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title='press'/>

    </View>
  );
};

export default HomeScreen;
