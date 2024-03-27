// library
import dayjs from 'dayjs';
import {RecordType} from '../types/types';

/*
- 마크체크 CalendarView.tsx
 */

/* Home, Chart에서 사용 */
// 선택한 연도의 데이터 가져오기
export const selectYearData = (recordData: RecordType[], year: string) => {
  return recordData.filter(data => dayjs(data.date).format('YYYY') === year);
};

/* Calendar */
// 달력 마크 표시
export const markData = (recordData: RecordType[]) => {
  const newMarkedDate: Record<string, {marked: true}> = {};

  recordData.forEach(record => {
    if (record.date) {
      newMarkedDate[record.date] = {marked: true};
    }
  });

  return newMarkedDate;
};

/* Home */
// 선택한 달의 데이터 가져오기
export const selectMonthData = (recordData: RecordType[], month: string) => {
  return recordData.filter(
    data => dayjs(data.date).format('YYYY-MM') === month,
  );
};

// 선택한 달의 종합 데이터
/**
<<달마다 합산>>
operatingAmount : 총합 // 영업 금액
card : 총합 // 카드
현금 : 총합 // 현금
lpgInjectionVolume : 총합 // LPG 주입량
lpgUnitPrice : 단가 총합 / 해당달의 갯수 -> 반올림 // LPG 평균 단가
mileage : 총합 // 주행거리
businessDistance : 총합 // 영업거리
toll : 더하기 // 통행료
lpgChargeAmount : 주입량 총합 * LPG 평균 단가 // LPG 충전 금액
fuelEfficiency : 주행거리 총합 / LPG 주입량 총합 -> 반올림 // 연비
lpgUsage : 주행거리 총합 / (주행거리 총합 / LPG 주입량 총합) -> 반올림 // LPG 사용량
 */
export const selectMonthTotalData = (
  recordData: RecordType[],
  month: string,
) => {
  const monthData = selectMonthData(recordData, month);
  const totalData = monthData.reduce(
    (acc, curr) => {
      acc.card += curr.card; // 카드
      acc.cash += curr.cash; // 현금
      acc.lpgInjectionVolume += curr.lpgInjectionVolume; // LPG 주입량
      acc.lpgUnitPrice += curr.lpgUnitPrice; // LPG 단가
      acc.mileage += curr.mileage; // 주행거리
      acc.businessDistance += curr.businessDistance; // 영업거리
      acc.toll += curr.toll; // 통행료
      acc.operatingAmount += curr.operatingAmount; // 영업 금액
      return acc;
    },
    {
      date: month, // 날짜
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
    },
  );

  // LPG 평균 단가
  totalData.lpgUnitPrice = monthData.length
    ? Math.round(totalData.lpgUnitPrice / monthData.length)
    : 0;
  // LPG 충전 금액
  totalData.lpgChargeAmount =
    totalData.lpgInjectionVolume * totalData.lpgUnitPrice;
  // 연비
  totalData.fuelEfficiency = totalData.lpgInjectionVolume
    ? Math.round(totalData.mileage / totalData.lpgInjectionVolume)
    : 0;
  // LPG 사용량
  totalData.lpgUsage =
    totalData.mileage / totalData.lpgInjectionVolume
      ? Math.round(
          totalData.mileage /
            (totalData.mileage / totalData.lpgInjectionVolume),
        )
      : 0;

  return totalData;
};

// 선택한 연도의 연간 영업금액 데이터
export const selectYearBusinessAmount = (
  recordData: RecordType[],
  year: string,
) => {
  return selectYearData(recordData, year).reduce(
    (acc, curr) => acc + curr.operatingAmount,
    0,
  );
};

/* Chart - 월별, 연별 영업금액 데이터 */
type ChartDataObjectTypes = {[key: number]: number};

// Chart_월별 데이터 => [{value: 10, label: '1월'}, {}]
export const chartMonthData = (recordData: RecordType[], year: string) => {
  // 월별 영업금액 저장 => {"2": 8, "3": 324248}
  const monthlyOperatingAmount: ChartDataObjectTypes = {};

  selectYearData(recordData, year).forEach(data => {
    const month = dayjs(data.date).month() + 1;

    if (!monthlyOperatingAmount[month]) {
      monthlyOperatingAmount[month] = data.operatingAmount;
    } else {
      monthlyOperatingAmount[month] += data.operatingAmount;
    }
  });

  // monthlyOperatingAmount객체를 BarChart data에 담을 배열로 변환 => {value: 10, label: '1월'}
  return Object.keys(monthlyOperatingAmount).map(month => ({
    value: monthlyOperatingAmount[parseInt(month, 10)],
    label: `${parseInt(month, 10)}월`,
  }));
};

// Chart_년별 데이터 => [{value: 10, label: '1월'}, {}]
export const chartYearData = (recordData: RecordType[]) => {
  // 년별 영업금액 저장 => {"2024": 324256}
  const yearOperatingAmount: ChartDataObjectTypes = {};

  recordData.forEach(data => {
    const yearData = dayjs(data.date).year(); // dayjs로 연도 추출
    if (!yearOperatingAmount[yearData]) {
      yearOperatingAmount[yearData] = data.operatingAmount;
    } else {
      yearOperatingAmount[yearData] += data.operatingAmount;
    }
  });

  // yearOperatingAmount객체를 BarChart data에 담을 배열로 변환 => [{"label": "2024년", "value": 324256}]
  return Object.keys(yearOperatingAmount).map(yearData => ({
    label: `${yearData}년`,
    value: yearOperatingAmount[parseInt(yearData, 10)],
  }));
};
