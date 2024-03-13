// react, react-native

// library

// assets, utils, realm, types
import {RecordInputBoxType} from '../../types/types';

// component

// style
import {RecordInputBox as Style} from '../../styles/record.styles';

// title, state, category, (unit = '원'), onChange;
const RecordInputBox = ({
  title,
  state,
  category,
  unit = '원',
}: RecordInputBoxType) => {
  return (
    <Style.container>
      <Style.title>{title}</Style.title>
      <Style.inputWrap>
        <Style.textInput placeholder="0" keyboardType="numeric" value={state} />
        <Style.unitText>{unit}</Style.unitText>
      </Style.inputWrap>
    </Style.container>
  );
};

export default RecordInputBox;
