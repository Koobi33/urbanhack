import React, { useState } from 'react';
import {
 View,
} from 'react-native';
import roles from '../fakeData/roles';
import Card from './Card';
import {
  Tab,
  TabView,
} from 'react-native-ui-kitten';

import ChooseRoleCard from './ChooseRoleCard';

const tabCards = roles.map((item) => {
  return <Tab title={item.name} key={item.id}><Card item={item} /></Tab>;
});

const cards = roles.map((item) => {
  return <ChooseRoleCard  key={item.id} item={item} />;
});

export default function HomeScreen() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedCard, setSelectedCard] = useState(cards[0]);
    const onSelect = (selectedIndex) => {
      setSelectedIndex(selectedIndex);
      setSelectedCard(cards[selectedIndex]);
  };

  return (
    <View style={{flex: 1, overflow: 'hidden'}}>
    <TabView
      tabBarStyle={{overflow: 'hidden'}}
      selectedIndex={selectedIndex}
      onSelect={onSelect}>
      {tabCards}
    </TabView>
      <View style={{flex: 1, marginVertical: 10}}>
        {selectedCard}
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

