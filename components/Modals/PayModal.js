import React from 'react';
import {Image, Text, View} from 'react-native';
import normalize from 'react-native-normalize/src/index';
import faceRecognition from '../../assets/urban_kit/ezgif.com-optimize.gif';
import styles from '../../styles';
import useTimeout from 'use-timeout';

const PayModal = (props) => {
  const { close } = props;
  useTimeout(() => close(), 4300);
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center', backgroundColor: '#000'}}>
        <Image style={{height: normalize(100), alignSelf: 'center',  width: normalize(100)}} source={faceRecognition} />
        <Text style={styles.simpleText}>Авторизация платежа в Сбербанк ID....</Text>
      </View>
    );
};

export default PayModal;
