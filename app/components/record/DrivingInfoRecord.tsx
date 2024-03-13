// react, react-native

// library

// assets, utils, realm

// component
import RecordInputBox from './RecordInputBox';

// style
import {DrivingInfoRecord as Style} from '../../styles/record.styles';

const DrivingInfoRecord = () => {
  return (
    <Style.container>
      <Style.title>기본 운행 정보 기록하기</Style.title>

      {/* 카드, 현금 */}
      <Style.InputBoxWrap>
        <RecordInputBox title="카드" state={0} category="card" />
        <RecordInputBox title="현금" state={0} category="cash" />
      </Style.InputBoxWrap>

      <Style.InputBoxWrap>
        <RecordInputBox
          title="LPG 주입량"
          state={0}
          category="lpgInjectionVolume"
          unit="L"
        />
        <RecordInputBox title="LPG 단가" state={0} category="lpgUnitPrice" />
      </Style.InputBoxWrap>

      <Style.InputBoxWrap>
        <RecordInputBox
          title="주행거리"
          state={0}
          category="mileage"
          unit="km"
        />
        <RecordInputBox
          title="영업거리"
          state={0}
          category="businessDistance"
          unit="km"
        />
      </Style.InputBoxWrap>

      <Style.InputBoxWrap>
        <RecordInputBox title="통행료" state={0} category="toll" />
        <Style.fakeView></Style.fakeView>
      </Style.InputBoxWrap>
    </Style.container>
  );
};

export default DrivingInfoRecord;
