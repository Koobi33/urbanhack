import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {Input, normalize} from 'react-native-elements';
import styles from '../../styles';
import GoBack from '../HelpingComponents/GoBack';
import ToHome from '../HelpingComponents/ToHome';
import {Link} from '../../navigation/react-router';

const Partnership = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [need, setNeed] = useState('');
    return (
      <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#1d1e1f' }}>
        <Input
          value={name}
          inputStyle={{color: '#f6eb8c', outline: 'none'}}
          onChangeText={(text) => setName(text)}
          placeholder='Имя'
        />
        <Input
          inputStyle={{color: '#f6eb8c', outline: 'none'}}
          value={email}
          onChangeText={(text) => setEmail(text)}
          textContentType="emailAddress"
          placeholder='Email'
        />
        <Input
          inputStyle={{color: '#f6eb8c', outline: 'none'}}
          value={need}
          onChangeText={(text) => setNeed(text)}
          placeholder='Подробности'
        />
        <TouchableOpacity
          style={{marginTop: normalize(20)}}
          onPress={() => console.log(name, email, need)}>
            <View style={[styles.futureBut, {width: normalize(240), height: normalize(40), alignSelf: 'center'}]}>
                <Link href={`mailto:koobi33@gmail.com?subject=Партнерство%20со%20SberCloud%20&body=${email}%20-%20${name}%20${need}`}>
                    <Text style={styles.futureButText}>Отправить</Text>
                </Link>
            </View>
        </TouchableOpacity>
          <ToHome/>
          <GoBack {...props} />
      </View>
    );
};

export default Partnership;
