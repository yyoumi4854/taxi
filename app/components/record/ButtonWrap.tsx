// component
import BasicsButton from '../common/BasicsButton';

// style
import {ButtonWrap as Style} from '../../styles/record.styles';
import {useNavigation} from '@react-navigation/native';

interface PropsType {
  record: string;
  createDB: () => void;
  updateDB: () => void;
}

const ButtonWrap = ({record, createDB, updateDB}: PropsType) => {
  const navigation = useNavigation();

  const onGoBackPress = () => {
    navigation.goBack();
  };

  const onSavePress = () => {
    if (record === 'CREATE') {
      createDB();
    } else {
      updateDB();
    }

    navigation.goBack();
  };

  return (
    <Style.container>
      <BasicsButton text="취소" option="cancel" onButtonPress={onGoBackPress} />
      <BasicsButton text="저장" onButtonPress={onSavePress} />
    </Style.container>
  );
};

export default ButtonWrap;
