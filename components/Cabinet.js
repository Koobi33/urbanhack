import React, { useState } from 'react';
// import { VictoryPie, VictoryLabel, VictoryAnimation } from "victory";
import gif from '../assets/images/image.gif';
import {VictoryChart, VictoryLine, VictoryTheme, VictoryPie, VictoryBar} from 'victory'
import {
  Image,
  View,
} from 'react-native';
import roles from '../fakeData/roles';
import WrapperCard from '../components/WrapperCard';
import {
  Tab,
  TabView,
  Text,
} from 'react-native-ui-kitten';
import WrapperDescriptionCard from '../components/WrapperDescriptionCard';
import normalize from "react-native-normalize/src/index";

const tabCards = roles.map((item) => {
  return <Tab title={item.name} key={item.id}><WrapperCard><Text>{item.name}</Text></WrapperCard></Tab>;
});

const cards = roles.map((item) => {
  return <WrapperDescriptionCard  key={item.id}>
    <VictoryChart
      theme={VictoryTheme.material}
    >
      <VictoryLine
        height={400} width={400}
        style={{
          data: { stroke: "#02555D" },
          parent: { border: "1px solid #ccc"}
        }}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 }
        }}
        data={[
          { x: 1, y: 2 },
          { x: 2, y: 3 },
          { x: 3, y: 5 },
          { x: 4, y: 4 },
          { x: 5, y: 7 }
        ]}
      />
    </VictoryChart>

    <VictoryChart height={400} width={400}
                  domainPadding={{ x: 50, y: [0, 100] }}
      // scale={{ x: "Ошибки" }}
    >
      <VictoryBar
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 }
        }}
        data={[
          { x: 'PROM', y: 2 },
          { x: 'PSI', y: 1 },
          { x: 'IFT', y: 3 },
        ]}
      />
    </VictoryChart>

    <VictoryPie
      height={400} width={400}
      style={{ labels: {fill: "black", fontSize: 20, fontWeight: "bold"}}
      }
      colorScale={["green", "tomato" ]}
      data={[
        { x: "Успешные", y: 95 },
        { x: "Отклоненные", y: 5 },
      ]}
      // animate={{style: {
      //     duration: 2000,
      //     onLoad: {duration: 1000}
      //   }
      // }}

    />
    <Image style={{height: normalize(330), width: normalize(330)}} source={{uri: gif}} />
  </WrapperDescriptionCard>;
});

export default function Cabinet() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(cards[0]);
  const onSelect = (selectedIndex) => {
    setSelectedIndex(selectedIndex);
    setSelectedCard(cards[selectedIndex]);
  };

  return (
    <View style={{flex: 1, overflow: 'hidden'}}>
      <TabView
        tabBarStyle={{overflow: 'hidden'}}
        selectedIndex={selectedIndex}
        onSelect={onSelect}>
        {tabCards}
      </TabView>
      <View style={{flex: 1, marginVertical: 10}}>
        {selectedCard}
      </View>
    </View>
  );
}

Cabinet.navigationOptions = {
  header: null,
};

