// react, react-native
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

// component
import BasicsButton from '../common/BasicsButton';
import DeleteModal from './DeleteModal';

// style
import {ButtonWrap as Style} from '../../styles/calendar.styles';

interface PropsType {
  selectDate: string;
}

const ButtonWrap = ({selectDate}: PropsType) => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const onNavigationPress = () => {
    navigation.navigate('Record', {postDate: selectDate});
  };

  return (
    <>
      <Style.container>
        <BasicsButton
          text="삭제"
          option="cancel"
          onButtonPress={() => setModalVisible(true)}
        />
        <BasicsButton text="수정" onButtonPress={onNavigationPress} />
      </Style.container>

      <DeleteModal
        selectDate={selectDate}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};

export default ButtonWrap;
