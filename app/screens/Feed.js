import { StyleSheet, Button, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import LettersTab from "../components/BottomTabs/LettersTab";
import DigitsTab from "../components/BottomTabs/DigitsTab";

import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
//const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();

export default function Feed({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator>
        <Tab.Screen
          name="Letters"
          component={LettersTab}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="cards-playing-outline"
                size={28}
                color="black"
              />
            ),
          }}
        />

        <Tab.Screen
          name="Digits"
          component={DigitsTab}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="cards-playing"
                size={24}
                color="black"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({});
