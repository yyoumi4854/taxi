// react, react-native
import {Dispatch, SetStateAction, useState} from 'react';
import {Modal, View} from 'react-native';

// library
import dayjs from 'dayjs';

// assets, utils, realm

// component
import BasicsButton from '../common/BasicsButton';
import CalendarView from '../common/CalendarView';

// style
import {Modal as Style} from '../../styles/common.styles';

const dayOfWeek: Record<string, string> = {
  Sun: '일',
  Mon: '월',
  Tue: '화',
  Wed: '수',
  Thu: '목',
  Fri: '금',
  Sat: '토',
};

interface PropsType {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  selectDate: string;
  setSelectDate: Dispatch<SetStateAction<string>>;
}

const CalendarModal = ({
  modalVisible,
  setModalVisible,
  selectDate,
  setSelectDate,
}: PropsType) => {
  const [checkDate, setCheckDate] = useState(selectDate);

  const onCancelPress = () => {
    setModalVisible(false);
    setCheckDate(selectDate);
  };

  const onConfirmPress = () => {
    setModalVisible(false);
    setSelectDate(checkDate);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}>
      <Style.modalWrap>
        <Style.container>
          <View>
            <Style.yearText>{dayjs(checkDate).format('YYYY년')}</Style.yearText>
            <Style.DateText>
              {dayjs(checkDate).format('M월 D일')} (
              {dayOfWeek[dayjs(checkDate).format('ddd')]})
            </Style.DateText>
            <View>
              <CalendarView checkDate={checkDate} setCheckDate={setCheckDate} />
            </View>
          </View>

          <Style.buttonWrap>
            <BasicsButton
              text={'취소'}
              option={'cancel'}
              onButtonPress={onCancelPress}
            />
            <BasicsButton text={'변경'} onButtonPress={onConfirmPress} />
          </Style.buttonWrap>
        </Style.container>
      </Style.modalWrap>
    </Modal>
  );
};

export default CalendarModal;
