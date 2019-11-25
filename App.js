import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationTab } from 'react-native-ui-kitten';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';
import { Router, Route, Link, Switch } from "./navigation/react-router";
import {Text} from 'react-native-ui-kitten';
import HomeScreen from './screens/HomeScreen';
import BusinessScreen from './screens/BusinessScreen';
import UserPanel from './screens/UserPanel';
import TendersParticipating from './screens/TendersParticipating';
import styles from './styles';
const Integrator = () => <Link to={'/'}><Text>integrator</Text></Link>;
const Government = () => <Link to={'/'}><Text>government</Text></Link>;
const User = () => <Link to={'/'}><Text>user</Text></Link>;


export default function App() {
  return (
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <Router>
          <SafeAreaView style={styles.appContainer}>
            <UserPanel />
            <Switch>
            <Route exact path="/business" component={BusinessScreen} />
            <Route exact path="/business/tenders" component={TendersParticipating} />
            <Route exact path="/integrator" component={Integrator} />
            <Route exact path="/government" component={Government} />
            <Route exact path="/user" component={User} />
            <Route component={HomeScreen} />
            </Switch>
          </SafeAreaView>
        </Router>
      </ApplicationProvider>
    );
  };
