import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import {Text} from 'react-native-ui-kitten';
import {Link} from '../navigation/react-router';

const UserPanel = () => {
    return (
      <View style={styles.bottomPanel}>
       <Link to={'/'}>
         <Text>
          panel
        </Text>
       </Link>
      </View>
    );
}

const styles = StyleSheet.create({
  bottomPanel: {
    flex: 1,
    width: '50%',
    position: 'absolute',
    bottom: 0,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UserPanel;
