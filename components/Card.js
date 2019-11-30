import React  from 'react';
import { ImageBackground, Image, View } from 'react-native';
import styles from '../styles';
import { Text } from 'react-native-ui-kitten';

const Card = (props) => {
  const { item } = props;
  return(
      <View style={styles.card}>
        <ImageBackground style={styles.cardImage} imageStyle={styles.cardImage_Image} source={item.image}>
          <Text style={styles.cardText}>{item.name}</Text>
        </ImageBackground>
      </View>
  )
};

export default Card;
