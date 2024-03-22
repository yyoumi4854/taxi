// react, react-native
import React from 'react';
import {View} from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {SvgXml} from 'react-native-svg';

// assets, utils, realm
import {svg} from '../../assets/svg';

// component

// style
import {CreateButton as Style} from '../../styles/home.styles';

interface PropsType {
  currentDate: string;
}

const CreateButton = ({currentDate}: PropsType) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const onNavigationPress = () => {
    navigation.navigate('Record', {postDate: currentDate});
  };

  return (
    <Style.button onPress={onNavigationPress}>
      <View>
        <SvgXml xml={svg.plus} fill="#FFA800" />
      </View>
    </Style.button>
  );
};

export default CreateButton;
