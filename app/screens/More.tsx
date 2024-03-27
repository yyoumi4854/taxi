// react, react-native
import React from 'react';
import {View} from 'react-native';
import {SvgXml} from 'react-native-svg';

// library

// assets
import {svg} from '../assets/svg';

// style
import Theme from '../styles/Theme';
import {More as Style} from '../styles/more.styles';

const More = () => {
  return (
    <View>
      <Style.list>
        <Style.leftWrap>
          <SvgXml
            xml={svg.save}
            fill={Theme.colors.black}
            width={24}
            height={24}
          />
          <View>
            <Style.title>데이터 저장하기</Style.title>
            <Style.text>
              지금까지 작성한 기록을 이메일로 보낼 수 있습니다.
            </Style.text>
          </View>
        </Style.leftWrap>
        <Style.iconButton
        // onPress={onNextPress}
        >
          <View>
            <SvgXml
              xml={svg.next}
              fill={Theme.colors.black}
              height={16}
              width={9.33}
            />
          </View>
        </Style.iconButton>
      </Style.list>
    </View>
  );
};

export default More;
