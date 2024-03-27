import React, {Dispatch, SetStateAction} from 'react';
import {View} from 'react-native';
import {SvgXml} from 'react-native-svg';

// library
import dayjs from 'dayjs';

// assets
import {svg} from '../../assets/svg';

// style
import Theme from '../../styles/Theme';
import {CalendarTitle as Style} from '../../styles/common.styles';

interface PropsType {
  currentYear: string; // 현재 달
  selectYear: string;
  setSelectYear: Dispatch<SetStateAction<string>>;
}

const CalendarTitle = ({currentYear, selectYear, setSelectYear}: PropsType) => {
  // 이전 달력으로 이동
  const onPrevPress = () => {
    const nextYear = dayjs(selectYear).subtract(1, 'year').format('YYYY');
    setSelectYear(nextYear);
  };
  // 다음 달력으로 이동
  const onNextPress = () => {
    const nextYear = dayjs(selectYear).add(1, 'year').format('YYYY');
    setSelectYear(nextYear);
  };
  // 현재 달로 이동
  const onCurrentPress = () => {
    setSelectYear(currentYear);
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

        <Style.text>{dayjs(selectYear).format('YYYY년')}</Style.text>

        {/* 다음달 이동 */}
        <Style.iconButton
          onPress={onNextPress}
          disabled={currentYear === selectYear}>
          <View>
            <SvgXml
              xml={svg.next}
              fill={
                currentYear === selectYear
                  ? Theme.colors.grey
                  : Theme.colors.black
              }
            />
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

export default CalendarTitle;
