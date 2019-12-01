import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import marketList from "../fakeData/market/marketList";
import normalize from "react-native-normalize/src/index";
import cloud from "../assets/urban_kit/logo.svg";
import styles from "../styles";
import {Link} from "../navigation/react-router";
import {Toggle} from 'react-native-ui-kitten';
import {useMoney} from '../context/moneyContext';
import HelpButton from './HelpButton';

export default function Cabinet(props) {

  const {activeProducts, setActiveProducts, boughtProducts } = useMoney();

  return (
    <View>
      <Text style={[styles.productCompany, {marginLeft: normalize(20)}]}>Контейнеры</Text>
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
              <Text style={styles.productDescription}>{`Текущий тариф: ${data.item.toPay}`}</Text>
            </View>

            <View style={{height: normalize(80), justifyContent: 'space-between'}}>
              <Link to={`/product/${data.item.id}`}>
                <View style={[styles.futureBut, {width: normalize(70), height: normalize(40),}]}>
                  <Text style={styles.futureButTextSmall}>Перейти</Text>
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
      <Text style={[styles.productCompany, {marginLeft: normalize(20)}]}>Покупки и подписки</Text>
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
        data={marketList.slice(0, 3)}
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
      <HelpButton {...props} />
    </View>
  );
}

