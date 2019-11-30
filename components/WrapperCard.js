import React  from 'react';
import { View } from 'react-native';
import styles from '../styles';

const WrapperCard = (props) => {
  const { children } = props;
  return(
    <View style={styles.card}>
      {children}
    </View>
  )
};

export default WrapperCard;
