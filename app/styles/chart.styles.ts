// react, react-native
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

// library
import styled from 'styled-components';

// style
import Theme from './Theme';

// Chart
export const Chart = {
  wrap: styled(View)`
    padding: 0 16px;
  `,
  line: styled(View)`
    margin-top: 20px;
    width: 100%;
    height: 1px;
    background: ${Theme.colors.grey};
  `,
};

// Tabs
interface TabsType {
  select: boolean;
}

export const Tabs = {
  container: styled(View)`
    ${Theme.common.flexRowCenter}
    gap: 8px;
    margin-top: 20px;
    margin-bottom: 8px;
  `,
  tabButton: styled(TouchableOpacity)<TabsType>`
    ${Theme.common.flexCenter}
    flex: 1;
    height: 48px;
    border-radius: 10px;
    background-color: ${props =>
      props.select ? Theme.colors.main : Theme.colors.lightGrey};
  `,
  tabText: styled(Text)<TabsType>`
    font-family: ${Theme.fonts.medium};
    color: ${props => (props.select ? '#fff' : Theme.colors.darkGrey)};
  `,
};

// BarChartView
interface CenterType {
  center?: boolean;
}
export const BarChartView = {
  wrap: styled(View)<CenterType>`
    height: 234px;
    background: ${Theme.colors.lightGrey};
    border-radius: 10px;

    /* props에 center가 있으면 flexCenter 주기 */
    ${props => props.center && Theme.common.flexCenter}
  `,
  emptyText: styled(Text)`
    ${Theme.fontCommon.base}
    color: ${Theme.colors.darkGrey};
  `,
  container: styled(View)`
    padding: 20px 0;
    margin: 0 16px 0 4px;
    overflow: hidden;
    text-align: start;
    vertical-align: top;
  `,
};

// DataList
export const DataList = {
  emptyView: styled(View)`
    ${Theme.common.flexCenter}
    flex: 1;
  `,
  emptyText: styled(Text)`
    ${Theme.fontCommon.base}
    color: ${Theme.colors.darkGrey};
  `,
  container: styled(ScrollView)`
    padding: 0 16px;
  `,
  list: styled(View)`
    padding: 16px 0;
    border-bottom-width: 1px;
    border-color: ${Theme.colors.grey};
  `,
  title: styled(Text)`
    ${Theme.fontCommon.base}
    font-family: ${Theme.fonts.medium};
    color: ${Theme.colors.mainDeep};
  `,
  text: styled(Text)`
    margin-top: 8px;
    ${Theme.fontCommon.base}
    color: ${Theme.colors.black};
  `,
};
