export interface RecordType {
  date: string;
  card: number; // 카드
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

export interface RecordBoxType {
  // title: string;
  title:
    | '카드'
    | '현금'
    | 'LPG 주입량'
    | 'LPG 단가'
    | 'LPG 평균 단가'
    | '주행거리'
    | '영업거리'
    | '통행료'
    | '영업금액'
    | 'LPG 충전 금액'
    | '연비'
    | 'LPG 사용량';
  state: number | string;
  unit?: '원' | 'km' | 'km/L' | 'L';
  option?: 'basics' | 'orange';
}

export interface RecordInputBoxType extends RecordBoxType {
  category: Exclude<keyof RecordType, 'date'>;
}
