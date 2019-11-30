import React  from 'react';
import { ImageBackground, Image, View } from 'react-native';
import styles from '../styles';
import { Text } from 'react-native-ui-kitten';
import normalize from "react-native-normalize/src/index";
import gif from "../assets/images/image.gif";

const Card = (props) => {
  const { item } = props;
  return(
      <View style={styles.card}>
        <ImageBackground style={styles.cardImage} imageStyle={styles.cardImage_Image} source={item.image}>
          <View style={styles.cardAngle} />
          <View style={styles.innerCardAngle} />
          <Text style={styles.cardText}>{item.name}</Text>
        </ImageBackground>
        <Image style={{height: normalize(330), width: normalize(330)}} source={{uri: gif}} />
      </View>
  )
};

export default Card;
