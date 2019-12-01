import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import cloud from '../assets/urban_kit/logo.svg';
import normalize from "react-native-normalize/src/index";
import marketList from "../fakeData/marketList";
import styles from "../styles";
import money from '../assets/urban_kit/valuta.svg';


export default function ProductCard() {
  return(
    <View style={{paddingHorizontal: normalize(15), marginTop: normalize(15)}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{width: normalize(100), height: normalize(100), justifyContent: 'center', alignItems: 'center', borderWidth: normalize(5), borderColor: '#03AD79', borderRadius: normalize(8), marginRight: normalize(15)}}>
          <Image source={cloud} style={{width: normalize(70), height: normalize(50)}}/>
        </View>
        <View>
          <Text style={styles.productName}>{marketList[0].product}</Text>
          <Text style={styles.productCompany}>{marketList[0].company}</Text>
          {/*<View style={{flexDirection: 'row', alignItems: 'center', marginTop: normalize(10)}}>*/}
          {/*  <Image source={money} style={{width: normalize(30), height: normalize(30), marginRight: normalize(5)}}/>*/}
          {/*  <Text style={styles.simpleTextMoney}>{marketList[0].cost}</Text>*/}
          {/*</View>*/}
        </View>
      </View>
      <View>
        <TouchableOpacity style={[styles.futureBut, {width: normalize(300), height: normalize(40), alignSelf: 'center', marginTop: normalize(20)}]}>
          <Text style={styles.futureButText}>Стать партнером</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: normalize(20)}}>
          <TouchableOpacity style={[styles.futureBut, {width: normalize(110), height: normalize(150)}]}>
            <Text style={styles.futureButText}>Basic</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: normalize(10)}}>
              <Image source={money} style={{width: normalize(30), height: normalize(30)}}/>
              <Text style={styles.simpleTextMoney}>{marketList[0].cost1}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.futureBut, {width: normalize(110), height: normalize(150)}]}>
            <Text style={styles.futureButText}>Middle</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: normalize(10)}}>
              <Image source={money} style={{width: normalize(30), height: normalize(30)}}/>
              <Text style={styles.simpleTextMoney}>{marketList[0].cost2}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.futureBut, {width: normalize(110), height: normalize(150)}]}>
            <Text style={styles.futureButText}>Pro</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: normalize(10)}}>
              <Image source={money} style={{width: normalize(30), height: normalize(30)}}/>
              <Text style={styles.simpleTextMoney}>{marketList[0].cost3}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/*<Text style={styles.productCompany}>{marketList[0].company}</Text>*/}
      <Text style={styles.productDescription}>{marketList[0].description}</Text>
    </View>
  );
}
