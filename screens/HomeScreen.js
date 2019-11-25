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
import normalize from 'react-native-normalize/src/index';
import styles from '../styles';

const cards = roles.map((item) => {
  return <Card key={item.id} item={item} />;
});

export default function HomeScreen() {
  return (
      <ScrollView
      contentContainerStyle={styles.scrollContainer}
      >
        <Text style={styles.simpleText}>Выбери направление</Text>
        <View style={styles.contentContainer}>
          {cards}
        </View>
      </ScrollView>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

