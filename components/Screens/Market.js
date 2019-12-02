import React, {useState, useEffect} from 'react';
import {View, TextInput, TouchableOpacity, Text, FlatList} from 'react-native';
import normalize from "react-native-normalize/src/index";
import styles from "../../styles";
import top from '../../fakeData/Top';
import {Link} from '../../navigation/react-router';

import marketCategories from '../../fakeData/market/marketCategories';
import aiCategories from '../../fakeData/market/aiCategories';
import iaasCategories from '../../fakeData/market/iaasCategories';
import licensesCategories from '../../fakeData/market/licensesCategories';
import paasCategories from '../../fakeData/market/paasCategories';

import {useMoney} from '../../context/moneyContext';
import {Modal} from '../../modal';
import ModalContent from './ModalContent';
import HelpButton from '../HelpingComponents/HelpButton';

export default function Market(props) {
  const {competition} = useMoney();
  const [categories, setCategories] = useState(marketCategories);
  const [modalVisible, setModalVisible] = useState(false);
  const [categoriesButtons, setCategoriesButtons] = useState(categories[competition].map((item) =>
    <Link to={item.link}>
      <TouchableOpacity style={styles.marketCard}>
        <Text style={styles.marketCardText}>{item.name}</Text>
      </TouchableOpacity>
    </Link>
  ));

useEffect(() => {
  setCategoriesButtons(categories[competition].map((item) =>
    <Link to={item.link}>
      <TouchableOpacity style={styles.marketCard}>
        <Text style={styles.marketCardText}>{item.name}</Text>
      </TouchableOpacity>
    </Link>
  ))
}, [categories]);
  useEffect(() => {
      switch (props.location.pathname) {
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
  }, [props.location]);
  useEffect(() => {
    if (competition === 'junior') {
      setModalVisible(true);
    }
  }, [competition, props.location]);
  return (
    <View style={{flex: 1, marginTop: normalize(7)}}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}>
        <ModalContent text="ksjadfnk sf ksjadfnk sf ksjadfnk sf ksjadfnk sf ksjadfnk sf ksjadfnk sf ksjadfnk sf ksjadfnk sf " close={() => setModalVisible(!modalVisible)}/>
      </Modal>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: normalize(15)}}>
        <TextInput placeholder='Поиск...' style={{width: '80%', height: normalize(30), backgroundColor: '#fff', borderRadius: normalize(15), paddingHorizontal: normalize(15), outline: 'none'}}/>
      </View>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
        {categoriesButtons}
      </View>

      <View style={{marginHorizontal: normalize(20)}}>
      <FlatList
        horizontal={true}
        data={top}
        keyExtractor={item => item.id}
        renderItem={(data) =>
          <Link to={'marketlist'}>
            <TouchableOpacity>
             <View style={{width: normalize(300), height: normalize(250), justifyContent: 'center', alignItems: 'center', borderWidth: normalize(8), borderColor: '#03ad79', marginVertical: normalize(40), borderRadius: normalize(10), marginRight: normalize(20)}}>
                <Text style={styles.simpleText}>{data.item.title}</Text>
             </View>
            </TouchableOpacity>
          </Link>
        }
      />
        <HelpButton {...props} />
      </View>
    </View>
  );
}
