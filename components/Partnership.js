import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import {Input, normalize} from 'react-native-elements';
import { Button } from 'react-native-ui-kitten';
import styles from '../styles';
import TouchableOpacity from 'react-native-web/dist/exports/TouchableOpacity';
import HelpButton from './HelpButton';

const Partnership = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [need, setNeed] = useState('');
    return (
      <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#1d1e1f' }}>
        <Input
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder='Имя'
        />
        <Input
          value={email}
          onChangeText={(text) => setEmail(text)}
          textContentType="emailAddress"
          placeholder='email'
        />
        <Input
          value={need}
          onChangeText={(text) => setNeed(text)}
          placeholder='Потребности'
        />
        <TouchableOpacity
          style={{marginTop: normalize(20)}}
          onPress={() => console.log(name, email, need)}>
            <View style={[styles.futureBut, {width: normalize(240), height: normalize(40), alignSelf: 'center'}]}>
                <Text style={styles.futureButText}>Отправить</Text>
            </View>
        </TouchableOpacity>
          <HelpButton {...props} />
      </View>
    );
};

export default Partnership;
