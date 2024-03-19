import Realm from 'realm';

import {RecordSchema} from './schema';
import {RecordType} from '../types/types';

// Realm 데이터베이스 연결
const realm = new Realm({schema: [RecordSchema]});

// CREATE : 새로운 기록 추가
export const createRecord = (newData: RecordType) => {
  realm.write(() => {
    realm.create('Record', newData);
  });

  console.log('데이터가 생성되었습니다.');
};

// READ_All
export const readAllRecord = () => {
  return realm.objects<RecordType>('Record');
};

// READ : 선택한 날짜의 데이터
export const readSelectDateRecord = (selectDate: string) => {
  const selectDateData = realm
    .objects('Record')
    .filtered(`date = '${selectDate}'`)[0];

  return selectDateData;
};

// UPDATE
export const updateRecord = (newData: RecordType) => {
  const selectDateData = realm
    .objects('Record')
    .filtered(`date = '${newData.date}'`)[0];

  if (selectDateData) {
    realm.write(() => {
      selectDateData.card = newData.card;
      selectDateData.cash = newData.cash;
      selectDateData.lpgInjectionVolume = newData.lpgInjectionVolume;
      selectDateData.lpgUnitPrice = newData.lpgUnitPrice;
      selectDateData.mileage = newData.mileage;
      selectDateData.businessDistance = newData.businessDistance;
      selectDateData.toll = newData.toll;
      selectDateData.operatingAmount = newData.operatingAmount;
      selectDateData.lpgChargeAmount = newData.lpgChargeAmount;
      selectDateData.fuelEfficiency = newData.fuelEfficiency;
      selectDateData.lpgUsage = newData.lpgUsage;
    });
    console.log('데이터가 수정되었습니다.');
  }
};

// DELETE
