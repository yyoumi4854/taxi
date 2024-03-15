// react, react-native
import {Dispatch, SetStateAction} from 'react';
import {View} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {SvgXml} from 'react-native-svg';

// library

// assets, utils, realm
import {svg} from '../../assets/svg';

// component

// style

LocaleConfig.locales['ko'] = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  dayNames: ['일', '월', '화', '수', '목', '금', '토'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: '오늘',
};
LocaleConfig.defaultLocale = 'ko';

interface PropsType {
  checkDate: string;
  setCheckDate: Dispatch<SetStateAction<string>>;
}

const CalendarView = ({checkDate, setCheckDate}: PropsType) => {
  // realm에서 기록한 날짜 가져오기
  const markedDates: Record<string, {marked: true}> = {
    '2024-03-06': {marked: true},
    '2024-03-07': {marked: true},
    '2024-03-08': {marked: true},
  };

  const markedSelectedDates = {
    ...markedDates,
    [checkDate]: {
      selected: true,
      marked: markedDates[checkDate]?.marked,
      dotColor: '#FF7B00',
      customStyles: {
        container: {
          backgroundColor: '#FFEFD2',
          borderRadius: 10,
        },
        text: {
          color: '#333',
        },
      },
    },
  };

  const customTheme = {
    // year, month
    textSectionTitleColor: '#333',
    textSectionTitleDisabledColor: '#333',
    textDayHeaderFontSize: 16,
    // dot
    dotColor: '#FF7B00',
    // today
    todayTextColor: '#FF7B00',
  };

  // {"dateString": "2024-03-18", "day": 18, "month": 3, "timestamp": 1710720000000, "year": 2024}
  const onDayPress = (day: {dateString: SetStateAction<string>}) => {
    // console.log(day);
    setCheckDate(day.dateString);
  };

  return (
    <View>
      {/* Calendar */}
      <Calendar
        markingType={'custom'}
        markedDates={markedSelectedDates}
        onDayPress={onDayPress}
        theme={customTheme}
        monthFormat={'yyyy년 M월'}
        renderArrow={direction =>
          direction === 'left' ? (
            <SvgXml xml={svg.prev} />
          ) : (
            <SvgXml xml={svg.next} />
          )
        }
      />
    </View>
  );
};

export default CalendarView;
