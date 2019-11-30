import React from 'react';
import { StyleSheet, View, Platform, Image, TouchableOpacity } from 'react-native';
import {Text, Layout} from 'react-native-ui-kitten';
import {Link} from '../navigation/react-router';
import styles from '../styles';
import { useMoney } from '../context/moneyContext';
import moneyIcon from '../assets/images/valuta.svg';
import {normalize} from "react-native-elements";


const UserPanel = () => {
  const { money, setMoney, role } = useMoney();
  return (
      <View style={styles.userPanel}>
        <TouchableOpacity onPress={() => setMoney(money + 10)}>
          <Image source={moneyIcon} style={{height: normalize(20), width: normalize(20)}} />
          <Text  style={styles.simpleTextMoney}>{money}</Text>
        </TouchableOpacity>
        <Link to={'/cabinet'}>
          {/*<Layout>*/}
          <View style={styles.flexLK}>
            <Text style={styles.simpleTextLK}>
              Личный<br/>
              кабинет
            </Text>
          </View>
          {/*</Layout>*/}
       </Link>
      </View>
    );
};

export default UserPanel;
