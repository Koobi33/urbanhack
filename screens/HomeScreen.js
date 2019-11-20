import * as WebBrowser from 'expo-web-browser';
import Link from '@react-navigation/web/src/Link';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import roles from '../fakeData/roles';
import {SafeAreaView} from 'react-native-web';
import LinksScreen from './LinksScreen';

const roleCard = (item) => {
  return(
    <View key={item.id} style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      height: 280,
      width: 180,
      backgroundColor: '#17141d',
      borderRadius: 10,
      borderWidth: 1,
      margin: 10
    }}>
      <Link toRoute="LinksScreen" params={{name: 're'}}>
      <Text style={{
        color: 'white',
        fontWeight: '800',
      }}>{item.name}</Text>
      </Link>

   <Image style={{
     height: 180,
     borderRadius: 10,
     width: 160
   }} source={item.image} />
    </View>
  )
};
const cards = roles.map((item) => {
  return roleCard(item);
});

export default function HomeScreen() {
  return (
      <View
        style={styles.contentContainer}>
          {cards}
      </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'pink',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingTop: 50,
  },
});
