import React  from 'react';
import {Link} from '../navigation/react-router';
import {Image, Text, View} from 'react-native';
import normalize from 'react-native-normalize/src/index';

const Card = (props) => {
  const { item } = props;
  return(
    <Link
      key={item.id}
      to={item.link}
      underlayColor="#f0f4f7"
    >
      <View  style={{
        alignItems: 'center',
        justifyContent: 'space-around',
        height: normalize(250),
        width: normalize(150),
        backgroundColor: '#17141d',
        borderRadius: normalize(10),
        borderWidth: 1,
        margin: normalize(10)
      }}>

        <Text style={{
          color: 'white',
          fontWeight: '800',
        }}>{item.name}</Text>


        <Image style={{
          height: normalize(180),
          borderRadius: 10,
          width: normalize(140),
        }} source={item.image} />
      </View>
    </Link>
  )
};

export default Card;
