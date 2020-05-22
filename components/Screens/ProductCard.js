import React, {useState, useEffect} from 'react';
import cloud from '../../assets/urban_kit/logo.png';
import moneyIcon from '../../assets/urban_kit/valuta.png';
import styles from "../../styles";
import normalize from "react-native-normalize/src/index";
import marketList from "../../fakeData/market/marketList";

import {View, Text, TouchableOpacity, Image} from 'react-native';

import {useMoney} from '../../context/moneyContext';
import {Modal} from '../../modal/modal';
import {Link} from '../../navigation/react-router';
import ModalContent from './ModalContent';
import PayModal from '../Modals/PayModal';
import GoBack from '../HelpingComponents/GoBack';
import ToHome from '../HelpingComponents/ToHome';


export default function ProductCard(props) {
  const [product, setProduct] = useState(marketList[0]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalBuyVisible, setModalBuyVisible] = useState(false);
  const [isBought, setBought] = useState(false);
  const [trial, setTrial] = useState(false);
  const {competition, activeProducts, setActiveProducts, money, setMoney, setBoughtProducts, boughtProducts} = useMoney();

  useEffect(() => {
    if (competition === 'junior') {
      setModalVisible(true);
    }
  }, [competition, props.location]);

  useEffect(() => {
    if (marketList[props.location.pathname.slice(9)]) {
      setProduct(marketList[props.location.pathname.slice(9)]);
    }
  }, [props.location]);

  const handleBuy = (item, isTrial) => {
    setBought(true);
    setModalBuyVisible(true);
    const buyed = Object.assign({}, product);
    if (product.type === 'docker') {
      isTrial ? buyed.toPay = '0' : buyed.toPay = item;
      setTrial(isTrial);
      buyed.isActive = true;
      setActiveProducts(activeProducts.concat(buyed));
    } else {
      isTrial ? buyed.toPay = '0' : buyed.toPay = item;
      setTrial(isTrial);
      setBoughtProducts(boughtProducts.concat(buyed));
      setMoney(money - buyed.toPay);
    }
  };
  const costArr = product.cost.map((item, index) => {
    return (
      <TouchableOpacity
        style={[styles.futureBut, {width: normalize(110), height: normalize(150)}]}
        onPress={() => handleBuy(item, false)}
      >
        {index === 0 ? <Text style={styles.futureButText}>Basic</Text> : null}
        {index === 1 ? <Text style={styles.futureButText}>Middle</Text> : null}
        {index === 2 ? <Text style={styles.futureButText}>Pro</Text> : null}
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: normalize(10)}}>
          <Image source={moneyIcon} style={{width: normalize(30), height: normalize(30)}}/>
          <Text style={styles.simpleTextMoney}>{item}</Text>
        </View>
      </TouchableOpacity>
    )
  });
  return (
    <View style={{paddingHorizontal: normalize(15), marginTop: normalize(80)}}>

      <Modal
        style={{ margin: 0 }}
        animationType="slide"
        transparent={false}
        visible={modalVisible}>
        <ModalContent
          text="Это карточка продукта. Можно выбрать тарифный план, взять пробную версию и связаться с консультантом"
          close={() => setModalVisible(!modalVisible)}/>
      </Modal>

      {modalBuyVisible &&
      (<Modal
        style={{ margin: 0 }}
        animationType="slide"
        transparent={false}
        visible={modalBuyVisible}>
        <PayModal close={() => setModalBuyVisible(!modalBuyVisible)}/>
      </Modal>)}

      <View style={{flexDirection: 'row'}}>
        <View style={{
          width: normalize(100),
          height: normalize(100),
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: normalize(5),
          borderColor: '#03AD79',
          borderRadius: normalize(8),
          marginRight: normalize(15)
        }}>
          <Image source={cloud} style={{width: normalize(70), height: normalize(50)}}/>
        </View>
        <View>
          <Text style={styles.productName}>{product.product}</Text>
          <Text style={styles.productCompany}>{product.company}</Text>
        </View>
      </View>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <TouchableOpacity>
          <Link to={'/partnership'}>
            <View style={[styles.futureBut, {
              width: normalize(300),
              height: normalize(40),
              alignSelf: 'center',
              marginTop: normalize(20)
            }]}>
              <Text style={styles.futureButText}>Стать партнером</Text>
            </View>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleBuy(product, true)}>
          <View style={[styles.futureBut, {
            width: normalize(300),
            height: normalize(40),
            alignSelf: 'center',
            marginTop: normalize(20)
          }]}>
            <Text style={styles.futureButText}>Пробная версия</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Link to={'/chat'}>
            <View style={[styles.futureBut, {
              width: normalize(300),
              height: normalize(40),
              alignSelf: 'center',
              marginTop: normalize(20)
            }]}>
              <Text style={styles.futureButText}>Чат со специалистом</Text>
            </View>
         </Link>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: normalize(20)}}>
          {costArr}
        </View>
      </View>
      <ToHome/>
      <GoBack {...props} />
      <Text style={styles.productDescription}>{product.description}</Text>
      {isBought ?
        <View style={{flex: 1}}>
          <Text style={styles.productDescription}>{product.success}</Text>
        </View>
        : null}
      {trial ?
        <View style={{flex: 1}}>
          <Text style={styles.productDescription}>{product.trial}</Text>
        </View>
        : null}
    </View>
  );
}
