import React, { useState } from 'react';
import { TouchableHighlight, Text, View, ScrollView } from 'react-native';
import Card from '../components/Card';
import businessScenarios from '../fakeData/businessScenarios';
import styles from '../styles';
import {Button} from 'react-native-ui-kitten';
import {Modal} from '../modal';
const cards = businessScenarios.map((item) => {
  return <Card key={item.id} item={item} />;
});
const BusinessScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (

      <ScrollView  contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.simpleText}>Выбери задачу</Text>
        <View style={styles.contentContainer}>
         {cards}
        </View>
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
        <Button onPress={() => {
          setModalVisible(!modalVisible);
        }}>Test modal </Button>
      </ScrollView>
    );
};

export default BusinessScreen;
