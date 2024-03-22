// react, react-native
import React from 'react';

// types, utils
import {RecordType} from '../../types/types';
import {numberCommas} from '../../utils/calculate';

// component
import RecordBox from '../common/RecordBox';

// style
import {MonthRecordInfo as Style} from '../../styles/home.styles';
import {RecordBox as RecordBoxStyle} from '../../styles/common.styles';

interface PropsType {
  monthTotalData: RecordType;
}

const MonthRecordInfo = ({monthTotalData}: PropsType) => {
  return (
    <Style.container>
      <RecordBoxStyle.wrap>
        <RecordBox
          title="LPG 주입량"
          state={numberCommas(monthTotalData.lpgInjectionVolume)}
          unit="L"
        />
        <RecordBox
          title="LPG 평균 단가"
          state={numberCommas(monthTotalData.lpgUnitPrice)}
        />
        <RecordBox
          title="LPG 충전 금액"
          state={numberCommas(monthTotalData.lpgChargeAmount)}
          option="orange"
        />
      </RecordBoxStyle.wrap>

      <RecordBoxStyle.wrap>
        <RecordBox
          title="주행거리"
          state={numberCommas(monthTotalData.mileage)}
          unit="km"
        />
        <RecordBox
          title="영업거리"
          state={numberCommas(monthTotalData.businessDistance)}
          unit="km"
        />
        <RecordBox title="통행료" state={numberCommas(monthTotalData.toll)} />
      </RecordBoxStyle.wrap>

      <RecordBoxStyle.wrap>
        <RecordBox
          title="연비"
          state={numberCommas(monthTotalData.fuelEfficiency)}
          unit="km/L"
          option="orange"
        />
        <RecordBox
          title="LPG 사용량"
          state={numberCommas(monthTotalData.lpgUsage)}
          unit="L"
          option="orange"
        />
      </RecordBoxStyle.wrap>
    </Style.container>
  );
};

export default MonthRecordInfo;
