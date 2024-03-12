// react, react-native

// library

// assets, utils, realm

// component

// style
import {MonthBusinessAmount as Style} from '../../styles/home.styles';

const MonthBusinessAmount = () => {
  return (
    <Style.container>
      <Style.topWrap>
        <Style.title>영업금액</Style.title>
        <Style.moneyValueText>2,000,000원</Style.moneyValueText>
      </Style.topWrap>

      <Style.bottomWrap>
        <Style.bottomBox>
          <Style.subTitle>카드</Style.subTitle>
          <Style.subValueText>2,000,000원</Style.subValueText>
        </Style.bottomBox>

        <Style.line></Style.line>

        <Style.bottomBox>
          <Style.subTitle>현금</Style.subTitle>
          <Style.subValueText>2,000,000원</Style.subValueText>
        </Style.bottomBox>
      </Style.bottomWrap>
    </Style.container>
  );
};

export default MonthBusinessAmount;
