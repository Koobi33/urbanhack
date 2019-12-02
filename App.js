import React, { useState, useEffect } from 'react';
import { View, SafeAreaView } from 'react-native';
import { mapping, dark as darkTheme } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';
import { Router, Route, Switch } from "./navigation/react-router";
import HomeScreen from './components/Screens/HomeScreen';
import UserPanel from './components/HelpingComponents/UserPanel';
import Cabinet from './components/Screens/Cabinet';
import { MoneyContext } from './context/moneyContext';
import styles from './styles';
import Partnership from './components/Screens/Partnership';
import MarketList from "./components/Screens/MarketList";
import Market from "./components/Screens/Market";
import ProductCard from "./components/Screens/ProductCard";
import useInterval from '@use-it/interval';
import Chat from './components/Screens/Chat'

export default function App() {

  const [money, setMoney] = useState(50000);
  const [competition, setCompetition] = useState('junior');
  const localCompetition = localStorage.getItem('competition');
  const [activeProducts, setActiveProducts] = useState([{id: 100, product: 'start container', toPay: 0, isActive: true }]);
  const [boughtProducts, setBoughtProducts] = useState([]);

  useEffect(() => {
    if (!localCompetition || localCompetition === '') {
      localStorage.setItem('competition', 'junior');
      setCompetition(localCompetition);
    }
    else {
      setCompetition(localCompetition);
    }
  }, []);

  useInterval(() => {
    const perSecondCost = activeProducts.filter((prod) => prod.isActive === true).reduce((a, b) => a + b.toPay, 0);
    setMoney(money => money - perSecondCost);
  }, 1000);


  return (
   <ApplicationProvider mapping={mapping} theme={darkTheme}>
      <MoneyContext.Provider value={{ money, setMoney, competition, setCompetition, activeProducts, setActiveProducts, boughtProducts, setBoughtProducts }}>
        <Router>
          <SafeAreaView style={styles.appContainer}>
            <UserPanel />
            <View style={styles.appRouterContainer}>
              <Switch>
                <Route exact path="/cabinet" component={Cabinet} />
                <Route exact path="/partnership" component={Partnership} />

                <Route exact path="/market" component={Market} />
                <Route exact path="/ai" component={Market} />
                <Route exact path="/iaas" component={Market} />
                <Route exact path="/paas" component={Market} />
                <Route exact path="/licenses" component={Market} />

                <Route exact path="/marketlist" component={MarketList} />

                <Route exact path="/product/:id" component={ProductCard} />

                <Route exact path="/chat" component={Chat} />

                <Route component={HomeScreen} />
              </Switch>
            </View>
          </SafeAreaView>
        </Router>
      </MoneyContext.Provider>
    </ApplicationProvider>
  );
};
