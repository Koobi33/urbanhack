import React  from 'react';
import { ImageBackground, View } from 'react-native';
import styles from '../styles';
import { Text } from 'react-native-ui-kitten';

const Card = (props) => {
  const { item } = props;
  return(
      <View style={styles.card}>
        <ImageBackground style={styles.cardImage} imageStyle={styles.cardImage_Image} source={item.image}>
          <View style={styles.cardAngle} />
          <View style={styles.innerCardAngle} />
          <Text style={styles.cardText}>{item.name}</Text>
        </ImageBackground>
      </View>
  )
};

export default Card;
