import React from 'react';
import {View, Text} from 'react-native';
import marketList from "../fakeData/marketList";
import {Icon, List, ListItem} from 'react-native-ui-kitten';
import {Link} from '../navigation/react-router';

export default function Market() {
  // const renderItemIcon = (style) => (
    {/*<Icon {...style} name='person' />*/}
  // );

  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.product}`}
      description={`${item.company}`}
      // icon={renderItemIcon}
    >
    </ListItem>
  );

  return (
    <List
      // style={styles.list}
      data={marketList}
      renderItem={renderItem}
    />
  );
}
