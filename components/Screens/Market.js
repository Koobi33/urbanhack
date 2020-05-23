import React, {useState, useEffect} from 'react';
import {View, TextInput, TouchableOpacity, Text, FlatList, ScrollView} from 'react-native';
import normalize from "react-native-normalize/src/index";
import styles from "../../styles";
import top from '../../fakeData/top';
import {Link, useLocation} from '../../navigation/react-router';

import marketCategories from '../../fakeData/market/marketCategories';
import aiCategories from '../../fakeData/market/aiCategories';
import iaasCategories from '../../fakeData/market/iaasCategories';
import licensesCategories from '../../fakeData/market/licensesCategories';
import paasCategories from '../../fakeData/market/paasCategories';

import {useMoney} from '../../context/moneyContext';
import {Modal} from '../../modal/modal';
import ModalContent from './ModalContent';
import GoBack from '../HelpingComponents/GoBack';
import ToHome from '../HelpingComponents/ToHome';
import HelpMiddle from '../HelpingComponents/HelpMiddle';

export default function Market(props) {
  const {competition} = useMoney();
  let location = useLocation();
  const [categories, setCategories] = useState(marketCategories);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTwo, setModalTwo] = useState(false);
  const [categoriesButtons, setCategoriesButtons] = useState(categories[competition].map((item) =>
    <TouchableOpacity style={styles.marketCard} key={item.id}>
      <Link to={item.link} >
        <Text style={styles.marketCardText}>{item.name}</Text>
      </Link>
    </TouchableOpacity>
  ));

useEffect(() => {
  setCategoriesButtons(categories[competition].map((item) =>
    <TouchableOpacity  key={item.id} style={styles.marketCard}>
      <Link to={item.link}>
        <Text style={styles.marketCardText}>{item.name}</Text>
      </Link>
    </TouchableOpacity>
  ))
}, [categories]);
  useEffect(() => {
      switch (location.pathname) {
        case ('/ai'): {
          setCategories(aiCategories);
          break;
        }
        case ('/paas'): {
          setCategories(paasCategories);
          break;
        }
        case ('/iaas'): {
          setCategories(iaasCategories);
          break;
        }
        case ('/licenses'): {
          setCategories(licensesCategories);
          break;
        }
        default: {
          setCategories(marketCategories);
        }
      }
  }, [location]);
  useEffect(() => {
    if (competition === 'junior') {
      if (location.pathname === '/market') {
        setModalVisible(true);
      } else {
        setModalTwo(true);
      }
    }

  }, [competition, location]);
  return (
    <View style={{flex: 1, marginTop: normalize(30)}}>
      <Modal
        style={{ margin: 0 }}
        animationType="slide"
        transparent={false}
        visible={modalVisible}>
        <ModalContent text="Here you can see the main categories and the best selections for you" close={() => setModalVisible(!modalVisible)}/>
      </Modal>
      <Modal
        style={{ margin: 0 }}
        animationType="slide"
        transparent={false}
        visible={modalTwo}>
        <ModalContent text="Here you can see detailed categories and the best selections among them" close={() => setModalTwo(!modalTwo)}/>
      </Modal>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingBottom: normalize(15)}}>
        <TextInput placeholder='Searching...' style={{width: '80%', height: normalize(30), backgroundColor: '#fff', borderRadius: normalize(15), paddingHorizontal: normalize(15)}}/>
      </View>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
        {categoriesButtons}
      </View>

      <View style={{marginHorizontal: normalize(20)}}>
        {/*<Text style={styles.futureButTextSmall}>A selection for you</Text>*/}
      <FlatList
        horizontal={true}
        data={top}
        keyExtractor={item => item.id}
        renderItem={(data) =>
          <TouchableOpacity>
            <Link to={'/marketlist'}>
             <View style={{width: normalize(300), height: normalize(250), justifyContent: 'center', alignItems: 'center', borderWidth: normalize(8), borderColor: '#03ad79', marginVertical: normalize(40), borderRadius: normalize(10), marginRight: normalize(20)}}>
                <Text style={styles.simpleText}>{data.item.title}</Text>
             </View>
            </Link>
          </TouchableOpacity>
        }
      />
        {competition === 'middle' ?  <HelpMiddle isOpen={modalVisible} setOpen={setModalVisible}/> : null }
        <ToHome/>
        <GoBack {...props} />
      </View>
    </View>
  );
}
