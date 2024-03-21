// react, react-native
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// components
import BottomTabsNavigator from './BottomTabsNavigator';
import Record from '../screens/Record';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={BottomTabsNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Record"
        component={Record}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
