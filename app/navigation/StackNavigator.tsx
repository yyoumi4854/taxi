// react, react-native
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// components
import BottomTabsNavigator from './BottomTabsNavigator';
import Record from '../screens/Record';

// style
import Theme from '../styles/Theme';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  const [currentRouteName, setCurrentRouteName] = useState('');

  // 현재 페이지 이름 출력
  useEffect(() => {
    const currentRoute = navigation.addListener('state', () => {
      const {name} = navigation.getCurrentRoute();
      setCurrentRouteName(name);
    });

    return currentRoute;
  }, [navigation]);

  return (
    <>
      <StatusBar
        backgroundColor={
          currentRouteName === 'Home' ? Theme.colors.mainLight : '#fff'
        }
        barStyle={'dark-content'}
      />
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
    </>
  );
};

export default StackNavigator;
