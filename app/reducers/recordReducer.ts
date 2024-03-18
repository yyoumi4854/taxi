// types
import {RecordType} from '../types/types';

// 초기 상태
export const initialRecord: RecordType = {
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

// 리듀서 함수
export const reducer = (
  state: RecordType,
  action: {type: string; payload?: any},
) => {
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
