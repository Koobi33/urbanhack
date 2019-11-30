import React, {useEffect, useState} from 'react';
import { View } from 'react-native';
import competitions from '../fakeData/competitions';
import {useMoney} from '../context/moneyContext';
import {
  Tab,
  TabView,
  Text
} from 'react-native-ui-kitten';

import WrapperCard from './WrapperCard';
import WrapperDescriptionCard from './WrapperDescriptionCard';
import textCollection from '../constants/textCollection';

const tabCards = competitions.map((item) => {
  return <Tab key={item.id}><WrapperCard>
    <View>
      <Text>{item.name}</Text>
    </View>
  </WrapperCard></Tab>;
});

const cards = competitions.map((item) => {
  return <WrapperDescriptionCard  key={item.id} >
    <View>
      <Text>{item.description}</Text>
    </View>
  </WrapperDescriptionCard>;
});

export default function HomeScreen() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedCard, setSelectedCard] = useState(cards[0]);
    const [hardMode, setHardMode] = useState();
    const {competition} = useMoney();
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
        <Text> {textCollection[competition].categories.ai} </Text>
        {selectedCard}
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

