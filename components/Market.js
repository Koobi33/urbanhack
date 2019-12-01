import React from 'react';
import {View, TextInput, Image, TouchableOpacity, Text, FlatList} from 'react-native';
// import search from '../assets/urban_kit/search.png';
import normalize from "react-native-normalize/src/index";
import styles from "../styles";
import top from '../fakeData/Top';

export default function Market() {
  return (
    <View>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: normalize(15)}}>
        <TextInput placeholder='Поиск...' style={{width: '80%', height: normalize(30), backgroundColor: '#fff', borderRadius: normalize(15), paddingHorizontal: normalize(15), outline: 'none'}}/>
        {/*<Image source={search} style={{width: normalize(20), height: normalize(20), marginLeft: normalize(15)}}/>*/}
      </View>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
        <TouchableOpacity style={styles.marketCard}>
          <Text style={styles.marketCardText}>CV</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.marketCard}>
          <Text style={styles.marketCardText}>CV</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.marketCard}>
          <Text style={styles.marketCardText}>CV</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.marketCard}>
          <Text style={styles.marketCardText}>CV</Text>
        </TouchableOpacity>
      </View>

      <View style={{marginHorizontal: normalize(20)}}>
      <FlatList
        horizontal={true}
        // style={{flex:1}}
        data={top}
        keyExtractor={item => item.id}
        renderItem={(data) =>
          <View style={{width: normalize(300), height: normalize(250), justifyContent: 'center', alignItems: 'center', borderWidth: normalize(8), borderColor: '#03ad79', marginVertical: normalize(40), borderRadius: normalize(10), marginRight: normalize(20)}}>
           <Text style={styles.simpleText}>{data.item.title}</Text>
          </View>
        }
      />
      </View>
    </View>
  );
}
