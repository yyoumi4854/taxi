// react, react-native
import {Text, TouchableOpacity, View} from 'react-native';

// library
import styled from 'styled-components';

// style
import Theme from './Theme';

// Home
export const Home = {
  container: styled(View)`
    flex: 1;
  `,
  bottomContainer: styled(View)`
    padding: 0 16px;
    margin-bottom: 96px;
  `,
};

// YearBusinessAmount
export const YearBusinessAmount = {
  container: styled(View)`
    padding: 20px 0;
    background: ${Theme.colors.mainLight};
    ${Theme.common.flexCenter}
  `,
  title: styled(Text)`
    color: ${Theme.colors.mainDeep};
    font-family: ${Theme.fonts.medium};
    ${Theme.fontCommon.base}
  `,
  valueText: styled(Text)`
    color: ${Theme.colors.mainDeep};
    font-family: ${Theme.fonts.bold};
    ${Theme.fontCommon.large}
    margin-top: 4px;
  `,
};

// MonthCalendar
interface PositionType {
  position?: boolean;
}

export const MonthCalendar = {
  container: styled(View)`
    padding: 8px 16px;
  `,
  centerWrap: styled(View)`
    ${Theme.common.flexRowCenter}
    gap: 8px;
  `,
  iconButton: styled(TouchableOpacity)<PositionType>`
    ${Theme.common.flexCenter}
    width: 32px;
    height: 32px;

    /* props에 position이 있으면 position 주기 */
    ${props =>
      props.position &&
      `
        position: absolute;
        top: 8px;
        right: 0;
      `}
  `,
  text: styled(Text)`
    font-family: ${Theme.fonts.medium};
    ${Theme.fontCommon.large}
    color: ${Theme.colors.black};
  `,
};

// MonthBusinessAmount
export const MonthBusinessAmount = {
  container: styled(View)`
    padding: 16px 0;
    border-radius: 10px;
    background: ${Theme.colors.lightGrey};
  `,
  topWrap: styled(View)`
    ${Theme.common.flexCenter}
  `,
  title: styled(Text)`
    font-family: ${Theme.fonts.medium};
    ${Theme.fontCommon.base}
    color: ${Theme.colors.mainDeep};
  `,
  moneyValueText: styled(Text)`
    font-family: ${Theme.fonts.bold};
    ${Theme.fontCommon.large}
    color: ${Theme.colors.mainDeep};
    margin-top: 4px;
  `,
  bottomWrap: styled(View)`
    ${Theme.common.flexRowCenter}
    margin-top: 16px;
  `,
  bottomBox: styled(View)`
    ${Theme.common.flexCenter}
    flex: 1;
  `,
  subTitle: styled(Text)`
    ${Theme.fontCommon.base}
    color: ${Theme.colors.black};
  `,
  subValueText: styled(Text)`
    font-family: ${Theme.fonts.bold};
    ${Theme.fontCommon.medium}
    color: ${Theme.colors.black};
    margin-top: 4px;
  `,
  line: styled(View)`
    width: 1px;
    height: 100%;
    background: ${Theme.colors.grey};
  `,
};

// MonthRecordInfo
export const MonthRecordInfo = {
  container: styled(View)`
    margin-top: 8px;
  `,
};

// CreateButton
export const CreateButton = {
  button: styled(TouchableOpacity)`
    position: absolute;
    bottom: 20px;
    right: 16px;
    ${Theme.common.flexCenter}
    width: 56px;
    height: 56px;
    border-radius: 56px;
    background: ${Theme.colors.mainLight};
  `,
};
