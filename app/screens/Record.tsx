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
import {Button, Text} from 'react-native';

// const initialRecordState = {
//   date: selectDate,
//   card: 0, // 카드
//   cash: 0, // 현금
//   lpgInjectionVolume: 0, // LPG 주입량
//   lpgUnitPrice: 0, // LPG 단가
//   mileage: 0, // 주행거리
//   businessDistance: 0, // 영업거리
//   toll: 0, // 통행료
//   operatingAmount: 0, // 영업금액
//   lpgChargeAmount: 0, // LPG 충전 금액
//   fuelEfficiency: 0, // 연비
//   lpgUsage: 0, // LPG 사용량
// };

// 추가하기(+버튼 클릭시), 수정하기(달력에서 날짜 클릭, 수정 클릭)
const Record = ({route}) => {
  const {postDate} = route.params;

  const [selectDate, setSelectDate] = useState(postDate); // 선택한 날짜

  const realm = useRef<Realm>();

  // selectDate에 해당하는 데이터 있는지 체크 및 가져오기
  const readDB = useCallback(() => {
    const selectDateData = realm.current
      ?.objects('Record')
      .filtered(`date = '${selectDate}'`)[0];

    if (selectDateData) {
      console.log(`${selectDate} 데이터:`, selectDateData);
    } else {
      console.log(`${selectDate}데이터가 없습니다.`);
    }
  }, [selectDate]);

  // 선택한 날짜가 바뀌면 useReducer의 기본값 바뀌게 하기
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
        <DrivingInfoRecord />

        {/* 운행정보 */}
        <DrivingInfo />
      </Style.scrollView>

      {/* 취소, 저장 */}
      <ButtonWrap />
      {/* <Text>{recordData.date}</Text>
      <Text>{recordData.card}</Text>
      <Button onPress={createDB} title={'데이터 추가'} />
      <Button onPress={readDB} title={'데이터 읽기'} />
      <Button onPress={readAllDB} title={'전체 데이터 읽기'} />
      <Button onPress={deleteAllDB} title={'전체 데이터 삭제'} /> */}
    </Style.container>
  );
};

export default Record;
