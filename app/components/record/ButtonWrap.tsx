// react, react-native

// library

// assets, utils, realm

// component
import BasicsButton from '../common/BasicsButton';

// style
import {ButtonWrap as Style} from '../../styles/record.styles';

const ButtonWrap = () => {
  return (
    <Style.container>
      <BasicsButton text="취소" option="cancel" />
      <BasicsButton text="저장" />
    </Style.container>
  );
};

export default ButtonWrap;
