// react, react-native
import {useState} from 'react';
import {ScrollView} from 'react-native';

// library
import dayjs from 'dayjs';

// assets, utils, realm

// component
import YearBusinessAmount from '../components/home/YearBusinessAmount.tsx';
import MonthCalendar from '../components/home/MonthCalendar.tsx';
import MonthBusinessAmount from '../components/home/MonthBusinessAmount.tsx';
import MonthRecordInfo from '../components/home/MonthRecordInfo.tsx';
import CreateButton from '../components/home/CreateButton.tsx';

// style
import {Home as Style} from '../styles/home.styles.ts';

const Home = () => {
  // +버튼 클릭시 현재 년월일을 가지고가서 기록화면에 표시
  // 월달력 이동

  // 현재 날짜: 년-월-일
  const currentDate = dayjs().format('YYYY-MM-DD');
  const [selectDate, setSelectDate] = useState(currentDate);

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
