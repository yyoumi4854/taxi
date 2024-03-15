// react, react-native

// library

// assets, utils, realm

// component
import BasicsButton from '../common/BasicsButton';

// style
import {ButtonWrap as Style} from '../../styles/record.styles';
import {useNavigation} from '@react-navigation/native';

const ButtonWrap = () => {
  const navigation = useNavigation();
  const onGoBackPress = () => {
    navigation.goBack();
  };

  return (
    <Style.container>
      <BasicsButton text="취소" option="cancel" onButtonPress={onGoBackPress} />
      <BasicsButton text="저장" onButtonPress={onGoBackPress} />
    </Style.container>
  );
};

export default ButtonWrap;
