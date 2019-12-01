import React, { useState, useEffect } from 'react';
import { View, SafeAreaView } from 'react-native';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';
import { Router, Route, Link, Switch } from "./navigation/react-router";
import {Text} from 'react-native-ui-kitten';
import HomeScreen from './components/HomeScreen';
import BusinessScreen from './components/BusinessScreen';
import UserPanel from './components/UserPanel';
import TendersParticipating from './components/TendersParticipating';
import Cabinet from './components/Cabinet';
import { MoneyContext } from './context/moneyContext';
import styles from './styles';
import ToHome from './components/ToHome';
import HelpButton from './components/HelpButton';
import Upload from './components/Upload';
import Partnership from './components/Partnership';

const Integrator = () => <Link to={'/'}><Text>integrator</Text></Link>;
const Government = () => <Link to={'/'}><Text>government</Text></Link>;
const User = () => <Link to={'/'}><Text>user</Text></Link>;


export default function App() {
  const [money, setMoney] = useState(0);
  const [competition, setCompetition] = useState('junior');

  useEffect(() => {
    const localCompetition = localStorage.getItem('competition');
    if (!!localCompetition && localCompetition !== '') {
      console.log(localCompetition, 'test');
      setCompetition(localCompetition);
    }
  }, []);

  useEffect(() => {
    console.log(competition)
  }, [competition]);
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <MoneyContext.Provider value={{ money, setMoney, competition, setCompetition }}>
        <Router>
          <SafeAreaView style={styles.appContainer}>
            <UserPanel />
            <View style={styles.appRouterContainer}>
              <Switch>
                <Route exact path="/business" component={BusinessScreen} />
                <Route exact path="/business/tenders" component={TendersParticipating} />
                <Route exact path="/integrator" component={Integrator} />
                <Route exact path="/government" component={Government} />
                <Route exact path="/user" component={User} />
                <Route exact path="/cabinet" component={Cabinet} />
                <Route exact path="/upload" component={Upload} />
                <Route exact path="/partnership" component={Partnership} />
                <Route component={HomeScreen} />
              </Switch>
            </View>
            <ToHome/>
            <HelpButton/>
          </SafeAreaView>
        </Router>
      </MoneyContext.Provider>
    </ApplicationProvider>
  );
};
