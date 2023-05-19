import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TestScreen from '../screen/test';
const Stack = createNativeStackNavigator();

const TestNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TestScreen" component={TestScreen} />
    </Stack.Navigator>
  );
};

export default TestNavigator;
