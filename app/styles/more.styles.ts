// react, react-native
import {Text, TouchableOpacity, View} from 'react-native';

// library
import styled from 'styled-components';

// style
import Theme from './Theme';

// More
export const More = {
  list: styled(View)`
    ${Theme.common.flexRowCenter}
    justify-content: space-between;
    padding: 20px 16px;
    border-bottom-width: 1px;
    border-color: ${Theme.colors.grey};
  `,
  leftWrap: styled(View)`
    ${Theme.common.flexRowCenter}
    align-items: flex-start;
    gap: 8px;
  `,
  title: styled(Text)`
    ${Theme.fontCommon.large}
    font-family: ${Theme.fonts.bold};
    color: ${Theme.colors.black};
  `,
  text: styled(Text)`
    margin-top: 4px;
    ${Theme.fontCommon.base}
    color: ${Theme.colors.darkGrey};
    width: 80%;
  `,
  iconButton: styled(TouchableOpacity)`
    ${Theme.common.flexCenter}
    width: 32px;
    height: 32px;
  `,
};
