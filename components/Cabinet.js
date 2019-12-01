import React, { useState } from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import marketList from "../fakeData/market/marketList";
import normalize from "react-native-normalize/src/index";
import cloud from "../assets/images/logo.svg";
import styles from "../styles";
import {Link} from "../navigation/react-router";
import {Toggle} from 'react-native-ui-kitten';
import TouchableOpacity from "react-native-web/dist/exports/TouchableOpacity";
import ModalContent from "./ModalContent";
import {Modal} from "../modal";
import StatisticsModal from "./StatisticsModal";

export default function Cabinet() {
const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      {modalVisible ?
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}>
          <StatisticsModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        </Modal>
        : null
      }
      <Text style={[styles.productCompany, {marginLeft: normalize(20)}]}>Контейнеры</Text>
      <FlatList
        data={marketList}
        renderItem={data => {
          return (
          <View style={{flexDirection: 'row', marginBottom: normalize(10), marginHorizontal: normalize(10), paddingVertical: normalize(25), justifyContent: 'space-around'}}>
            <View style={{width: normalize(70), height: normalize(70), justifyContent: 'center', alignItems: 'center', borderWidth: normalize(5), borderColor: '#03AD79', borderRadius: normalize(8), marginRight: normalize(15), marginHorizontal: normalize(10)}}>
              <Image source={cloud} style={{width: normalize(50), height: normalize(40)}}/>
            </View>
            <View style={{width: normalize(200)}}>
              <Text style={styles.productName}>{data.item.product}</Text>
              <Text style={styles.productDescription}>{`Текущий тариф: ${123}`}</Text>
            </View>

            <View style={{height: normalize(80), justifyContent: 'space-between'}}>
              <Link to={`/product/${data.item.id}`}>
                <View style={[styles.futureBut, {width: normalize(70), height: normalize(40),}]}>
                  <Text style={styles.futureButTextSmall}>Перейти</Text>
                </View>
              </Link>
              <Toggle checked={true} status='success'/>
            </View>
          </View>
          );
        }}
      />
      <Text style={[styles.productCompany, {marginLeft: normalize(20)}]}>Покупки и подписки</Text>
      <FlatList
        data={marketList}
        renderItem={data => {
          return (
            <View style={{flexDirection: 'row', marginBottom: normalize(10), marginHorizontal: normalize(10), paddingVertical: normalize(25), justifyContent: 'space-around'}}>
              <View style={{width: normalize(70), height: normalize(70), justifyContent: 'center', alignItems: 'center', borderWidth: normalize(5), borderColor: '#03AD79', borderRadius: normalize(8), marginRight: normalize(15), marginHorizontal: normalize(10)}}>
                <Image source={cloud} style={{width: normalize(50), height: normalize(40)}}/>
              </View>
              <View style={{width: normalize(200)}}>
                <Text style={styles.productName}>{data.item.product}</Text>
                <Text style={styles.productDescription}>{`Текущий тариф: ${123}`}</Text>
              </View>

              <View style={{alignSelf: 'center'}}>
                <Link to={`/product/${data.item.id}`}>
                  <View style={[styles.futureBut, {width: normalize(70), height: normalize(40),}]}>
                    <Text style={styles.futureButTextSmall}>Перейти</Text>
                  </View>
                </Link>
              </View>
            </View>
          );
        }}
      />
      <Text style={[styles.productCompany, {marginLeft: normalize(20)}]}>Мои предложения</Text>
      <FlatList
        data={marketList}
        renderItem={data => {
          return (
            <View style={{flexDirection: 'row', marginBottom: normalize(10), marginHorizontal: normalize(10), paddingVertical: normalize(25), justifyContent: 'space-around'}}>
              <View style={{width: normalize(70), height: normalize(70), justifyContent: 'center', alignItems: 'center', borderWidth: normalize(5), borderColor: '#03AD79', borderRadius: normalize(8), marginRight: normalize(15), marginHorizontal: normalize(10)}}>
                <Image source={cloud} style={{width: normalize(50), height: normalize(40)}}/>
              </View>
              <View style={{width: normalize(200)}}>
                <Text style={styles.productName}>{data.item.product}</Text>
                <Text style={styles.productDescription}>{`Пользователей: ${23}`}</Text>
                <Text style={styles.productDescription}>{`Доход: ${12390}₽`}</Text>
              </View>

              <View style={{alignSelf: 'center'}}>
                {/*<Link to={`/product/${data.item.id}`}>*/}
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                  <View style={[styles.futureBut, {width: normalize(70), height: normalize(40),}]}>
                    <Text style={styles.futureButTextSmall}>Перейти</Text>
                  </View>
                </TouchableOpacity>
                {/*</Link>*/}
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

