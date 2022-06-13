import { StyleSheet, Text, Button, onPress, Alert, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigator from './navigator/StackNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import LettersTab from '../components/BottomTabs/LettersTab';


//const Stack = createStackNavigator();


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
    </View>
  );
}
     
  

export default HomeScreen

const styles = StyleSheet.create({})