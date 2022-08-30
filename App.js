import { StatusBar } from 'expo-status-bar';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Clientes from './screens/Clientes';
import Saldos from './screens/Saldos';
import { useEffect } from 'react';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Menu />    
    </NavigationContainer>
  );
}

/*
* Temporary Screen/Views to render in app()
*/

const Menu = () =>{
  return(
    <Stack.Navigator initialRouteName="Clientes" 
    screenOptions={() => ({headerShown: false})}
    >
      <Stack.Screen name="Clientes" component={Clientes}/>
      <Stack.Screen name="Saldos" component={Saldos}/>
    </Stack.Navigator>
  );
}

/**
 *  Functions  
 */



/**
 *  Styles
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
