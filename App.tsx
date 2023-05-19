import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './src/navigation/homeNavigation';
import TestNavigator from './src/navigation/testNavigation';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={HomeNavigator} />
        <Tab.Screen name="Cuenta" component={TestNavigator} />
        <Tab.Screen name="Detalle" component={TestNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
