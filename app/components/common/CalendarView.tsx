// react, react-native
import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {SvgXml} from 'react-native-svg';

// library
import dayjs from 'dayjs';
import {useRecoilValue} from 'recoil';

// assets, recoil, utils
import {svg} from '../../assets/svg';
import {recordState} from '../../recoil/atoms';
import {markData} from '../../utils/recordCustomData';

// style
import Theme from '../../styles/Theme';

LocaleConfig.locales['ko'] = {
  monthNames: [
    '01월',
    '02월',
    '03월',
    '04월',
    '05월',
    '06월',
    '07월',
    '08월',
    '09월',
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
  dayNames: [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: '오늘',
};
LocaleConfig.defaultLocale = 'ko';

interface PropsType {
  checkDate: string;
  setCheckDate: Dispatch<SetStateAction<string>>;
}

const CalendarView = ({checkDate, setCheckDate}: PropsType) => {
  const recordData = useRecoilValue(recordState);

  // 현재 날짜: 년-월-일
  const currentDate = dayjs().format('YYYY-MM-DD');

  // realm에서 기록한 날짜 담기
  const [markedDate, setMarkedDate] = useState<
    Record<string, {marked: boolean}>
  >({});

  const readMarkedAllDB = useCallback(() => {
    const newMarkedDate = markData(recordData);

    setMarkedDate({...newMarkedDate});
  }, [recordData]);

  useEffect(() => {
    readMarkedAllDB();
  }, [readMarkedAllDB]);

  const markedSelectedDates = {
    ...markedDate,
    [checkDate]: {
      selected: true,
      marked: markedDate[checkDate]?.marked,
      dotColor: Theme.colors.mainDeep,
      customStyles: {
        container: {
          backgroundColor: `${Theme.colors.mainLight}`,
          borderRadius: 10,
        },
        text: {
          color: `${Theme.colors.black}`,
        },
      },
    },
  };

  const customTheme = {
    dotColor: `${Theme.colors.mainDeep}`,
    // year, month
    textSectionTitleColor: `${Theme.colors.black}`,
    textSectionTitleDisabledColor: `${Theme.colors.black}`,
    // day of week, day
    textDayHeaderFontSize: 14,
    textDayFontSize: 14,
    textDisabledColor: `${Theme.colors.grey}`,
    // today
    todayTextColor: `${Theme.colors.mainDeep}`,
  };

  // {"dateString": "2024-03-18", "day": 18, "month": 3, "timestamp": 1710720000000, "year": 2024}
  const onDayPress = (day: {dateString: SetStateAction<string>}) => {
    setCheckDate(day.dateString);
  };

  return (
    <>
      <Calendar
        markingType={'custom'}
        markedDates={markedSelectedDates}
        onDayPress={onDayPress}
        maxDate={currentDate}
        theme={customTheme}
        monthFormat={'yyyy년 M월'}
        renderArrow={direction =>
          direction === 'left' ? (
            <SvgXml xml={svg.prev} />
          ) : (
            <SvgXml xml={svg.next} fill={Theme.colors.black} />
          )
        }
      />

      {/* <Calendar
        markingType={'custom'}
        markedDates={markedDates} // 선택한 날짜 표시
        onDayPress={onDayPress} // 날짜 선택 시 호출되는 콜백 함수
        monthFormat={'yyyy년 M월'}
        maxDate={currentDate}
        renderArrow={direction =>
          direction === 'left' ? (
            <SvgXml xml={svg.prev} />
          ) : (
            <SvgXml xml={svg.next} />
          )
        }
        dayComponent={({date, state}: any) => {
          return (
            <Style.cell>
              <Style.dayText
                state={state}
                week={dayjs(date?.dateString).format('ddd')}>
                {date?.day}
              </Style.dayText>
            </Style.cell>
          );
        }}
      /> */}
    </>
  );
};

export default CalendarView;
