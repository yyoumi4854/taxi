// react, react-native
import React from 'react';

// types, utils
import {RecordType} from '../../types/types';
import {numberCommas} from '../../utils/calculate';

// style
import {MonthBusinessAmount as Style} from '../../styles/home.styles';

interface PropsType {
  monthTotalData: RecordType;
}

const MonthBusinessAmount = ({monthTotalData}: PropsType) => {
  return (
    <Style.container>
      <Style.topWrap>
        <Style.title>영업금액</Style.title>
        <Style.moneyValueText>
          {numberCommas(monthTotalData.operatingAmount)}원
        </Style.moneyValueText>
      </Style.topWrap>

      <Style.bottomWrap>
        <Style.bottomBox>
          <Style.subTitle>카드</Style.subTitle>
          <Style.subValueText>
            {numberCommas(monthTotalData.card)}원
          </Style.subValueText>
        </Style.bottomBox>

        <Style.line></Style.line>

        <Style.bottomBox>
          <Style.subTitle>현금</Style.subTitle>
          <Style.subValueText>
            {numberCommas(monthTotalData.cash)}원
          </Style.subValueText>
        </Style.bottomBox>
      </Style.bottomWrap>
    </Style.container>
  );
};

export default MonthBusinessAmount;
