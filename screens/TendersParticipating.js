import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import {
  Button,
  Icon,
  List,
  ListItem,
} from 'react-native-ui-kitten';
import tenders from '../fakeData/tenders';

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
    <View style={styles.contentContainer}>
      <List
        style={styles.list}
        data={tenders}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingTop: '15%',
  },
});

export default TendersParticipating;
