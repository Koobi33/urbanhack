import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from '../../styles';

// import {TouchableOpacity} from 'react-native-web';





const GoBack = (props) => {
  const menshe = '<';
  const {history} = props;
  return (
<TouchableOpacity onPress={() => {
 history.goBack();
}}>
  <View style={styles.goBack}>
    <Text>{menshe}</Text>
    </View>
</TouchableOpacity>
  );
};

export default GoBack;
