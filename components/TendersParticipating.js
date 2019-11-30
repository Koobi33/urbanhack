import React from 'react';
import {StyleSheet, View, SafeAreaView, Image} from 'react-native';
import {
  Button,
  Icon,
  List,
  ListItem,
} from 'react-native-ui-kitten';
import tenders from '../fakeData/tenders';
import styles from '../styles';

const renderItemAccessory = () => (
  <Button>Купить</Button>
);

const renderItemIcon = () => (
  <Icon name='person' />
);

const renderItem = ({ item, index }) => (
  <ListItem
    title={`${item.title} ${index + 1}`}
    description={`${item.description} ${index + 1}`}
    // icon={renderItemIcon}
    accessory={renderItemAccessory}
  />
);


const TendersParticipating = () => {
  return (
    <View style={styles.scrollContainer}>
      <List
        style={styles.list}
        data={tenders}
        renderItem={renderItem}
      />
    </View>
  );
};

export default TendersParticipating;
