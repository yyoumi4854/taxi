// react, react-native

// library

// assets, utils, realm

// component
import SubHeader from '../components/record/SubHeader';
import DrivingInfoRecord from '../components/record/DrivingInfoRecord';
import DrivingInfo from '../components/record/DrivingInfo';
import ButtonWrap from '../components/record/ButtonWrap';

// style
import {Record as Style} from '../styles/record.styles';

// 추가하기(+버튼 클릭시), 수정하기(달력에서 날짜 클릭, 수정 클릭)
const Record = () => {
  return (
    <Style.container>
      {/* 헤더 */}
      <SubHeader />

      <Style.scrollView>
        {/* 기본 운행 정보 기록하기 */}
        <DrivingInfoRecord />

        {/* 운행정보 */}
        <DrivingInfo />
      </Style.scrollView>

      {/* 취소, 저장 */}
      <ButtonWrap />
    </Style.container>
  );
};

export default Record;
