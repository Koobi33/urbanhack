import React, { useState } from 'react';
import { View, ImageBackground } from 'react-native';
import competitions from '../fakeData/competitions';
import card from '../assets/urban_kit/plashka.svg';
import {
  Tab,
  TabView,
  Text
} from 'react-native-ui-kitten';
import WrapperDescriptionCard from './WrapperDescriptionCard';
import styles from '../styles';

export default function HomeScreen() {

  const tabCards = competitions.map((item) => {
    return (
      <Tab key={item.id}>
        <View style={styles.card}>
          <ImageBackground source={card} style={styles.cardImage}>
            <Text style={styles.simpleText}>{item.name}</Text>
          </ImageBackground>
        </View>
      </Tab>
    )}
  );

  const cards = competitions.map((item) => {
    return (
      <WrapperDescriptionCard  key={item.id} >
        <View>
         <Text>{item.description}</Text>
        </View>
      </WrapperDescriptionCard>);
  });

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

