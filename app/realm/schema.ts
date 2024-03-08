// 테스트 스키마
export const personSchema = {
  name: 'member',
  properties: {
    name: 'string',
    age: 'string',
    // pets: {type: 'list'},
  },
  primaryKey: 'name',
};

// 운행기록 스키마
export const RecordSchema = {
  name: 'Record',
  properties: {
    date: 'string', // 날짜는 문자열로 저장할 수 있습니다.
    // 기본값을 지정할 수 있습니다.
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
