import React from 'react';
import {View, Image, Text, TouchableHighlight} from 'react-native';
import gif from '../assets/urban_kit/gif/gif_irina.gif';
import FutureButton from './FutureButton';
import normalize from 'react-native-normalize/src/index';
import {TouchableWithoutFeedback} from 'react-native-web';
import styles from '../styles';
import TouchableOpacity from 'react-native-web/dist/exports/TouchableOpacity';

const ModalContent = (props) =>  {
  const {close, text} = props;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center', backgroundColor: '#1D1E1F'}}>
          <Image style={{flex: 1, height: normalize(180)}} source={gif}/>
          <View style={{flex: 1, justifyContent: 'center', alignContent: 'center',}}>
          <Text style={styles.simpleText}>{text}</Text>
          <TouchableOpacity
            style={{alignSelf: 'center', marginTop: normalize(10)}}
           onPress={close}>
          <FutureButton name="Понятно"/>
        </TouchableOpacity>
      </View>
      </View>
    );
};

export default ModalContent;
