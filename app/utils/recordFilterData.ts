// library
import dayjs from 'dayjs';
import {RecordType} from '../types/types';

/*
1. 월별 데이터 Home.tsx
2. 년별 영업 금액 YearBusinessAmount.tsx
3. 마크체크 CalendarView.tsx
 */

// 선택한 년도의 데이터 가져오기
export const selectYearData = (recordData: RecordType[], year: string) => {
  return recordData.filter(data => dayjs(data.date).format('YYYY') === year);
};

// Chart
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
