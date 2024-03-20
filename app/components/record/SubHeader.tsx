// react, react-native
import React, {Dispatch, SetStateAction, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SvgXml} from 'react-native-svg';

// library
import dayjs from 'dayjs';

// assets, utils, realm
import {svg} from '../../assets/svg';

// component
import CalendarModal from './CalendarModal';

// style
import {SubHeader as Style} from '../../styles/record.styles';

interface PropsType {
  selectDate: string;
  setSelectDate: Dispatch<SetStateAction<string>>;
}

const SubHeader = ({selectDate, setSelectDate}: PropsType) => {
  const navigation = useNavigation();
  const onGoBackPress = () => {
    navigation.goBack();
  };

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Style.container>
        <Style.leftContent>
          <Style.iconButton onPress={onGoBackPress}>
            <SvgXml xml={svg.prev} width={9.33} height={16} />
          </Style.iconButton>

          <Style.dayText>
            {dayjs(selectDate).format('YYYY년 MM월 DD일')}
          </Style.dayText>
        </Style.leftContent>

        <Style.iconButton onPress={() => setModalVisible(true)}>
          <SvgXml xml={svg.calendar} fill={'#FFA800'} />
        </Style.iconButton>
      </Style.container>

      {/* 캘린더 모달 */}
      <CalendarModal
        selectDate={selectDate}
        setSelectDate={setSelectDate}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};

export default SubHeader;
