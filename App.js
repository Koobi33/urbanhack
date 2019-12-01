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
import MarketList from "./components/MarketList";
import Market from "./components/Market";

const Integrator = () => <Link to={'/'}><Text>integrator</Text></Link>;
const Government = () => <Link to={'/'}><Text>government</Text></Link>;
const User = () => <Link to={'/'}><Text>user</Text></Link>;


export default function App() {
  const [money, setMoney] = useState(5000);
  const [competition, setCompetition] = useState('junior');
  const localCompetition = localStorage.getItem('competition');
  useEffect(() => {
    console.log(localCompetition);
    if (!localCompetition || localCompetition === '') {
      localStorage.setItem('competition', 'junior');
      setCompetition(localCompetition);
    }
    else {
      console.log(localCompetition, 'else');
      setCompetition(localCompetition);
    }
  }, []);

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
                <Route exact path="/marketlist" component={MarketList} />
                <Route exact path="/market" component={Market} />
                <Route exact path="/ai" component={Market} />
                <Route exact path="/iaas" component={Market} />
                <Route exact path="/paas" component={Market} />
                <Route exact path="/licenses" component={Market} />
                <Route component={HomeScreen} />
              </Switch>
            </View>
            <ToHome/>
            {competition === 'middle' || competition === 'junior' ? <HelpButton/> : null}
          </SafeAreaView>
        </Router>
      </MoneyContext.Provider>
    </ApplicationProvider>
  );
};
