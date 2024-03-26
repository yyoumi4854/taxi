// react, react-native
import React, {Dispatch, SetStateAction} from 'react';

// style
import {Tabs as Style} from '../../styles/chart.styles';

interface PropsType {
  selectedTab: string;
  setSelectedTab: Dispatch<SetStateAction<string>>;
}

const Tabs = ({selectedTab, setSelectedTab}: PropsType) => {
  const handleTabPress = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <Style.container>
      <Style.tabButton
        select={selectedTab === 'month'}
        onPress={() => handleTabPress('month')}>
        <Style.tabText select={selectedTab === 'month'}>월간</Style.tabText>
      </Style.tabButton>
      <Style.tabButton
        select={selectedTab === 'year'}
        onPress={() => handleTabPress('year')}>
        <Style.tabText select={selectedTab === 'year'}>연간</Style.tabText>
      </Style.tabButton>
    </Style.container>
  );
};

export default Tabs;
