// react, react-native
import {useNavigation} from '@react-navigation/native';
import {SvgXml} from 'react-native-svg';

// library

// assets, utils, realm
import {svg} from '../../assets/svg';

// component

// style
import {SubHeader as Style} from '../../styles/record.styles';

const SubHeader = () => {
  const navigation = useNavigation();
  const onGoBackPress = () => {
    navigation.goBack();
  };

  return (
    <Style.container>
      <Style.leftContent>
        <Style.iconButton onPress={onGoBackPress}>
          <SvgXml xml={svg.prev} width={9.33} height={16} />
        </Style.iconButton>

        <Style.dayText>2024년 2월 12일</Style.dayText>
      </Style.leftContent>

      <Style.iconButton>
        <SvgXml xml={svg.calendar} fill={'#FFA800'} />
      </Style.iconButton>
    </Style.container>
  );
};

export default SubHeader;
