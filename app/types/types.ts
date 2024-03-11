export interface RecordType {
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
