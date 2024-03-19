// react, react-native
import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// library
import Realm from 'realm';

// realm
import {RecordSchema} from '../realm/schema';

// component
import SubHeader from '../components/record/SubHeader';
import DrivingInfoRecord from '../components/record/DrivingInfoRecord';
import DrivingInfo from '../components/record/DrivingInfo';
import ButtonWrap from '../components/record/ButtonWrap';

// style
import {Record as Style} from '../styles/record.styles';
import * as RecordReducer from '../reducers/recordReducer';

type RootStackParamList = {
  Profile: {postDate: string};
};

type profileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;

// 추가하기(+버튼 클릭시), 수정하기(달력에서 날짜 클릭, 수정 클릭)
const Record = ({route}: profileProps) => {
  const {postDate} = route.params;
  const realm = useRef<Realm>();

  const [selectDate, setSelectDate] = useState(postDate); // 선택한 날짜
  const [record, setRecord] = useState(''); // CREATE or UPDATE
  const [state, dispatch] = useReducer(
    RecordReducer.reducer,
    RecordReducer.initialRecord,
  );

  // selectDate가 realm에 있는지 체크
  const readDB = useCallback(() => {
    const selectDateData = realm.current
      ?.objects('Record')
      .filtered(`date = '${selectDate}'`)[0];

    if (selectDateData) {
      setRecord('UPDATE'); // 데이터 수정
      dispatch({type: 'initialize', payload: selectDateData});
    } else {
      setRecord('CREATE'); // 데이터 생성
      const initialData = {...RecordReducer.initialRecord, date: selectDate};
      dispatch({type: 'initialize', payload: initialData});
    }
  }, [selectDate]);

  // selectDate가 변경되면 readDB()렌더링
  useEffect(() => {
    readDB();
  }, [readDB, selectDate]);

  const openLocalDB = async () => {
    realm.current = await Realm.open({schema: [RecordSchema]});
    console.log('realmDB 열기!');

    readDB();
  };

  // realmDB 열기, 닫기
  useEffect(() => {
    openLocalDB();

    return () => {
      realm.current?.close();
      console.log('realmDB 닫기!');
    };
  }, []);

  const createDB = () => {
    realm.current?.write(() => {
      realm.current?.create('Record', state);
    });

    console.log('데이터가 생성되었습니다.');
    readDB();
  };

  const updateDB = () => {
    const selectDateData = realm.current
      ?.objects('Record')
      .filtered(`date = '${selectDate}'`)[0];

    if (selectDateData) {
      realm.current?.write(() => {
        selectDateData.card = state.card;
        selectDateData.cash = state.cash;
        selectDateData.lpgInjectionVolume = state.lpgInjectionVolume;
        selectDateData.lpgUnitPrice = state.lpgUnitPrice;
        selectDateData.mileage = state.mileage;
        selectDateData.businessDistance = state.businessDistance;
        selectDateData.toll = state.toll;
        selectDateData.operatingAmount = state.operatingAmount;
        selectDateData.lpgChargeAmount = state.lpgChargeAmount;
        selectDateData.fuelEfficiency = state.fuelEfficiency;
        selectDateData.lpgUsage = state.lpgUsage;
      });
      console.log('데이터가 수정되었습니다.');
      readDB();
    }
  };

  // const readAllDB = () => {
  //   const data = realm.current?.objects('Record');

  //   if (data) {
  //     console.log('현재 데이터:', data);
  //   } else {
  //     console.log('데이터가 없습니다.', data);
  //   }
  // };

  // const deleteAllDB = () => {
  //   const data = realm.current?.objects('Record');

  //   realm.current?.write(() => {
  //     realm.current?.delete(data);
  //   });
  //   console.log('데이터가 전부 삭제되었습니다.');
  //   readAllDB();
  // };

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
      <ButtonWrap record={record} createDB={createDB} updateDB={updateDB} />

      {/* <Button onPress={readAllDB} title={'전체 데이터 읽기'} /> */}
      {/* <Button onPress={createDB} title={'데이터 추가'} />
      <Button onPress={readDB} title={'데이터 읽기'} />
      <Button onPress={deleteAllDB} title={'전체 데이터 삭제'} /> */}
    </Style.container>
  );
};

export default Record;
