// react, react-native
import React from 'react';

// utils, type
import {numberCommas} from '../../utils/calculate';
import {RecordBoxType} from '../../types/types';

// style
import {RecordBox as Style} from '../../styles/common.styles';

const RecordBox = ({
  title,
  state,
  unit = '원',
  option = 'basics',
}: RecordBoxType) => {
  return (
    <Style.box option={option}>
      <Style.title option={option}>{title}</Style.title>
      <Style.valueTextWrap>
        <Style.valueText>{`${numberCommas(state)}${unit}`}</Style.valueText>
      </Style.valueTextWrap>
    </Style.box>
  );
};

export default RecordBox;
