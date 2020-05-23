import React from 'react';
import { Text, View } from 'react-native';
import {Link} from '../../navigation/react-router';
import styles from '../../styles';

const ToHome = () => {
    return (
      <Link to={'/'} >
        <View style={styles.homeButton}>
          <Text>Home</Text>
        </View>
      </Link>
    );
};

export default ToHome;
