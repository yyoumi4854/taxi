// react, react-native
import React, {useCallback, useEffect, useReducer, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// component
import SubHeader from '../components/record/SubHeader';
import DrivingInfoRecord from '../components/record/DrivingInfoRecord';
import DrivingInfo from '../components/record/DrivingInfo';
import ButtonWrap from '../components/record/ButtonWrap';

// style
import {Record as Style} from '../styles/record.styles';
import * as RecordReducer from '../reducers/recordReducer';
import {readSelectDateRecord} from '../realm/recordRealmFunctions';

type RootStackParamList = {
  Record: {postDate: string};
};

type RecordScreenProps = NativeStackScreenProps<RootStackParamList, 'Record'>;

// 추가하기(+버튼 클릭시), 수정하기(달력에서 날짜 클릭, 수정 클릭)
const Record = ({route}: RecordScreenProps) => {
  const {postDate} = route.params;

  const [selectDate, setSelectDate] = useState(postDate); // 선택한 날짜
  const [record, setRecord] = useState(''); // CREATE or UPDATE
  const [state, dispatch] = useReducer(
    RecordReducer.reducer,
    RecordReducer.initialRecord,
  );

  // selectDate가 realm에 있는지 체크
  const readDB = useCallback(() => {
    const selectDateData = readSelectDateRecord(selectDate);

    if (selectDateData) {
      setRecord('UPDATE'); // 데이터 수정
      dispatch({type: 'initialize', payload: selectDateData});
    } else {
      setRecord('CREATE'); // 데이터 생성
      const initialData = {...RecordReducer.initialRecord, date: selectDate};
      dispatch({type: 'initialize', payload: initialData});
    }
  }, [selectDate]);

  useEffect(() => {
    readDB();
  }, [readDB, selectDate]);

  return (
    <Style.container>
      {/* 헤더 */}
      <SubHeader selectDate={selectDate} setSelectDate={setSelectDate} />

      <Style.scrollView>
        {/* 기본 운행 정보 기록하기 */}
        <DrivingInfoRecord state={state} dispatch={dispatch} />

        {/* 운행정보 */}
        <DrivingInfo state={state} />
      </Style.scrollView>

      {/* 취소, 저장 */}
      <ButtonWrap record={record} state={state} />
    </Style.container>
  );
};

export default Record;
