import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable} from 'react-native';

import Header from './Header';
import Initial_Inputs from './Initial_Inputs';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';

export default function Home_Page({navigation}) {

    useEffect(() => {
        console.log(navigation);
    }, [])
  
  return (
    <View style={styles.home_screen}>
        <Header header_text="Welcome" />
        <Initial_Inputs navigation={navigation} />
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