// react, react-native
import React, {useCallback, useEffect, useState} from 'react';

// library
import dayjs from 'dayjs';
import {useRecoilValue} from 'recoil';

// realm, recoil
import {readSelectDateRecord} from '../realm/recordRealmFunctions';
import {recordState} from '../recoil/atoms';

// component
import CalendarView from '../components/common/CalendarView';
import RecordInfo from '../components/calendar/RecordInfo';
import ButtonWrap from '../components/calendar/ButtonWrap';

// style
import {Calender as Style} from '../styles/calendar.styles';
import NoneRecordInfo from '../components/calendar/NoneRecordInfo';

// 추가, 삭제, 수정해도 달력페이지에 업데이트 되지 않음
const Calendar = () => {
  // 현재 날짜: 년-월-일
  const currentDate = dayjs().format('YYYY-MM-DD');
  const [selectDate, setSelectDate] = useState(currentDate); // 선택한 날짜
  const [isRecord, setIsRecord] = useState(false);

  // selectDate가 realm에 있는지 체크
  const readDB = useCallback(() => {
    const selectDateData = readSelectDateRecord(selectDate);
    setIsRecord(selectDateData ? true : false);
  }, [selectDate]);

  const recordData = useRecoilValue(recordState);

  useEffect(() => {
    readDB();
    // readAllRecord();
  }, [readDB, selectDate, recordData]);

  return (
    <Style.container>
      <Style.calendarContainer>
        <CalendarView checkDate={selectDate} setCheckDate={setSelectDate} />
      </Style.calendarContainer>

      <Style.line></Style.line>

      {/* 선택한 날짜의 데이터가 있는지 체크 */}
      {isRecord ? (
        <Style.scrollView>
          <RecordInfo selectDate={selectDate} />
          <ButtonWrap selectDate={selectDate} />
        </Style.scrollView>
      ) : (
        <NoneRecordInfo selectDate={selectDate} />
      )}
    </Style.container>
  );
};

export default Calendar;
