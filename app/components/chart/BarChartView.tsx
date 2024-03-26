// react, react-native
import React from 'react';
import {Dimensions} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';

// style
import Theme from '../../styles/Theme';
import {BarChartView as Style} from '../../styles/chart.styles';

interface PropsType {
  recordData: {value: number; label: string}[];
}
const BarChartView = ({recordData}: PropsType) => {
  const screenWidth = Dimensions.get('window').width; // 핸드폰 너비

  const labelTextStyle = {
    fontSize: 12,
    fontWeight: 500,
    color: `${Theme.colors.darkGrey}`,
  };

  const yAxisTextStyle = {
    fontSize: 12,
    color: `${Theme.colors.darkGrey}`,
  };

  return (
    <Style.wrap center={!recordData.length && true}>
      {/* recordData에 데이터가 없으면 "데이터가 없습니다." 출력하기 */}
      {recordData.length ? (
        <Style.container>
          {/* Bar Chart */}
          <BarChart
            // 기본
            data={recordData}
            width={recordData.length > 10 ? undefined : screenWidth} // 데이터가 적을 때, 많을때 대비해서
            height={160}
            disablePress // 누루기 동작 비활성화
            // bar
            initialSpacing={20} // 초기 간격
            spacing={40} // bar 간격
            barBorderRadius={2}
            barWidth={12} // bar width
            frontColor={Theme.colors.main} // bar 색상
            // x축
            xAxisLabelTextStyle={labelTextStyle}
            xAxisIndicesColor={Theme.colors.grey} // x축 단계별 표시 색상
            xAxisColor={Theme.colors.grey} // x축 색상
            // y축
            yAxisTextStyle={yAxisTextStyle}
            yAxisThickness={0} // 메인 y축
            noOfSections={3} // 가로 회색줄 갯수
            // yAxisLabelTexts={['0', '100', '300', '500']}
          />
        </Style.container>
      ) : (
        <Style.emptyText>데이터가 없습니다.</Style.emptyText>
      )}
    </Style.wrap>
  );
};

export default BarChartView;
