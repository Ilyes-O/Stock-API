import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

import Header from './components/Header';
import Initial_Inputs from './components/Initial_Inputs';

export default function App() {
  useEffect(async function () {
    await SplashScreen.hideAsync();
  }, [])
  
  return (
    <View style={styles.home_screen}>
      <Header />
      <Initial_Inputs />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 50,
    fontFamily: 'EuphemiaUCAS-Bold',
  },
  home_screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});