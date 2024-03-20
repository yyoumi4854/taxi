// react, react-native
import {ScrollView, Text, View} from 'react-native';

// library
import styled from 'styled-components';

// style
import Theme from './Theme';

// Calender
export const Calender = {
  container: styled(View)`
    flex: 1;
  `,
  calendarContainer: styled(View)`
    padding: 20px;
    padding-top: 0;
  `,
  line: styled(View)`
    height: 1px;
    background-color: ${Theme.colors.grey};
  `,
  scrollView: styled(ScrollView)`
    padding: 0 16px;
  `,
};

// RecordInfo
export const RecordInfo = {
  container: styled(View)`
    padding-top: 20px;
  `,
  title: styled(Text)`
    ${Theme.fontCommon.base}
    color: ${Theme.colors.mainDeep}
  `,
};

// ButtonWrap
export const ButtonWrap = {
  container: styled(View)`
    ${Theme.common.flexRowCenter}
    gap: 8px;
    padding: 16px 0;
  `,
};

// NoneRecordInfo
export const NoneRecordInfo = {
  container: styled(View)`
    ${Theme.common.flexCenter}
    flex: 1;
  `,
  text: styled(Text)`
    ${Theme.fontCommon.base}
  `,
  ButtonWrap: styled(View)`
    margin-top: 20px;
    width: 140px;
    height: 42px;
  `,
};
