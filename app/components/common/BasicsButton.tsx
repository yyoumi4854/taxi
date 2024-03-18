// style
import {BasicsButton as Style} from '../../styles/common.styles';

interface PropsType {
  text: string;
  option?: 'cancel' | 'confirm';
  onButtonPress: () => void;
}
const BasicsButton = ({text, option = 'confirm', onButtonPress}: PropsType) => {
  return (
    <Style.button option={option} onPress={onButtonPress}>
      <Style.text option={option}>{text}</Style.text>
    </Style.button>
  );
};

export default BasicsButton;
