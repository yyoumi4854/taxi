// react, react-native
import React from 'react';

// library
import dayjs from 'dayjs';

// realm
import {readSelectDateRecord} from '../../realm/recordRealmFunctions';

// component
import RecordBox from '../common/RecordBox';

// style
import {RecordBox as RecordBoxStyle} from '../../styles/common.styles';
import {RecordInfo as Style} from '../../styles/calendar.styles';
import {RecordType} from '../../types/types';

interface PropsType {
  selectDate: string;
}

const RecordInfo = ({selectDate}: PropsType) => {
  // date가 undefined일 경우의 처리
  if (!readSelectDateRecord(selectDate)) {
    return null;
  }

  const {
    card,
    cash,
    lpgInjectionVolume,
    lpgUnitPrice,
    mileage,
    businessDistance,
    toll,
    operatingAmount,
    lpgChargeAmount,
    fuelEfficiency,
    lpgUsage,
  } = readSelectDateRecord(selectDate) as unknown as RecordType;

  return (
    <Style.container>
      <Style.title>
        {dayjs(selectDate).format('YYYY년 M월 D일')} 운행정보
      </Style.title>

      <RecordBoxStyle.wrap>
        <RecordBox title="카드" state={card} />
        <RecordBox title="현금" state={cash} />
        <RecordBox title="영업금액" state={operatingAmount} option="orange" />
      </RecordBoxStyle.wrap>

      <RecordBoxStyle.wrap>
        <RecordBox title="LPG 주입량" state={lpgInjectionVolume} unit="L" />
        <RecordBox title="LPG 단가" state={lpgUnitPrice} />
        <RecordBox
          title="LPG 충전 금액"
          state={lpgChargeAmount}
          option="orange"
        />
      </RecordBoxStyle.wrap>

      <RecordBoxStyle.wrap>
        <RecordBox title="주행거리" state={mileage} unit="km" />
        <RecordBox title="영업거리" state={businessDistance} unit="km" />
        <RecordBox title="통행료" state={toll} />
      </RecordBoxStyle.wrap>

      <RecordBoxStyle.wrap>
        <RecordBox
          title="연비"
          state={fuelEfficiency}
          unit="km/L"
          option="orange"
        />
        <RecordBox
          title="LPG 사용량"
          state={lpgUsage}
          unit="L"
          option="orange"
        />
      </RecordBoxStyle.wrap>
    </Style.container>
  );
};

export default RecordInfo;
