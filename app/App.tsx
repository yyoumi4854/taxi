// react, react-native
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';

const App = () => {
  const customTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff', // 흰색 배경색
    },
  };

  return (
    <NavigationContainer theme={customTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
