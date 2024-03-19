// 테스트 스키마
export const TestSchema = {
  name: 'Test',
  properties: {
    _id: 'int',
    name: 'string',
    age: 'int',
  },
  primaryKey: '_id',
};

// 운행기록 스키마
export const RecordSchema = {
  name: 'Record',
  properties: {
    date: 'string',
    card: 'int',
    cash: 'int', // 현금
    lpgInjectionVolume: 'int', // LPG 주입량
    lpgUnitPrice: 'int', // LPG 단가
    mileage: 'int', // 주행거리
    businessDistance: 'int', // 영업거리
    toll: 'int', // 통행료
    operatingAmount: 'int', // 영업금액
    lpgChargeAmount: 'int', // LPG 충전 금액
    fuelEfficiency: 'int', // 연비
    lpgUsage: 'int', // LPG 사용량
  },
  primaryKey: 'date',
};
