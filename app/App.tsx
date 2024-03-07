// react, react-native
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
import {setCustomText} from 'react-native-global-props';

const App = () => {
  const customTextProps = {
    style: {
      fontFamily: 'NotoSansKRRegular',
    },
  };
  setCustomText(customTextProps);

  const customTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff',
    },
  };

  return (
    <NavigationContainer theme={customTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
