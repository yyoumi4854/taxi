// react, react-native
import {SvgXml} from 'react-native-svg';

// library

// assets, utils, realm
import {svg} from '../../assets/svg';

// component
import RecordBox from '../common/RecordBox';

// style
import {DrivingInfo as Style} from '../../styles/record.styles';

const DrivingInfo = () => {
  return (
    <Style.container>
      <Style.title>운행 정보</Style.title>

      <Style.RecordBoxWrap>
        <RecordBox title="카드" state={10} />

        {/* + */}
        <SvgXml xml={svg.plus} width={10} fill="#333" />

        <RecordBox title="현금" state={10} />

        {/* = */}
        <SvgXml xml={svg.equals} />

        <RecordBox title="영업금액" state={10} option="orange" />
      </Style.RecordBoxWrap>

      <Style.RecordBoxWrap>
        <RecordBox title="LPG 주입량" state={10} unit="L" />

        {/* * */}
        <SvgXml xml={svg.multiplication} />

        <RecordBox title="LPG 단가" state={10} />

        {/* = */}
        <SvgXml xml={svg.equals} />

        <RecordBox title="LPG 충전 금액" state={10} option="orange" />
      </Style.RecordBoxWrap>

      <Style.RecordBoxWrap>
        <RecordBox title="주행거리" state={10} unit="km" />

        {/* / */}
        <SvgXml xml={svg.division} />

        <RecordBox title="LPG 주입량" state={10} unit="L" />

        {/* = */}
        <SvgXml xml={svg.equals} />

        <RecordBox title="연비" state={10} unit="km/L" option="orange" />
      </Style.RecordBoxWrap>

      <Style.RecordBoxWrap>
        <RecordBox title="주행거리" state={10} unit="km" />

        {/* / */}
        <SvgXml xml={svg.division} />

        <RecordBox title="연비" state={10} unit="km/L" />

        {/* = */}
        <SvgXml xml={svg.equals} />

        <RecordBox title="LPG 사용량" state={10} unit="L" option="orange" />
      </Style.RecordBoxWrap>
    </Style.container>
  );
};

export default DrivingInfo;
