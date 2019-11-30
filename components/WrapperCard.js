import React  from 'react';
import {Image, View} from 'react-native';
import styles from '../styles';
import normalize from "react-native-normalize/src/index";
import gif from "../assets/images/image.gif";

const WrapperCard = (props) => {
  const { children } = props;
  return(
    <View style={styles.card}>
      {children}
      <Image style={{height: normalize(330), width: normalize(330)}} source={{uri: gif}} />
    </View>
  )
};

export default WrapperCard;
