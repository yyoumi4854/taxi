// react, react-native
import React, {Dispatch, SetStateAction} from 'react';
import {View} from 'react-native';
import {SvgXml} from 'react-native-svg';

// library
import dayjs from 'dayjs';

// assets
import {svg} from '../../assets/svg';

// style
import {MonthCalendar as Style} from '../../styles/home.styles';
import Theme from '../../styles/Theme';

interface PropsType {
  currentMonth: string; // 현재 달
  selectMonth: string;
  setSelectMonth: Dispatch<SetStateAction<string>>;
}

// 다음달 확인 못하게 막기
const MonthCalendar = ({
  currentMonth,
  selectMonth,
  setSelectMonth,
}: PropsType) => {
  // 이전 달력으로 이동
  const onPrevPress = () => {
    const nextMonth = dayjs(selectMonth).subtract(1, 'month').format('YYYY-MM');
    setSelectMonth(nextMonth);
  };
  // 다음 달력으로 이동
  const onNextPress = () => {
    const nextMonth = dayjs(selectMonth).add(1, 'month').format('YYYY-MM');
    setSelectMonth(nextMonth);
  };
  // 현재 달로 이동
  const onCurrentPress = () => {
    setSelectMonth(currentMonth);
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

        <Style.text>{dayjs(selectMonth).format('YYYY년 MM월')}</Style.text>

        {/* 다음달 이동 */}
        <Style.iconButton
          onPress={onNextPress}
          disabled={currentMonth === selectMonth}>
          <View>
            <SvgXml
              xml={svg.next}
              fill={
                currentMonth === selectMonth
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

export default MonthCalendar;
