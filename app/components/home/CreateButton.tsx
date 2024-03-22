// react, react-native
import React from 'react';
import {View} from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {SvgXml} from 'react-native-svg';

// library
import dayjs from 'dayjs';

// assets, utils, realm
import {svg} from '../../assets/svg';

// style
import Theme from '../../styles/Theme';
import {CreateButton as Style} from '../../styles/home.styles';

const CreateButton = () => {
  const currentDate = dayjs().format('YYYY-MM-DD');

  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const onNavigationPress = () => {
    navigation.navigate('Record', {postDate: currentDate});
  };

  return (
    <Style.button onPress={onNavigationPress}>
      <View>
        <SvgXml xml={svg.plus} fill={Theme.colors.main} />
      </View>
    </Style.button>
  );
};

export default CreateButton;
