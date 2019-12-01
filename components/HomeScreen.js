import React, { useState } from 'react';
import { View, ImageBackground } from 'react-native';
import competitions from '../fakeData/competitions';
import card from '../assets/urban_kit/plashka.svg';
import info from '../assets/images/info.svg';
import {
  Tab,
  TabView,
  Text
} from 'react-native-ui-kitten';
import WrapperDescriptionCard from './WrapperDescriptionCard';
import styles from '../styles';
import {normalize} from "react-native-elements";

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
      <View  key={item.id} style={{flex: 1, marginTop: normalize(55)}} >
         <Text style={styles.simpleText}>{item.description}</Text>
      </View>);
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
      tabBarStyle={{overflow: 'hidden', backgroundColor: '#1D1E1F'}}
      indicatorStyle={{backgroundColor: '#f6eb8c'}}
      selectedIndex={selectedIndex}
      onSelect={onSelect}>
      {tabCards}
    </TabView>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: normalize(285), marginTop: normalize(40), alignSelf: 'center'}}>
        <ImageBackground source={info} style={{flex: 1, width: normalize(300), height: normalize(255)}}>
        {selectedCard}
        </ImageBackground>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

