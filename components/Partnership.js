import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-ui-kitten';

const Partnership = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [need, setNeed] = useState('');
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
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
        <Button
          onPress={() => {
            console.log(name, email, need);
        }}>Отправить
        </Button>
      </View>
    );
};

export default Partnership;
