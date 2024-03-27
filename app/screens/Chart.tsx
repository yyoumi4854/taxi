// react, react-native
import React, {useState} from 'react';

// library
import dayjs from 'dayjs';
import {useRecoilValue} from 'recoil';

// recoil, utils
import {recordState} from '../recoil/atoms';
import {chartMonthData, chartYearData} from '../utils/recordCustomData';

// component
import Tabs from '../components/chart/Tabs';
import CalendarTitle from '../components/chart/CalendarTitle';
import BarChartView from '../components/chart/BarChartView';
import DataList from '../components/chart/DataList';

// style
import {Chart as Style} from '../styles/chart.styles';

const Chart = () => {
  const recordData = useRecoilValue(recordState);
  const currentYear = dayjs().format('YYYY');

  const [selectedTab, setSelectedTab] = useState('month');
  const [selectYear, setSelectYear] = useState(currentYear);

  /*
  *월간*
  선택한 년도의 월간 영업금액 나오기
  [{value: 영업금액, label: '3월'}]
   */
  const monthRecordData = chartMonthData(recordData, selectYear);

  /*
   *연간*
  작성을 시작한 년도부터 연간 영업금액
  [{value: 10, label: 2024년}]
   */
  const yearRecordData = chartYearData(recordData);

  return (
    <>
      <Style.wrap>
        {/* 탭: 월간, 연간 */}
        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

        {/* 월별 달력 */}
        {selectedTab === 'month' ? (
          <CalendarTitle
            currentYear={currentYear}
            selectYear={selectYear}
            setSelectYear={setSelectYear}
          />
        ) : (
          ''
        )}

        {/* 차트 */}
        <BarChartView
          recordData={
            selectedTab === 'month' ? monthRecordData : yearRecordData
          }
        />
      </Style.wrap>

      <Style.line />

      {/* 데이터 리스트 */}
      <DataList
        selectedTab={selectedTab}
        selectYear={selectYear}
        recordData={selectedTab === 'month' ? monthRecordData : yearRecordData}
      />
    </>
  );
};

export default Chart;
