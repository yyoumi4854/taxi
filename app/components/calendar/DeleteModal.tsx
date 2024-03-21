// react, react-native
import React, {Dispatch, SetStateAction} from 'react';
import {Modal} from 'react-native';

// library
import dayjs from 'dayjs';
import {useSetRecoilState} from 'recoil';

// realm, recoil
import {deleteRecord, readAllRecord} from '../../realm/recordRealmFunctions';
import {recordState} from '../../recoil/atoms';

// component
import BasicsButton from '../common/BasicsButton';

// style
import {Modal as Style} from '../../styles/common.styles';

interface PropsType {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  selectDate: string;
}

const DeleteModal = ({
  modalVisible,
  setModalVisible,
  selectDate,
}: PropsType) => {
  const setRecordData = useSetRecoilState(recordState);

  const onCancelPress = () => {
    setModalVisible(false);
  };

  const onDeletePress = () => {
    deleteRecord(selectDate);
    setModalVisible(false);

    const data = readAllRecord();
    setRecordData(data.map(record => ({...record})));
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
          <Style.textWrap>
            <Style.title>
              운행정보 기록
              <Style.orangeText>삭제</Style.orangeText>
              하기
            </Style.title>
            <Style.text>
              <Style.orangeText>
                {dayjs(selectDate).format('YYYY년 M월 D일')}
              </Style.orangeText>
              운행정보기록을 {'\n'}
              삭제하시겠습니까?
            </Style.text>
          </Style.textWrap>

          <Style.buttonWrap>
            <BasicsButton
              text={'취소'}
              option={'cancel'}
              onButtonPress={onCancelPress}
            />
            <BasicsButton text={'삭제'} onButtonPress={onDeletePress} />
          </Style.buttonWrap>
        </Style.container>
      </Style.modalWrap>
    </Modal>
  );
};

export default DeleteModal;
