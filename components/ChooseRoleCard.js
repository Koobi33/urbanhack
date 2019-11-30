import React from 'react';
import { Link } from '../navigation/react-router';
import {View, Image} from 'react-native';
import styles from '../styles';
import {Text, Button} from 'react-native-ui-kitten';
import LinearGradient from 'react-native-web-linear-gradient/src';
import { useMoney } from '../context/moneyContext';
import gif from '../assets/images/image.gif';
import normalize from 'react-native-normalize/src/index';

const ChooseRoleCard = (props) => {
  const { setRole } = useMoney();
  const { item } = props;
  return (
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.roleDescriptionCard}>
        <View style={styles.cardImage}>
          <Image style={{height: normalize(330), width: normalize(330)}} source={{uri: gif}} />
          <Text style={styles.cardText}>Супр крутое описание роли {item.name}</Text>
         <Button onPress={() => setRole(item.name)} status='info'> <Link to={item.link}>ВЫБРАТЬ</Link></Button>
        </View>
      </LinearGradient>
    );
};

export default ChooseRoleCard;
