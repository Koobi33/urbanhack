import React, { useState } from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import styles from '../styles';
import {Modal} from '../modal';
import {Button} from 'react-native-ui-kitten';


const HelpButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Button style={styles.helpButton} onPress={() => {
      setModalVisible(!modalVisible);
    }}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onDismiss={() => {
          alert('Modal has been closed.');
        }}>
        <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>
            <TouchableHighlight
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

        <Text>Halp</Text>
      </Button>

  );
};

export default HelpButton;
