// react, react-native
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SvgXml} from 'react-native-svg';

// assets, utils
import {svg} from '../assets/svg';

// components
import Home from '../screens/Home';
import Calendar from '../screens/Calendar';
import Chart from '../screens/Chart';
import More from '../screens/More';

const BottomTabsNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 48,
          borderTopColor: '#D9D9D9',
          elevation: 0,
        },
        tabBarActiveTintColor: '#FFA800',
        tabBarInactiveTintColor: '#D9D9D9',
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: '홈',
          tabBarIcon: ({color}) => <SvgXml xml={svg.home} fill={color} />,
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          title: '달력',
          tabBarIcon: ({color}) => <SvgXml xml={svg.calendar} fill={color} />,
        }}
      />
      <Tab.Screen
        name="Chart"
        component={Chart}
        options={{
          title: '그래프',
          tabBarIcon: ({color}) => <SvgXml xml={svg.cart} fill={color} />,
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          title: '더보기',
          tabBarIcon: ({color}) => <SvgXml xml={svg.more} fill={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
