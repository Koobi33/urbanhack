import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import {normalize} from 'react-native-elements';
import button from '../assets/urban_kit/big_butt.svg';
import styles from '../styles';

const FutureButton = (props) => {
  const {name} = props;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ImageBackground source={button} style={{flex: 1, justifyContent: 'center', alignContent: 'center', width: normalize(175), height: normalize(40), }}>
          <Text style={[styles.simpleTextMoney, {paddingTop: normalize(6)}]}>{name}</Text>
        </ImageBackground>
      </View>
    );
};

export default FutureButton;
