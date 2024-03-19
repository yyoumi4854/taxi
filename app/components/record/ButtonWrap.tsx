// realm
import {createRecord, updateRecord} from '../../realm/recordRealmFunctions';

// component
import BasicsButton from '../common/BasicsButton';

// style
import {ButtonWrap as Style} from '../../styles/record.styles';
import {useNavigation} from '@react-navigation/native';
import {RecordType} from '../../types/types';

interface PropsType {
  record: string;
  state: RecordType;
}

const ButtonWrap = ({record, state}: PropsType) => {
  const navigation = useNavigation();

  const onGoBackPress = () => {
    navigation.goBack();
  };

  const onSavePress = () => {
    if (record === 'CREATE') {
      createRecord(state);
    } else {
      updateRecord(state);
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
