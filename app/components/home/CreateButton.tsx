// react, react-native
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SvgXml} from 'react-native-svg';

// library

// assets, utils, realm
import {svg} from '../../assets/svg';

// component

// style
import {CreateButton as Style} from '../../styles/home.styles';

interface PropsType {
  currentDate: string;
}

const CreateButton = ({currentDate}: PropsType) => {
  const navigation = useNavigation();

  const onNavigationPress = () => {
    navigation.navigate('Record', {selectedDate: currentDate});
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
