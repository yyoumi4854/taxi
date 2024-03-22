// react, react-native
import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';

// library
import {RecoilRoot} from 'recoil';

const App = () => {
  // 네비게이션 테마
  const customTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff',
    },
  };

  return (
    <RecoilRoot>
      <NavigationContainer theme={customTheme}>
        <StackNavigator />
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
