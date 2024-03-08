// react, react-native
import {Text, View, Button} from 'react-native';

import BasicsButton from '../components/BasicsButton.tsx';

import Realm from 'realm';
import {useEffect, useRef, useState} from 'react';
import {RecordSchema} from '../realm/schema.ts';

interface RecordType {
  date: string;
  card: number;
  cash: number; // 현금
  lpgInjectionVolume: number; // LPG 주입량
  lpgUnitPrice: number; // LPG 단가
  mileage: number; // 주행거리
  businessDistance: number; // 영업거리
  toll: number; // 통행료
  operatingAmount: number; // 영업금액
  lpgChargeAmount: number; // LPG 충전 금액
  fuelEfficiency: number; // 연비
  lpgUsage: number; // LPG 사용량
}

const Home = () => {
  const [recordData, setRecordData] = useState<RecordType[]>([]);

  const realm = useRef<Realm>();

  useEffect(() => {
    console.log('나오나???');

    //realmDB 오픈
    openLocalDB();

    return () => {
      realm.current?.close();
    };
  }, []);

  const openLocalDB = async () => {
    realm.current = await Realm.open({schema: [RecordSchema]});
    console.log('Realm is located at: ' + realm.current.path);
  };

  const createDB = () => {
    const newData = {
      date: '2024-03-08',
      card: 100000,
      cash: 100000, // 현금
      lpgInjectionVolume: 10, // LPG 주입량
      lpgUnitPrice: 10, // LPG 단가
      mileage: 10, // 주행거리
      businessDistance: 100, // 영업거리
      toll: 1000, // 통행료
      operatingAmount: 200000, // 영업금액
      lpgChargeAmount: 200000, // LPG 충전 금액
      fuelEfficiency: 10, // 연비
      lpgUsage: 20, // LPG 사용량
    };

    realm.current?.write(() => {
      realm.current?.create('Record', newData);
    });
  };

  const readAllDB = () => {
    const recordData = realm.current?.objects('Record');
    console.log(recordData);
    setRecordData(recordData); // 계속 오류나는 이유를 모르겠음 디버깅하고 싶다.
  };

  return (
    <View>
      <Text>홈 스크린</Text>

      <Button onPress={createDB} title={'테스트'} />

      {/* <Text>{readAllDB}</Text> */}
      <BasicsButton />
    </View>
  );
};

export default Home;
