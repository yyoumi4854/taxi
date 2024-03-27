// react, react-native
import React from 'react';
import {SvgXml} from 'react-native-svg';

// assets, utils, realm
import {svg} from '../../assets/svg';
import {RecordType} from '../../types/types';

// component
import RecordBox from '../common/RecordBox';

// style
import {DrivingInfo as Style} from '../../styles/record.styles';

interface PropsType {
  state: RecordType;
}

const DrivingInfo = ({state}: PropsType) => {
  const {
    card,
    cash,
    lpgInjectionVolume,
    lpgUnitPrice,
    mileage,
    operatingAmount,
    lpgChargeAmount,
    fuelEfficiency,
    lpgUsage,
  } = state;

  return (
    <Style.container>
      <Style.title>운행 정보</Style.title>

      <Style.RecordBoxWrap>
        <RecordBox title="카드" state={card} />
        <SvgXml xml={svg.plus} width={10} fill="#333" />
        <RecordBox title="현금" state={cash} />
        <SvgXml xml={svg.equals} />
        <RecordBox title="영업금액" state={operatingAmount} option="orange" />
      </Style.RecordBoxWrap>

      <Style.RecordBoxWrap>
        <RecordBox title="LPG 주입량" state={lpgInjectionVolume} unit="L" />
        <SvgXml xml={svg.multiplication} />
        <RecordBox title="LPG 단가" state={lpgUnitPrice} />
        <SvgXml xml={svg.equals} />
        <RecordBox
          title="LPG 충전 금액"
          state={lpgChargeAmount}
          option="orange"
        />
      </Style.RecordBoxWrap>

      <Style.RecordBoxWrap>
        <RecordBox title="주행거리" state={mileage} unit="km" />
        <SvgXml xml={svg.division} />
        <RecordBox title="LPG 주입량" state={lpgInjectionVolume} unit="L" />
        <SvgXml xml={svg.equals} />
        <RecordBox
          title="연비"
          state={fuelEfficiency}
          unit="km/L"
          option="orange"
        />
      </Style.RecordBoxWrap>

      <Style.RecordBoxWrap>
        <RecordBox title="주행거리" state={mileage} unit="km" />
        <SvgXml xml={svg.division} />
        <RecordBox title="연비" state={fuelEfficiency} unit="km/L" />
        <SvgXml xml={svg.equals} />
        <RecordBox
          title="LPG 사용량"
          state={lpgUsage}
          unit="L"
          option="orange"
        />
      </Style.RecordBoxWrap>
    </Style.container>
  );
};

export default DrivingInfo;
