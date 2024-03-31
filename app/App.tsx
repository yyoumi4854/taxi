// react, react-native
import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
// import crashlytics from '@react-native-firebase/crashlytics';

// library
import {RecoilRoot} from 'recoil';

const App = () => {
  // 강제로 crash 로그를 발생시켜 확인.
  // useEffect(() => {
  //   crashlytics().crash();
  // }, []);

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
