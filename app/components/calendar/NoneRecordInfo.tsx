// react, react-native
import React from 'react';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

// component
import BasicsButton from '../common/BasicsButton';

// style
import {NoneRecordInfo as Style} from '../../styles/calendar.styles';

interface PropsType {
  selectDate: string;
}

const NoneRecordInfo = ({selectDate}: PropsType) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const onNavigationPress = () => {
    navigation.navigate('Record', {postDate: selectDate});
  };

  return (
    <Style.container>
      <Style.text>운행정보가 없습니다.</Style.text>
      <Style.ButtonWrap>
        <BasicsButton text="추가하기" onButtonPress={onNavigationPress} />
      </Style.ButtonWrap>
    </Style.container>
  );
};
export default NoneRecordInfo;
