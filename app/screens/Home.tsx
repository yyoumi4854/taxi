// react, react-native
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';

// library
import dayjs from 'dayjs';

// assets, utils, realm
import {useRecoilState} from 'recoil';
import {recordState} from '../recoil/atoms.ts';
import {readAllRecord} from '../realm/recordRealmFunctions.ts';

// component
import YearBusinessAmount from '../components/home/YearBusinessAmount.tsx';
import MonthCalendar from '../components/home/MonthCalendar.tsx';
import MonthBusinessAmount from '../components/home/MonthBusinessAmount.tsx';
import MonthRecordInfo from '../components/home/MonthRecordInfo.tsx';
import CreateButton from '../components/home/CreateButton.tsx';

// style
import {Home as Style} from '../styles/home.styles.ts';

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

const Home = () => {
  // 현재 날짜: 년-월-일
  const currentMonth = dayjs().format('YYYY-MM');
  const [selectMonth, setSelectMonth] = useState(currentMonth);
  const [recordData, setRecordData] = useRecoilState(recordState);

  useEffect(() => {
    const data = readAllRecord();

    /*
    setRecordData 함수는 Recoil 상태를 업데이트하는 함수입니다. 
    Recoil 상태를 업데이트할 때는 상태의 이전 값을 변경하지 않고 새로운 값을 전달해야 합니다. 
    이를 위해 객체나 배열을 새로 생성하여 이전 상태를 변경하지 않고 새로운 상태를 전달해야 합니다.
    따라서 data.map(record => ({...record}))를 사용하여 데이터의 각 요소를 복제하고 
    새로운 배열을 생성한 후, 이 배열을 setRecordData 함수에 전달합니다. 
    이렇게 하면 Recoil 상태가 변경되고, 해당 변경 내용이 React 컴포넌트에 반영됩니다.
     */
    setRecordData(data.map(record => ({...record})));
  }, [setRecordData]);

  // 선택한 달의 데이터 필터
  const selectMonthData = recordData.filter(data => {
    return dayjs(data.date).format('YYYY-MM') === selectMonth;
  });

  const monthTotalData = selectMonthData.reduce(
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
      date: selectMonth, // 날짜
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

  monthTotalData.lpgUnitPrice = selectMonthData.length
    ? Math.round(monthTotalData.lpgUnitPrice / selectMonthData.length)
    : 0; // LPG 평균 단가
  monthTotalData.lpgChargeAmount =
    monthTotalData.lpgInjectionVolume * monthTotalData.lpgUnitPrice; // LPG 충전 금액
  monthTotalData.fuelEfficiency = monthTotalData.lpgInjectionVolume
    ? Math.round(monthTotalData.mileage / monthTotalData.lpgInjectionVolume)
    : 0; // 연비
  monthTotalData.lpgUsage =
    monthTotalData.mileage / monthTotalData.lpgInjectionVolume
      ? Math.round(
          monthTotalData.mileage /
            (monthTotalData.mileage / monthTotalData.lpgInjectionVolume),
        )
      : 0; // LPG 사용량

  return (
    <Style.container>
      <ScrollView>
        {/* 연간 영업 금액 */}
        <YearBusinessAmount />

        {/* 월별 운행 기록 */}
        <Style.bottomContainer>
          {/* 월별 달력 */}
          <MonthCalendar
            currentMonth={currentMonth}
            selectMonth={selectMonth}
            setSelectMonth={setSelectMonth}
          />

          {/* 이번달 영업 금액 */}
          <MonthBusinessAmount monthTotalData={monthTotalData} />

          {/* 이번달 운행 정보 */}
          <MonthRecordInfo monthTotalData={monthTotalData} />
        </Style.bottomContainer>
      </ScrollView>

      {/* create 버튼 */}
      <CreateButton />
    </Style.container>
  );
};

export default Home;
