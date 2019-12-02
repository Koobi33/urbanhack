import React, { useState } from 'react';
import {View, ImageBackground } from 'react-native';
import competitions from '../../fakeData/competitions';

import card from '../../assets/urban_kit/1.svg';
import info from '../../assets/urban_kit/2.svg';
import { Link } from '../../navigation/react-router';

import {
  Tab,
  TabView,
  Text
} from 'react-native-ui-kitten';
import styles from '../../styles';
import {normalize} from "react-native-elements";
import {useMoney} from '../../context/moneyContext';
import TouchableOpacity from 'react-native-web/dist/exports/TouchableOpacity';
import {Modal} from '../../modal';
import ModalContent from './ModalContent';

export default function HomeScreen() {
const { setCompetition } = useMoney();
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
      <View  key={item.id} style={{flex: 1}}>
        <ImageBackground source={info} style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', width: normalize(300), height: normalize(255),  paddingTop: normalize(70)}}>
          <Text style={styles.simpleText}>{item.description}</Text>

          <TouchableOpacity
           style={{marginTop: normalize(35)}}
           onPress={() => {
             localStorage.setItem('competition', item.name);
             setCompetition(item.name);
           }}>
          <Link to={'/market'}>
            <View style={[styles.futureBut, {width: normalize(240), height: normalize(40), alignSelf: 'center'}]}>
              <Text style={styles.futureButText}>Выбрать</Text>
            </View>
          </Link>
         </TouchableOpacity>
         </ImageBackground>
      </View>);
  });
    const [modalVisible, setModalVisible] = useState(true);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedCard, setSelectedCard] = useState(cards[0]);

    const onSelect = (selectedIndex) => {
      setSelectedIndex(selectedIndex);
      setSelectedCard(cards[selectedIndex]);
  };
  return (
    <View style={{flex: 1, overflow: 'hidden'}}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}>
        <ModalContent text="ksjadfnk sf ksjadfnk sf ksjadfnk sf ksjadfnk sf ksjadfnk sf ksjadfnk sf ksjadfnk sf ksjadfnk sf " close={() => setModalVisible(!modalVisible)}/>
      </Modal>
    <TabView
      tabBarStyle={{overflow: 'hidden', backgroundColor: '#1D1E1F'}}
      indicatorStyle={{backgroundColor: '#f6eb8c', marginBottom: normalize(25)}}
      selectedIndex={selectedIndex}
      onSelect={onSelect}>
      {tabCards}
    </TabView>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: normalize(285), marginTop: normalize(5), alignSelf: 'center'}}>
        {selectedCard}
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

