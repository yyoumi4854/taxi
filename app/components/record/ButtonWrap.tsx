// react, react-native
import React from 'react';
import {useNavigation} from '@react-navigation/native';

// realm, types
import {
  createRecord,
  readAllRecord,
  updateRecord,
} from '../../realm/recordRealmFunctions';
import {RecordType} from '../../types/types';

// library
import {useSetRecoilState} from 'recoil';

// recoil
import {recordState} from '../../recoil/atoms';

// component
import BasicsButton from '../common/BasicsButton';

// style
import {ButtonWrap as Style} from '../../styles/record.styles';

interface PropsType {
  record: string;
  state: RecordType;
}

const ButtonWrap = ({record, state}: PropsType) => {
  const navigation = useNavigation();
  const setRecordData = useSetRecoilState(recordState);

  const onGoBackPress = () => {
    navigation.goBack();
  };

  const onSavePress = () => {
    if (record === 'CREATE') {
      createRecord(state);
    } else {
      updateRecord(state);
    }

    const data = readAllRecord();
    setRecordData(data.map(record => ({...record})));

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
