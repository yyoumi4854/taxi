// react, react-native
import {Dispatch} from 'react';

// component
import RecordInputBox from './RecordInputBox';

// style
import {DrivingInfoRecord as Style} from '../../styles/record.styles';
import {RecordType} from '../../types/types';

type Action = {
  type: string;
  payload?: any;
};
interface PropsType {
  state: RecordType;
  dispatch: Dispatch<Action>;
}

const DrivingInfoRecord = ({state, dispatch}: PropsType) => {
  const {
    card,
    cash,
    lpgInjectionVolume,
    lpgUnitPrice,
    mileage,
    businessDistance,
    toll,
  } = state;

  return (
    <Style.container>
      <Style.title>기본 운행 정보 기록하기</Style.title>

      {/* 카드, 현금 */}
      <Style.InputBoxWrap>
        <RecordInputBox
          title="카드"
          state={card}
          category="card"
          dispatch={dispatch}
        />
        <RecordInputBox
          title="현금"
          state={cash}
          category="cash"
          dispatch={dispatch}
        />
      </Style.InputBoxWrap>

      {/* LPG 주입량, LPG 단가 */}
      <Style.InputBoxWrap>
        <RecordInputBox
          title="LPG 주입량"
          state={lpgInjectionVolume}
          category="lpgInjectionVolume"
          unit="L"
          dispatch={dispatch}
        />
        <RecordInputBox
          title="LPG 단가"
          state={lpgUnitPrice}
          category="lpgUnitPrice"
          dispatch={dispatch}
        />
      </Style.InputBoxWrap>

      {/* 주행거리, 영업거리 */}
      <Style.InputBoxWrap>
        <RecordInputBox
          title="주행거리"
          state={mileage}
          category="mileage"
          unit="km"
          dispatch={dispatch}
        />
        <RecordInputBox
          title="영업거리"
          state={businessDistance}
          category="businessDistance"
          unit="km"
          dispatch={dispatch}
        />
      </Style.InputBoxWrap>

      {/* 통행료 */}
      <Style.InputBoxWrap>
        <RecordInputBox
          title="통행료"
          state={toll}
          category="toll"
          dispatch={dispatch}
        />
        <Style.fakeView></Style.fakeView>
      </Style.InputBoxWrap>
    </Style.container>
  );
};

export default DrivingInfoRecord;
