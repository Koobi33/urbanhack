import React, { useState, useEffect } from 'react';
import {TouchableHighlight, View} from 'react-native';
import { Link } from '../navigation/react-router';
import { Button, Text } from 'react-native-ui-kitten';
import useTimeout from 'use-timeout';
import {Modal} from '../modal';
import {TouchableWithoutFeedback} from 'react-native-web';
import HelpButton from './HelpButton';

const Upload = (props) => {
  const [loading, setLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useTimeout(() => {
    if (loading) {
      setUploaded(true);
      setLoading(false);
    }
  }, 1500);
  const handleUpload = () => {
    setLoading(true);
  };
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
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
              <TouchableWithoutFeedback
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </Modal>
        {loading ? <Text>Loading...</Text> : null}
        {uploaded ? <Text>Upload success</Text> : null}
        {!uploaded
          ? <Button onPress={handleUpload}>Upload</Button>
          : <View style={{flex: 1, justifyContent: 'center' }}>
            <Button onPress={() => {
              setModalVisible(!modalVisible);
            }}>Посмотреть стату</Button>
            <Link to={'/'}>
              <Button>Домой</Button>
            </Link>
          </View>}
        <HelpButton {...props} />
      </View>
    );
};

export default Upload;
