// 영업금액 = 카드 + 현금
export const operatingAmount = (card: number, cash: number) => {
  return card + cash;
};

// LPG 충전 금액 = LPG 주입량 * LPG 단가
export const lpgChargeAmount = (
  lpgInjectionVolume: number,
  lpgUnitPrice: number,
) => {
  return lpgInjectionVolume * lpgUnitPrice;
};

// 연비 = 주행거리 / LPG 주입량
export const fuelEfficiency = (mileage: number, lpgInjectionVolume: number) => {
  return mileage / lpgInjectionVolume;
};

// LPG 사용량 = 주행거리 / 연비
export const lpgUsage = (mileage: number, fuelEfficiencyNum: number) => {
  return mileage / fuelEfficiencyNum;
};

// 숫자 세 자리마다 쉼표 구분하여 표시
export const numberCommas = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
