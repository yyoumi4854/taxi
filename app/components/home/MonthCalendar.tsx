// react, react-native
import {Dispatch, SetStateAction} from 'react';
import {View} from 'react-native';
import {SvgXml} from 'react-native-svg';

// library
import dayjs from 'dayjs';

// assets, utils, realm
import {svg} from '../../assets/svg';

// component

// style
import {MonthCalendar as Style} from '../../styles/home.styles';

interface PropsType {
  currentDate: string;
  selectDate: string;
  setSelectDate: Dispatch<SetStateAction<string>>;
}

const MonthCalendar = ({currentDate, selectDate, setSelectDate}: PropsType) => {
  // 이전 달력으로 이동
  const onPrevPress = () => {
    const newDate = dayjs(selectDate).subtract(1, 'month').format('YYYY-MM-DD');
    setSelectDate(newDate);
  };
  // 다음 달력으로 이동
  const onNextPress = () => {
    const newDate = dayjs(selectDate).add(1, 'month').format('YYYY-MM-DD');
    setSelectDate(newDate);
  };
  // 현재 달로 이동
  const onCurrentPress = () => {
    setSelectDate(currentDate);
  };

  return (
    <Style.container>
      <Style.centerWrap>
        {/* 이전달 이동 */}
        <Style.iconButton onPress={onPrevPress}>
          <View>
            <SvgXml xml={svg.prev} />
          </View>
        </Style.iconButton>

        <Style.text>{dayjs(selectDate).format('YYYY년 MM월')}</Style.text>

        {/* 다음달 이동 */}
        <Style.iconButton onPress={onNextPress}>
          <View>
            <SvgXml xml={svg.next} />
          </View>
        </Style.iconButton>
      </Style.centerWrap>

      {/* 현재달 이동 */}
      <Style.iconButton position={true} onPress={onCurrentPress}>
        <View>
          <SvgXml xml={svg.turn} />
        </View>
      </Style.iconButton>
    </Style.container>
  );
};

export default MonthCalendar;
