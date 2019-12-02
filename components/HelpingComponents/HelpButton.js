import React from 'react';
import {Text, View} from 'react-native';
import styles from '../../styles';

import {TouchableOpacity} from 'react-native-web';





const HelpButton = (props) => {
  const menshe = '<';
  const {history} = props;
  return (
<TouchableOpacity onPress={() => {
 history.goBack();
}}>
  <View style={styles.helpButton}>
    <Text>{menshe}</Text>
    </View>
</TouchableOpacity>
  );
};

export default HelpButton;
