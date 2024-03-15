// react, react-native
import {useCallback, useEffect, useReducer, useRef, useState} from 'react';

// library
import Realm from 'realm';

// assets, utils, realm
import {RecordSchema} from '../realm/schema';

// component
import SubHeader from '../components/record/SubHeader';
import DrivingInfoRecord from '../components/record/DrivingInfoRecord';
import DrivingInfo from '../components/record/DrivingInfo';
import ButtonWrap from '../components/record/ButtonWrap';

// style
import {Record as Style} from '../styles/record.styles';
import {RecordType} from '../types/types';

// 초기 상태
const initialRecord: RecordType = {
  date: '', // 날짜
  card: 0, // 카드
  cash: 0, // 현금
  lpgInjectionVolume: 0, // LPG 주입량
  lpgUnitPrice: 0, // LPG 단가
  mileage: 0, // 주행거리
  businessDistance: 0, // 영업거리
  toll: 0, // 통행료
  operatingAmount: 0, // 영업금액
  lpgChargeAmount: 0, // LPG 충전 금액
  fuelEfficiency: 0, // 연비
  lpgUsage: 0, // LPG 사용량
};
// };

// 리듀서 함수
const reducer = (state: RecordType, action: {type: string; payload?: any}) => {
  switch (action.type) {
    case 'initialize':
      return {...state, ...action.payload};
    case 'updateInput':
      return {...state, [action.payload.name]: action.payload.value};
    case 'updateOperatingAmount':
      return {...state, operatingAmount: state.card + state.cash};
    case 'updateLpgChargeAmount':
      return {
        ...state,
        lpgChargeAmount: state.lpgInjectionVolume * state.lpgUnitPrice,
      };
    case 'updateFuelEfficiency':
      return {
        ...state,
        fuelEfficiency: state.mileage / state.lpgInjectionVolume,
      };
    case 'updateLpgUsage':
      return {...state, lpgUsage: state.mileage / state.fuelEfficiency};
    default:
      return state;
  }
};

// 추가하기(+버튼 클릭시), 수정하기(달력에서 날짜 클릭, 수정 클릭)
const Record = ({route}) => {
  const {postDate} = route.params;

  const realm = useRef<Realm>();

  const [selectDate, setSelectDate] = useState(postDate); // 선택한 날짜
  const [state, dispatch] = useReducer(reducer, initialRecord);

  // selectDate가 realm에 있는지 체크 - 있으면 realm에 있는 값으로, 아닐 경우 selectDate만 적용
  const readDB = useCallback(() => {
    const selectDateData = realm.current
      ?.objects('Record')
      .filtered(`date = '${selectDate}'`)[0];

    if (selectDateData) {
      dispatch({type: 'initialize', payload: selectDateData});
    } else {
      const initialData = {...initialRecord, date: selectDate};
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

  // 임시로 사용할 realm
  const readAllDB = () => {
    const data = realm.current?.objects('Record');

    if (data) {
      console.log('현재 데이터:', data);
    } else {
      console.log('데이터가 없습니다.', data);
    }
  };

  const createDB = () => {
    const newData = {
      date: '2024-03-12',
      card: 13, // 카드
      cash: 13, // 현금
      lpgInjectionVolume: 13, // LPG 주입량
      lpgUnitPrice: 13, // LPG 단가
      mileage: 13, // 주행거리
      businessDistance: 13, // 영업거리
      toll: 13, // 통행료
      operatingAmount: 13, // 영업금액
      lpgChargeAmount: 13, // LPG 충전 금액
      fuelEfficiency: 13, // 연비
      lpgUsage: 13, // LPG 사용량
    };

    realm.current?.write(() => {
      realm.current?.create('Record', newData);
    });

    console.log('데이터가 생성되었습니다.');
    readAllDB();
  };

  const deleteAllDB = () => {
    const data = realm.current?.objects('Record');

    realm.current?.write(() => {
      realm.current?.delete(data);
    });
    console.log('데이터가 전부 삭제되었습니다.');
    readAllDB();
  };

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
      <ButtonWrap />
      {/* <Text>{date}나와랏</Text>
      <Text>{card}나와랏</Text> */}
      {/* 
      <Button onPress={createDB} title={'데이터 추가'} />
      <Button onPress={readDB} title={'데이터 읽기'} />
      <Button onPress={readAllDB} title={'전체 데이터 읽기'} />
      <Button onPress={deleteAllDB} title={'전체 데이터 삭제'} /> */}
    </Style.container>
  );
};

export default Record;
