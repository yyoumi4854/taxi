// react, react-native
import {Text, View} from 'react-native';

// library
import styled from 'styled-components';

// style
import Theme from './Theme';
import {RecordBoxType} from '../types/types';

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