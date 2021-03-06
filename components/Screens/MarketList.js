import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import marketList from "../../fakeData/market/marketList";
import cloud from '../../assets/urban_kit/logo.png';
import normalize from "react-native-normalize/src/index";
import styles from "../../styles";
import {Link} from '../../navigation/react-router';
import GoBack from '../HelpingComponents/GoBack';
import ToHome from '../HelpingComponents/ToHome';
import HelpMiddle from '../HelpingComponents/HelpMiddle';
import {useMoney} from '../../context/moneyContext';
import {Modal} from '../../modal/modal';
import ModalContent from './ModalContent';

export default function MarketList(props) {
  const {competition} = useMoney();
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    if (competition === 'junior') {
      setModalVisible(true);
    }
  }, [competition, props.location]);
  return(
    <View style={{flex: 1, marginTop: normalize(30)}}>
      <Modal
        style={{ margin: 0 }}
        animationType="slide"
        transparent={false}
        visible={modalVisible}>
        <ModalContent text="This is a list of apps in this category. At the bottom, you can add your own app or service by clicking on '+'" close={() => setModalVisible(!modalVisible)}/>
      </Modal>
    <FlatList
      keyExtractor={(item) => item.id}
      data={marketList}
      renderItem={(data) => {
        return (
          <View style={{flexDirection: 'row', marginBottom: normalize(10), marginHorizontal: normalize(10)}}>
            <View style={{width: normalize(70), height: normalize(70), justifyContent: 'center', alignItems: 'center', borderWidth: normalize(5), borderColor: '#03AD79', borderRadius: normalize(8), marginRight: normalize(15)}}>
              <Image source={cloud} style={{width: normalize(50), height: normalize(40)}}/>
            </View>
            <View style={{width: normalize(200)}}>
              <Text style={styles.productName}>{data.item.product}</Text>
              <Text style={styles.productDescription}>{data.item.company}</Text>
            </View>
            <View style={{alignSelf: 'center'}}>
            <Link to={`/product/${data.item.id}`}>
              <View style={[styles.futureBut, {width: normalize(70), height: normalize(40),}]}>
                <Text style={styles.futureButTextSmall}>Go over</Text>
              </View>
            </Link>
            </View>
          </View>
        );
      }}
    />
      <Link to={'/partnership'}>
        <TouchableOpacity>
          <View style={[styles.plusButton]}>
            <Text>+</Text>
          </View>
        </TouchableOpacity>
      </Link>
      {competition === 'middle' ?  <HelpMiddle isOpen={modalVisible} setOpen={setModalVisible}/> : null }
      <ToHome/>
  <GoBack {...props} />
    </View>
  );
}
