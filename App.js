import React from "react";
import "./global.css";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {View,StatusBar } from "react-native";
import Tutorial from "./src/components/Tutorial";
import Home from "./src/components/Home";
import Intro from "./src/components/Intro";
import NewTask from "./src/components/NewTask";

export default function App() {
  return (
    <NavigationContainer>
      <View style={{flex:1,marginTop:StatusBar.currentHeight ,marginBottom:StatusBar.currentHeight}}>
      <Stack.Navigator>
        <Stack.Screen name="Intro" component={Intro} options={{headerShown:false}}/>
        <Stack.Screen name="Tutorial" component={Tutorial} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="NewTask" component={NewTask} options={{headerShown:false}}/>
      </Stack.Navigator>   
      </View>
    </NavigationContainer>
  );
}