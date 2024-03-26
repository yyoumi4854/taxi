// react, react-native
import {Text, TouchableOpacity, View} from 'react-native';

// library
import styled from 'styled-components';

// style
import Theme from './Theme';
import {RecordBoxType} from '../types/types';

// RecordBox
type OptionType = Pick<RecordBoxType, 'option'>;

export const RecordBox = {
  wrap: styled(View)`
    ${Theme.common.flexRowCenter}
    gap: 8px;
    margin-top: 8px;
  `,
  box: styled(View)<OptionType>`
    flex: 1;
    padding: 10px 6px;
    border-radius: 10px;
    background: ${props =>
      props.option === 'orange'
        ? Theme.colors.mainLight
        : Theme.colors.lightGrey};
  `,
  title: styled(Text)<OptionType>`
    ${Theme.fontCommon.base};
    color: ${props =>
      props.option === 'orange' ? Theme.colors.mainDeep : Theme.colors.black};
    text-align: center;
  `,
  valueTextWrap: styled(View)`
    margin-top: 6px;
    padding: 4px 0;
    width: 100%;
    border-radius: 20px;
    background: #fff;
  `,
  valueText: styled(Text)`
    font-family: ${Theme.fonts.bold};
    ${Theme.fontCommon.base};
    color: ${Theme.colors.black};
    text-align: center;
  `,
};

// BasicsButton
interface BtnOtionType {
  option?: 'cancel' | 'confirm';
}
export const BasicsButton = {
  button: styled(TouchableOpacity)<BtnOtionType>`
    flex: 1;
    ${Theme.common.flexCenter}
    height: 42px;
    border-radius: 10px;
    border: 1px solid ${Theme.colors.main};
    background: ${props =>
      props.option === 'confirm' ? Theme.colors.main : '#fff'};
  `,
  text: styled(Text)<BtnOtionType>`
    ${Theme.fontCommon.base}
    font-family: ${Theme.fonts.medium};
    color: ${props =>
      props.option === 'confirm' ? '#fff' : Theme.colors.main};
  `,
};

// Modal
export const Modal = {
  modalWrap: styled(View)`
    flex: 1;
    ${Theme.common.flexCenter}
    background: rgba(0, 0, 0, 0.7);
  `,
  container: styled(View)`
    padding: 20px;
    width: 320px;
    border-radius: 10px;
    background: #fff;
  `,
  yearText: styled(Text)`
    ${Theme.fontCommon.base}
    font-family: ${Theme.fonts.medium};
    color: ${Theme.colors.darkGrey};
  `,
  DateText: styled(Text)`
    ${Theme.fontCommon.large}
    font-family: ${Theme.fonts.bold};
    color: ${Theme.colors.black};
    margin-top: 4px;
  `,
  textWrap: styled(View)`
    ${Theme.common.flexCenter}
  `,
  title: styled(Text)`
    ${Theme.fontCommon.medium}
    font-family: ${Theme.fonts.bold};
    color: ${Theme.colors.black};
  `,
  text: styled(Text)`
    margin-top: 16px;
    ${Theme.fontCommon.base}
    color: ${Theme.colors.black};
    text-align: center;
  `,
  orangeText: styled(Text)`
    color: ${Theme.colors.main};
  `,
  buttonWrap: styled(View)`
    ${Theme.common.flexRowCenter}
    gap: 8px;
    margin-top: 32px;
  `,
};

// CalendarTitle
interface PositionType {
  position?: boolean;
}

export const CalendarTitle = {
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

// Calendar
interface CellType {
  state?: 'today' | 'disabled';
  week?: 'Sun' | 'Mon' | 'Tue' | 'Wed' | ' Thu' | '  Fri' | 'Sat';
}

export const Calendar = {
  cell: styled(View)`
    ${Theme.common.flexCenter}
  `,
  dayText: styled(Text)<CellType>`
    /* 기본 텍스트 색상 */
    color: ${Theme.colors.black};

    /* 일요일 상태일 때의 색상 */
    ${props =>
      props.week === 'Sun' &&
      `
      color: ${Theme.colors.red};
    `}

    /* 토요일 상태일 때의 색상 */
    ${props =>
      props.week === 'Sat' &&
      `
      color: ${Theme.colors.blue};
    `}

    /* today 상태일 때의 색상 */
    ${props =>
      props.state === 'today' &&
      `
      color: ${Theme.colors.mainDeep};
    `}

    /* disable 상태일 때의 색상 */
    ${props =>
      props.state === 'disabled' &&
      `
      color: ${Theme.colors.grey};
    `}
  `,
};
