import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {VictoryChart, VictoryLine, VictoryTheme, VictoryBar} from 'victory';
import styles from "../../styles";
import {normalize} from "react-native-elements";

export default function StatisticBoughtModal(props) {
  const {modalVisible, setModalVisible} = props;
  return (
    <View style={{backgroundColor: '#1d1e1f', flex: 1, justifyContent: 'flex-start', overflow: 'scroll'}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={[styles.productCompany, {width: normalize(300), marginLeft: normalize(20)}]}>Статистика</Text>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <View style={[styles.futureBut, {width: normalize(60), height: normalize(40), marginTop: normalize(10), marginRight: normalize(10)}]}>
            <Text style={styles.futureButTextSmall}>Закрыть</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={[styles.productDescription, {marginLeft: normalize(20)}]}>Влияние на конверсию</Text>
      <VictoryChart
        theme={VictoryTheme.material}
      >
        <VictoryLine
          height={400} width={400}
          style={{
            data: { stroke: "#f6eb8c" },
            parent: { border: "2px solid #03AD79"},
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

      <Text style={[styles.productDescription, {marginLeft: normalize(20)}]}>Потраченные средства по месяцам</Text>
      <VictoryChart height={400} width={400}
                    domainPadding={{ x: 50, y: [0, 100] }}
                    theme={VictoryTheme.material}
                    style={{
                      data: { stroke: "#f6eb8c", fill: '#f6eb8c' },
                      labels: {
                        fontSize: 15,
                        fill: "#c43a31"
                      }
                    }}
      >
        <VictoryBar
          style={{
            data: { stroke: "#f6eb8c", fill: '#f6eb8c' },
            labels: {
              fontSize: 15,
              fill: "#c43a31"
            }
          }}
          data={[
            { x: 'сент', y: 2 },
            { x: 'окт', y: 1 },
            { x: 'ноя', y: 3 },
          ]}
        />
      </VictoryChart>
    </View>
  );
}
