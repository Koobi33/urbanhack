import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import {Text } from 'react-native-ui-kitten';
import {Link} from '../../navigation/react-router';
import styles from '../../styles';
import { useMoney } from '../../context/moneyContext';
import moneyIcon from '../../assets/urban_kit/valuta.png';
import {normalize} from "react-native-elements";


const UserPanel = () => {
  const { money, setMoney } = useMoney();
  return (
      <View style={styles.userPanel}>
        <TouchableOpacity onPress={() => setMoney(money + 10)} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <Image source={moneyIcon} style={{height: normalize(20), width: normalize(20)}} />
          <Text  style={styles.simpleTextMoney}>{money}</Text>
        </TouchableOpacity>
        <Link to={'/cabinet'}>
          <View>
            <Text style={styles.simpleTextLK}>
              Personal settings
            </Text>
          </View>
       </Link>
      </View>
    );
};

export default UserPanel;
