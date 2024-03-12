// react, react-native
import {ScrollView} from 'react-native';

// library

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
  return (
    <Style.container>
      <ScrollView>
        {/* 연간 영업 금액 */}
        <YearBusinessAmount />

        {/* 월별 운행 기록 */}
        <Style.bottomContainer>
          {/* 월별 달력 */}
          <MonthCalendar />

          {/* 이번달 영업 금액 */}
          <MonthBusinessAmount />

          {/* 이번달 운행 정보 */}
          <MonthRecordInfo />
        </Style.bottomContainer>
      </ScrollView>

      {/* create 버튼 */}
      <CreateButton />
    </Style.container>
  );
};

export default Home;
