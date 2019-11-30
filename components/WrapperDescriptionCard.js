import React from 'react';
import {View} from 'react-native';
import styles from '../styles';

const WrapperDescriptionCard = (props) => {
  const { children } = props;
  return (
    <View style={styles.roleDescriptionCard}>
      { children }
    </View>
  );
};

export default WrapperDescriptionCard;
