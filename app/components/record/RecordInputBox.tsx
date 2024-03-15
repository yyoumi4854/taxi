// react, react-native
import {Dispatch} from 'react';

// library

// assets, utils, realm, types
import {RecordBoxType, RecordType} from '../../types/types';

// component

// style
import {RecordInputBox as Style} from '../../styles/record.styles';

// title, state, category, (unit = '원'), onChange;

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
    dispatch({type: 'updateInput', payload: {name, value}});

    // card 또는 cash가 변경될 때 operatingAmount를 업데이트
    if (name === 'card' || name === 'cash') {
      dispatch({type: 'updateOperatingAmount'});
    }

    if (name === 'lpgInjectionVolume' || name === 'lpgUnitPrice') {
      dispatch({type: 'updateLpgChargeAmount'});
    }

    if (name === 'mileage' || name === 'lpgInjectionVolume') {
      dispatch({type: 'updateFuelEfficiency'});
    }

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
