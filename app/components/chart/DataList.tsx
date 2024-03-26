// react, react-native
import React from 'react';

// utils
import {numberCommas} from '../../utils/calculate';

// style
import {DataList as Style} from '../../styles/chart.styles';

interface PropsType {
  selectedTab: string;
  selectYear: string;
  recordData: {value: number; label: string}[];
}

const DataList = ({selectedTab, selectYear, recordData}: PropsType) => {
  // [{"label": "2월", "value": 8}, {"label": "3월", "value": 324248}]
  // console.log('DataList페이지: ', recordData);

  return (
    <>
      {/* recordData에 데이터가 없으면 "데이터가 없습니다." 출력하기 */}
      {recordData.length ? (
        <Style.container>
          {recordData.reverse().map(data => (
            <Style.list key={data.label}>
              <Style.title>
                {selectedTab === 'month' ? `${selectYear}년` : ''}
                {data.label}
              </Style.title>
              <Style.text>영업 금액 : {numberCommas(data.value)}원</Style.text>
            </Style.list>
          ))}
        </Style.container>
      ) : (
        <Style.emptyView>
          <Style.emptyText>데이터가 없습니다.</Style.emptyText>
        </Style.emptyView>
      )}
    </>
  );
};

export default DataList;
