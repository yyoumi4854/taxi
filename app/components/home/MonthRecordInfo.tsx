// react, react-native

// library

// assets, utils, realm

// component
import RecordBox from '../common/RecordBox';

// style
import {MonthRecordInfo as Style} from '../../styles/home.styles';
import {RecordBox as RecordBoxStyle} from '../../styles/common.styles';

const MonthRecordInfo = () => {
  return (
    <Style.container>
      <RecordBoxStyle.wrap>
        <RecordBox title="LPG 주입량" state={10} unit="L" />
        <RecordBox title="LPG 단가" state={10} />
        <RecordBox title="LPG 충전 금액" state={10} option="orange" />
      </RecordBoxStyle.wrap>

      <RecordBoxStyle.wrap>
        <RecordBox title="주행거리" state={10} unit="km" />
        <RecordBox title="영업거리" state={10} unit="km" />
        <RecordBox title="통행료" state={10} />
      </RecordBoxStyle.wrap>

      <RecordBoxStyle.wrap>
        <RecordBox title="연비" state={10} unit="km/L" option="orange" />
        <RecordBox title="LPG 사용량" state={10} unit="L" option="orange" />
      </RecordBoxStyle.wrap>
    </Style.container>
  );
};

export default MonthRecordInfo;
