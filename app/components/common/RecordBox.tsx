// assets, utils, realm, type
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
        <Style.valueText>{`${state}${unit}`}</Style.valueText>
      </Style.valueTextWrap>
    </Style.box>
  );
};

export default RecordBox;
