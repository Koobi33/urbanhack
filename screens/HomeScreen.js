import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import roles from '../fakeData/roles';
import { Link } from "../navigation/react-router";
import Card from '../components/Card';

const cards = roles.map((item) => {
  return <Card key={item.id} item={item} />;
});

export default function HomeScreen() {
  return (
      <View style={styles.contentContainer}>
          {cards}
      </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
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
