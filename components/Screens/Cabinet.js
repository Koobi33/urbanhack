import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import marketList from "../../fakeData/market/marketList";
import normalize from "react-native-normalize/src/index";
import cloud from "../../assets/urban_kit/logo.svg";
import styles from "../../styles";
import {Link} from "../../navigation/react-router";
import {Toggle} from 'react-native-ui-kitten';
import {useMoney} from '../../context/moneyContext';
import GoBack from '../HelpingComponents/GoBack';
import TouchableOpacity from "react-native-web/dist/exports/TouchableOpacity";
import {Modal} from "../../modal";
import StatisticsModal from "../Modals/StatisticsModal";
import StatisticBoughtModal from '../Modals/StatisticBoughtModal';
import ToHome from '../HelpingComponents/ToHome';
import HelpMiddle from '../HelpingComponents/HelpMiddle';
import ModalContent from './ModalContent';


export default function Cabinet(props) {
  const {activeProducts, setActiveProducts, boughtProducts, competition} = useMoney();

  useEffect(() => {
    if (competition === 'junior') {
      setHelpModalVisible(true);
    }
  }, [competition, props.location]);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalBoughtVisible, setModalBoughtVisible] = useState(false);
  const [helpModal, setHelpModalVisible] = useState(false);

  return (
    <View style={{flex: 1, marginBottom: normalize(30)}}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={helpModal}>
        <ModalContent
          text="In your personal account, you can see the purchased services, stop using them, and view statistics of the products you have placed"
          close={() => setHelpModalVisible(!helpModal)}/>
      </Modal>
      {modalVisible ?
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}>
          <StatisticsModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        </Modal>
        : null
      }
      {modalBoughtVisible ?
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalBoughtVisible}>
          <StatisticBoughtModal modalVisible={modalBoughtVisible} setModalVisible={setModalBoughtVisible}/>
        </Modal>
        : null
      }
      <Text style={[styles.productCompany, {marginLeft: normalize(20)}]}>Containers</Text>
      <FlatList
        data={activeProducts}
        renderItem={data => {
          return (
          <View style={{flexDirection: 'row', marginBottom: normalize(10), marginHorizontal: normalize(10), paddingVertical: normalize(25), justifyContent: 'space-around'}}>
            <View style={{width: normalize(70), height: normalize(70), justifyContent: 'center', alignItems: 'center', borderWidth: normalize(5), borderColor: '#03AD79', borderRadius: normalize(8), marginRight: normalize(15), marginHorizontal: normalize(10)}}>
              <Image source={cloud} style={{width: normalize(50), height: normalize(40)}}/>
            </View>
            <View style={{width: normalize(200)}}>
              <Text style={styles.productName}>{data.item.product}</Text>
              <Text style={styles.productDescription}>{`The current tariff: ${data.item.toPay}₽`}</Text>
            </View>

            <View style={{height: normalize(80), justifyContent: 'space-between'}}>
              <Link to={`/product/${data.item.id}`}>
                <View style={[styles.futureBut, {width: normalize(70), height: normalize(40),}]}>
                  <Text style={styles.futureButTextSmall}>Go over</Text>
                </View>
              </Link>
              <Toggle checked={data.item.isActive} status='success' onChange={() => {
                const newContainers = activeProducts.map((item) => {
                  if (item.id === data.item.id) {
                    let newCont = Object.assign({}, item);
                    newCont.isActive = !item.isActive;
                    return newCont;
                  } else
                  return item;
                });
                setActiveProducts(newContainers);
              }}/>
            </View>
          </View>
          );
        }}
      />
      <Text style={[styles.productCompany, {marginLeft: normalize(20)}]}>Purchases and subscriptions</Text>
      <FlatList
        data={boughtProducts}
        renderItem={data => {
          return (
            <View style={{flexDirection: 'row', marginBottom: normalize(10), marginHorizontal: normalize(10), paddingVertical: normalize(25), justifyContent: 'space-around'}}>
              <View style={{width: normalize(70), height: normalize(70), justifyContent: 'center', alignItems: 'center', borderWidth: normalize(5), borderColor: '#03AD79', borderRadius: normalize(8), marginRight: normalize(15), marginHorizontal: normalize(10)}}>
                <Image source={cloud} style={{width: normalize(50), height: normalize(40)}}/>
              </View>
              <View style={{width: normalize(200)}}>
                <Text style={styles.productName}>{data.item.product}</Text>
                <Text style={styles.productDescription}>{`The current tariff: ${data.item.toPay}₽`}</Text>
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
      <Text style={[styles.productCompany, {marginLeft: normalize(20)}]}>My proposals</Text>
      <FlatList
        data={marketList.slice(0, 3)}
        renderItem={data => {
          return (
            <View style={{
              flexDirection: 'row',
              marginBottom: normalize(10),
              marginHorizontal: normalize(10),
              paddingVertical: normalize(25),
              justifyContent: 'space-around'
            }}>

              <View style={{
                width: normalize(70),
                height: normalize(70),
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: normalize(5),
                borderColor: '#03AD79',
                borderRadius: normalize(8),
                marginRight: normalize(15),
                marginHorizontal: normalize(10)
              }}>
                <Image source={cloud} style={{width: normalize(50), height: normalize(40)}}/>
              </View>
              <View style={{width: normalize(200)}}>
                <Text style={styles.productName}>{data.item.product}</Text>
                <Text style={styles.productDescription}>{`Users: ${23}`}</Text>
                <Text style={styles.productDescription}>{`Income: ${12390}₽`}</Text>
              </View>

              <View style={{alignSelf: 'center'}}>
                {/*<Link to={`/product/${data.item.id}`}>*/}
                  <TouchableOpacity onPress={() => setModalBoughtVisible(!modalBoughtVisible)}>
                    <View style={[styles.futureBut, {width: normalize(70), height: normalize(40),}]}>
                      <Text style={styles.futureButTextSmall}>Go over</Text>
                    </View>
                  </TouchableOpacity>
                {/*</Link>*/}
              </View>
            </View>)
        }} />
      {competition === 'middle' ?  <HelpMiddle isOpen={helpModal} setOpen={setHelpModalVisible}/> : null }
      <ToHome/>
      <GoBack {...props} />
    </View>
  );
}

