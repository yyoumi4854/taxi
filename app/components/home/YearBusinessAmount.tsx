// react, react-native
import React from 'react';

// library
import {useRecoilValue} from 'recoil';
import dayjs from 'dayjs';

// recoil, utils
import {recordState} from '../../recoil/atoms';
import {numberCommas} from '../../utils/calculate';
import {selectYearBusinessAmount} from '../../utils/recordCustomData';

// style
import {YearBusinessAmount as Style} from '../../styles/home.styles';

const MonthBusinessAmount = () => {
  const currentYear = dayjs().format('YYYY');
  const recordData = useRecoilValue(recordState);

  // 선택한 연도의 연간 영업금액 데이터
  const yearBusinessAmount = selectYearBusinessAmount(recordData, currentYear);

  return (
    <Style.container>
      <Style.title>연간 영업 금액</Style.title>
      <Style.valueText>{numberCommas(yearBusinessAmount)}원</Style.valueText>
    </Style.container>
  );
};

export default MonthBusinessAmount;
