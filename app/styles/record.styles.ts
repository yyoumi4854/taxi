// react, react-native
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// library
import styled from 'styled-components';

// style
import Theme from './Theme';

// Record
export const Record = {
  container: styled(View)`
    flex: 1;
  `,
  scrollView: styled(ScrollView)`
    padding: 0 16px;
    margin-bottom: 76px;
  `,
};

// SubHeader
export const SubHeader = {
  container: styled(View)`
    ${Theme.common.flexRowCenter}
    justify-content: space-between;
    padding: 8px 16px;
  `,
  leftContent: styled(View)`
    ${Theme.common.flexRowCenter}
    gap: 4px;
  `,
  iconButton: styled(TouchableOpacity)`
    ${Theme.common.flexCenter}
    width: 32px;
    height: 32px;
  `,
  dayText: styled(Text)`
    ${Theme.fontCommon.medium}
    color: ${Theme.colors.black};
  `,
};

// DrivingInfoRecord
export const DrivingInfoRecord = {
  container: styled(View)`
    padding: 20px 0;
  `,
  title: styled(Text)`
    ${Theme.fontCommon.base}
    color: ${Theme.colors.mainDeep};
  `,
  InputBoxWrap: styled(View)`
    ${Theme.common.flexRowCenter}
    gap: 8px;
    margin-top: 8px;
  `,
  fakeView: styled(View)`
    flex: 1;
    padding: 8px;
  `,
};

// RecordInputBox
export const RecordInputBox = {
  container: styled(View)`
    ${Theme.common.flexCenter}
    flex: 1;
    padding: 10px 8px;
    border-radius: 10px;
    background: ${Theme.colors.lightGrey};
  `,
  title: styled(Text)`
    ${Theme.fontCommon.base}
    color: ${Theme.colors.black};
  `,
  inputWrap: styled(View)`
    ${Theme.common.flexRowCenter}
    justify-content: space-between;
    gap: 4px;
    margin-top: 4px;
    padding: 2px 8px;
    border-radius: 16px;
    background: #fff;
  `,
  textInput: styled(TextInput)`
    flex: 1;
    ${Theme.fontCommon.base}
    color: ${Theme.colors.black};
    padding: 0;
  `,
  unitText: styled(Text)`
    ${Theme.fontCommon.small}

    color: ${Theme.colors.darkGrey};
  `,
};

// DrivingInfo
export const DrivingInfo = {
  container: styled(View)`
    border-top-width: 1px;
    border-color: ${Theme.colors.grey};
    padding: 20px 0;
  `,
  title: styled(Text)`
    ${Theme.fontCommon.base}
    color: ${Theme.colors.mainDeep};
  `,
  RecordBoxWrap: styled(View)`
    ${Theme.common.flexRowCenter}
    gap: 2px;
    margin-top: 8px;
  `,
};

// ButtonWrap
export const ButtonWrap = {
  container: styled(View)`
    position: absolute;
    left: 0;
    bottom: 0;
    ${Theme.common.flexRowCenter}
    gap: 8px;
    padding: 16px;
    background: #fff;
  `,
};
