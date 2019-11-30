import React, { useState } from 'react';
import { VictoryPie, VictoryLabel } from "victory";
import {
  View,
} from 'react-native';
import roles from '../fakeData/roles';
import WrapperCard from '../components/WrapperCard';
import {
  Tab,
  TabView,
  Text,
} from 'react-native-ui-kitten';
import WrapperDescriptionCard from '../components/WrapperDescriptionCard';

const tabCards = roles.map((item) => {
  return <Tab title={item.name} key={item.id}><WrapperCard><Text>{item.name}</Text></WrapperCard></Tab>;
});

const cards = roles.map((item) => {
  return <WrapperDescriptionCard  key={item.id}>
    <svg viewBox="0 0 300 300">
      <VictoryPie
        standalone={false}
        width={300} height={300}
        data={[
          { x: 1, y: 120 }, { x: 2, y: 150 }, { x: 3, y: 75 }
        ]}
        innerRadius={68} labelRadius={100}
        style={{ labels: { fontSize: 20, fill: "white" } }}
      />
      <VictoryLabel
        textAnchor="middle"
        style={{ fontSize: 20 }}
        x={150} y={150}
        text="Pie!"
      />
    </svg>
  </WrapperDescriptionCard>;
});

export default function Cabinet() {
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

Cabinet.navigationOptions = {
  header: null,
};

