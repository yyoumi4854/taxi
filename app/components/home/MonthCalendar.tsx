// react, react-native
import {View} from 'react-native';
import {SvgXml} from 'react-native-svg';

// library

// assets, utils, realm
import {svg} from '../../assets/svg';

// component

// style
import {MonthCalendar as Style} from '../../styles/home.styles';

const MonthCalendar = () => {
  return (
    <Style.container>
      <Style.centerWrap>
        <Style.iconButton>
          <View>
            <SvgXml xml={svg.prev} />
          </View>
        </Style.iconButton>

        <Style.text>2024년 3월</Style.text>

        <Style.iconButton>
          <View>
            <SvgXml xml={svg.next} />
          </View>
        </Style.iconButton>
      </Style.centerWrap>

      <Style.iconButton position={true}>
        <View>
          <SvgXml xml={svg.turn} />
        </View>
      </Style.iconButton>
    </Style.container>
  );
};

export default MonthCalendar;
