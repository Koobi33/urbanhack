import React  from 'react';
import {Link} from '../navigation/react-router';
import {Image, Text, View} from 'react-native';

const Card = (props) => {
  const { item } = props;
  return(
    <Link
      key={item.id}
      to={item.link}
      underlayColor="#f0f4f7"
    >
      <View  style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 250,
        width: 180,
        backgroundColor: '#17141d',
        borderRadius: 10,
        borderWidth: 1,
        margin: 10
      }}>

        <Text style={{
          color: 'white',
          fontWeight: '800',
        }}>{item.name}</Text>


        <Image style={{
          height: 180,
          borderRadius: 10,
          width: 160
        }} source={item.image} />
      </View>
    </Link>
  )
};

export default Card;
