// react, react-native
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';

// library
import dayjs from 'dayjs';

// assets, utils, realm
import {useSetRecoilState} from 'recoil';
import {recordState} from '../recoil/atoms.ts';
import {readAllRecord} from '../realm/recordRealmFunctions.ts';

// component
import YearBusinessAmount from '../components/home/YearBusinessAmount.tsx';
import MonthCalendar from '../components/home/MonthCalendar.tsx';
import MonthBusinessAmount from '../components/home/MonthBusinessAmount.tsx';
import MonthRecordInfo from '../components/home/MonthRecordInfo.tsx';
import CreateButton from '../components/home/CreateButton.tsx';

// style
import {Home as Style} from '../styles/home.styles.ts';

const Home = () => {
  // 현재 날짜: 년-월-일
  const currentDate = dayjs().format('YYYY-MM-DD');
  const [selectDate, setSelectDate] = useState(currentDate);
  const setRecordData = useSetRecoilState(recordState);

  useEffect(() => {
    const data = readAllRecord();

    /*
    setRecordData 함수는 Recoil 상태를 업데이트하는 함수입니다. 
    Recoil 상태를 업데이트할 때는 상태의 이전 값을 변경하지 않고 새로운 값을 전달해야 합니다. 
    이를 위해 객체나 배열을 새로 생성하여 이전 상태를 변경하지 않고 새로운 상태를 전달해야 합니다.
    따라서 data.map(record => ({...record}))를 사용하여 데이터의 각 요소를 복제하고 
    새로운 배열을 생성한 후, 이 배열을 setRecordData 함수에 전달합니다. 
    이렇게 하면 Recoil 상태가 변경되고, 해당 변경 내용이 React 컴포넌트에 반영됩니다.
     */
    setRecordData(data.map(record => ({...record})));
  }, []);

  return (
    <Style.container>
      <ScrollView>
        {/* 연간 영업 금액 */}
        <YearBusinessAmount />

        {/* 월별 운행 기록 */}
        <Style.bottomContainer>
          {/* 월별 달력 */}
          <MonthCalendar
            currentDate={currentDate}
            selectDate={selectDate}
            setSelectDate={setSelectDate}
          />

          {/* 이번달 영업 금액 */}
          <MonthBusinessAmount />

          {/* 이번달 운행 정보 */}
          <MonthRecordInfo />
        </Style.bottomContainer>
      </ScrollView>

      {/* create 버튼 */}
      <CreateButton currentDate={currentDate} />
    </Style.container>
  );
};

export default Home;
