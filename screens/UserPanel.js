import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import {Text} from 'react-native-ui-kitten';
import {Link} from '../navigation/react-router';
import styles from '../styles';

const UserPanel = () => {
    return (
      <View style={styles.userPanel}>
       <Link to={'/'}>
         <Text style={styles.simpleText}>
          Домой
        </Text>
       </Link>
      </View>
    );
};

export default UserPanel;
