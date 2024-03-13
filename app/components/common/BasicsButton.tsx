// react, react-native

// library

// assets, utils, realm

// component

// style
import {BasicsButton as Style} from '../../styles/common.styles';

// text, option = "confirm", onButtonPress
interface PropsType {
  text: string;
  option?: 'cancel' | 'confirm';
}
const BasicsButton = ({text, option = 'confirm'}: PropsType) => {
  return (
    <Style.button option={option}>
      <Style.text option={option}>{text}</Style.text>
    </Style.button>
  );
};

export default BasicsButton;
