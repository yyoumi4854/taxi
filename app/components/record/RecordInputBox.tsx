// react, react-native
import {Dispatch} from 'react';

// assets, utils, realm, types
import {RecordBoxType, RecordType} from '../../types/types';

// style
import {RecordInputBox as Style} from '../../styles/record.styles';

type Action = {
  type: string;
  payload?: any;
};
interface PropTypes extends RecordBoxType {
  category: Exclude<keyof RecordType, 'date'>;
  dispatch: Dispatch<Action>;
}

const RecordInputBox = ({
  title,
  state,
  category,
  unit = '원',
  dispatch,
}: PropTypes) => {
  // 입력값 변경 처리 함수

  const onChange = (name: string, value: number) => {
    value = value ? value : 0;
    dispatch({type: 'updateInput', payload: {name, value}});

    // 카드 또는 현금이 변경될 때 영업금액 업데이트
    if (name === 'card' || name === 'cash') {
      dispatch({type: 'updateOperatingAmount'});
    }

    // LPG 주입량 또는 LPG 단가 변경될 때 LPG 충전 금액 업데이트
    if (name === 'lpgInjectionVolume' || name === 'lpgUnitPrice') {
      dispatch({type: 'updateLpgChargeAmount'});
    }

    // 주행거리 또는 LPG 주입량 변경될 때 연비 업데이트
    if (name === 'mileage' || name === 'lpgInjectionVolume') {
      dispatch({type: 'updateFuelEfficiency'});
    }

    // 주행거리 또는 연비 변경될 때 LPG 사용량 업데이트
    if (name === 'mileage' || name === 'fuelEfficiency') {
      dispatch({type: 'updateLpgUsage'});
    }
  };

  return (
    <Style.container>
      <Style.title>{title}</Style.title>
      <Style.inputWrap>
        <Style.textInput
          placeholder="0"
          keyboardType="numeric"
          value={state.toString()}
          onChangeText={text => onChange(category, parseInt(text))}
        />
        <Style.unitText>{unit}</Style.unitText>
      </Style.inputWrap>
    </Style.container>
  );
};

export default RecordInputBox;
