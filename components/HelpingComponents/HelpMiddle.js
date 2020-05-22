import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../../styles';
// import {TouchableOpacity} from 'react-native-web';

const HelpMiddle = (props) => {
  const {isOpen, setOpen} = props;
  return (
      <TouchableOpacity onPress={() => {
        setOpen(!isOpen);
      }}>
        <View style={styles.helpMiddleButton}>
         <Text>?</Text>
        </View>
      </TouchableOpacity>
  );
};

export default HelpMiddle;
