import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './screens/Main';
import Home from './screens/Home';

const Stack = createStackNavigator();

export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName = 'Home' screenOptions = {{headerShown: false}} >
          <Stack.Screen name = 'Home' component = {Home} />
          <Stack.Screen name = 'Main' component = {Main} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}