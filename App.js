import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

import Home_Page from './components/Home_Page';

SplashScreen.preventAutoHideAsync();

import { NavigationContainer } from '@react-navigation/native';
import Main_Menu from './Main_Menu';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(async function () {
   await SplashScreen.hideAsync();
  }, [])
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Home_Page"
          component={Home_Page}       
        />
        <Stack.Screen 
          name="Main_Menu"
          component={Main_Menu}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}