import React from 'react';
import { Text, View } from 'react-native';
import {Link} from 'react-router-dom';
import styles from '../../styles';

const ToHome = () => {
    return (
      <Link to={'/'} >
        <View style={styles.homeButton}>
          <Text>Дом</Text>
        </View>
      </Link>
    );
};

export default ToHome;
