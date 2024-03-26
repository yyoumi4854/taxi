// react, react-native
import React from 'react';

// library
import {useRecoilValue} from 'recoil';
import dayjs from 'dayjs';

// recoil, utils
import {recordState} from '../../recoil/atoms';
import {numberCommas} from '../../utils/calculate';

// style
import {YearBusinessAmount as Style} from '../../styles/home.styles';

const MonthBusinessAmount = () => {
  const currentYear = dayjs().format('YYYY');
  const recordData = useRecoilValue(recordState);

  // 현재 년도의 데이터 가져오기
  const selectYearData = recordData.filter(data => {
    return dayjs(data.date).format('YYYY') === currentYear;
  });

  // 현재 년도의 연간 영업 금액 구하기
  const yearBusinessAmount = selectYearData.reduce((acc, curr) => {
    return acc + curr.operatingAmount;
  }, 0);

  return (
    <Style.container>
      <Style.title>연간 영업 금액</Style.title>
      <Style.valueText>{numberCommas(yearBusinessAmount)}원</Style.valueText>
    </Style.container>
  );
};

export default MonthBusinessAmount;
