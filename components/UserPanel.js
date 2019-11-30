import React from 'react';
import {StyleSheet, View, Platform, Image} from 'react-native';
import {Text, Layout} from 'react-native-ui-kitten';
import {Link} from '../navigation/react-router';
import styles from '../styles';
import { useMoney } from '../context/moneyContext';
import normalize from "react-native-normalize/src/index";
import gif from "../assets/images/image.gif";

const UserPanel = () => {
  const { money, setMoney, role } = useMoney();
  return (
      <View style={styles.userPanel}>
        <Image style={{height: normalize(330), width: normalize(330)}} source={{uri: gif}} />
        <Text onPress={() => setMoney(money + 10)} style={styles.simpleText}>${money}</Text>
        <Link to={'/cabinet'}>
          <Layout>
            <Text style={styles.simpleText}>
              {role}
            </Text>
          </Layout>
       </Link>
      </View>
    );
};

export default UserPanel;
