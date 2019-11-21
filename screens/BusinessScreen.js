import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import {Text} from 'react-native-ui-kitten';
import Card from '../components/Card';
import businessScenarios from '../fakeData/businessScenarios';
const cards = businessScenarios.map((item) => {
  return <Card key={item.id} item={item} />;
});
const BusinessScreen = () => {
    return (
      <View style={styles.contentContainer}>
       {cards}
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

export default BusinessScreen;
