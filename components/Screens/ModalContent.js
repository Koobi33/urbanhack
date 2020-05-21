import React from 'react';
import { View, Image, Text } from 'react-native';
import gif from '../../assets/urban_kit/gif/gif_irina.gif';
import normalize from 'react-native-normalize/src/index';
import styles from '../../styles';
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
            <View style={[styles.futureBut, {width: normalize(240), height: normalize(40), alignSelf: 'center'}]}>
              <Text style={styles.futureButText}>Clear</Text>
            </View>
        </TouchableOpacity>
      </View>
      </View>
    );
};

export default ModalContent;
