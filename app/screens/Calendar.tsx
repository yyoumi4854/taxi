// react, react-native
import React, {View} from 'react-native';
import CalendarView from '../components/common/CalendarView';
import {useState} from 'react';
import dayjs from 'dayjs';

const Calendar = () => {
  // 현재 날짜: 년-월-일
  const currentDate = dayjs().format('YYYY-MM-DD');
  const [checkDate, setCheckDate] = useState(currentDate);
  return (
    <View>
      <CalendarView checkDate={checkDate} setCheckDate={setCheckDate} />
    </View>
  );
};

export default Calendar;
