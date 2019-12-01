import React from 'react';
import {View, Text} from 'react-native';
import Market from '../fakeData/market/marketList';

export default function ItemCard(props) {
  const {location} = props;
  return(
    <View>
      <Text>{Market[0].product}</Text>
    </View>
  );
}
