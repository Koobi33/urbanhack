import {StyleSheet, Platform} from 'react-native';
import normalize from 'react-native-normalize/src/index';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#1D1E1F',
      marginTop: normalize(30)
  },
  appRouterContainer: {
    flex: 1,
    marginTop: normalize(30),
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  scrollContainer: {
    justifyContent: 'flex-start',
    marginTop: normalize(100),
  },
  simpleText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '500',
    textDecorationLine: 'none',
    fontSize: normalize(23),
    fontFamily: 'Courier New'
  },
  simpleTextLK: {
    color: '#03ad79',
    textAlign: 'right',
    fontWeight: '800',
    textDecorationLine: 'none',
    fontSize: normalize(23),
    fontFamily: 'Courier New',
  },
  simpleTextMoney: {
    color: '#f6eb8c',
    textAlign: 'center',
    fontWeight: '800',
    textDecorationLine: 'none',
    fontSize: normalize(20),
    fontFamily: 'Courier New',
    marginLeft: normalize(5),
  },

  userPanel: {
    flex: 1,
    zIndex: 2,
    width: '100%',
    flexDirection: 'row',
    position: Platform.OS === 'web' ? 'fixed' : 'absolute',
    top: 0,
    backgroundColor: '#1d1e1f',
    height: normalize(60),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: normalize(30),
    paddingRight: normalize(20),
  },

  roleDescriptionCard: {
    alignItems: 'center',
    flex: 1,
    width: normalize(340),
    borderRadius: normalize(10),
    borderWidth: 1,
    margin: normalize(10)
  },
  card: {
    flex: 1,
    alignItems: 'center',
    height: normalize(250),
    width: normalize(340),
    margin: normalize(10),
  },
  cardImage: {
    // flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    width: normalize(200),
    height: normalize(170),
    // padding: normalize(5),
  },
  homeButton: {
    borderRadius: normalize(50),
    borderWidth: normalize(1),
    borderColor: '#19ADA2',
    width: normalize(60),
    height: normalize(60),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    bottom: normalize(15),
    right: normalize(15),
    backgroundColor: '#03AD79',
    shadowColor: "#03AD79",
    shadowOffset: {
      width: normalize(0),
      height: normalize(0),
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
  },
  helpButton: {
    borderRadius: normalize(50),
    zIndex: 1,
    borderWidth: normalize(1),
    borderColor: '#19ADA2',
    width: normalize(60),
    height: normalize(60),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    bottom: normalize(15),
    left: normalize(15),
    backgroundColor: '#03AD79',
    shadowColor: "#03AD79",
    shadowOffset: {
      width: normalize(0),
      height: normalize(0),
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
  },
  marketCard: {
    width: normalize(120),
    height: normalize(120),
    borderWidth: normalize(5),
    borderColor: '#03ad79',
    borderRadius: normalize(5),
    margin: normalize(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  marketCardText: {
    color: '#fff',
    fontFamily: 'Courier New',
    // fontSize: normalize(35),
    fontWeight: 800,
    fontSize: normalize(20),
  },
  productName : {
    color: '#f6eb8c',
    // textAlign: 'center',
    fontWeight: '800',
    textDecorationLine: 'none',
    fontSize: normalize(24),
    fontFamily: 'Courier New',
    marginLeft: normalize(5),
  },
  productCompany: {
    color: '#fff',
    // textAlign: 'center',
    fontWeight: '800',
    textDecorationLine: 'none',
    fontSize: normalize(22),
    fontFamily: 'Courier New',
    marginLeft: normalize(5),
    marginVertical: normalize(15),
  },
  productDescription: {
    color: '#fff',
    // textAlign: 'center',
    fontWeight: '500',
    textDecorationLine: 'none',
    fontSize: normalize(20),
    fontFamily: 'Courier New',
    marginLeft: normalize(5),
  },
  futureBut: {
    // height: normalize(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: normalize(5),
    borderColor: '#03AD79',
    borderRadius: normalize(18),
  },
  futureButText: {
    fontFamily: 'Courier New',
    fontSize: normalize(22),
    color: '#f6eb8c',
    fontWeight: '800',
  },
});

export default styles;
