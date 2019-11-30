import {StyleSheet, Platform} from 'react-native';
import normalize from 'react-native-normalize/src/index';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
      marginTop: normalize(30)
  },
  appRouterContainer: {
    flex: 1,
    marginTop: normalize(30),
    borderTopLeftRadius: normalize(20),
    borderTopRightRadius: normalize(20),
    borderLeftWidth: 1,
    borderTopWidth: 2,
    borderRightWidth: 1,
    borderColor: 'black',
    paddingTop: normalize(7),
    paddingLeft: normalize(7),
    paddingRight: normalize(7),
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
    color: 'green',
    textAlign: 'center',
    fontWeight: '800',
    textDecorationLine: 'none',
    fontSize: normalize(18),
  },
  userPanel: {
    flex: 1,
    zIndex: 2,
    width: '100%',
    flexDirection: 'row',
    position: Platform.OS === 'web' ? 'fixed' : 'absolute',
    top: 0,
    backgroundColor: '#fff',
    height: normalize(40),
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  card: {
    alignItems: 'center',
    // justifyContent: 'space-around',
    height: normalize(250),
    width: normalize(340),
    // backgroundColor: '#17141d',
    borderRadius: normalize(10),
    borderWidth: 3,
    borderColor: "#03AD79",
    margin: normalize(10),

    shadowColor: "#03AD79",
    shadowOffset: {
      width: normalize(6.5),
      height: normalize(5.7),
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,

  },
  cardAngle: {
    position: 'absolute',
    display: 'flex',
    width: 0,
    height: 0,
    left: -3,
    top: -3,
    borderTopWidth: normalize( 100),
    borderTopColor: "#03AD79",
    borderRightWidth: normalize( 100),
    borderRightColor: 'transparent',
  },
  innerCardAngle: {
    position: 'absolute',
    width: 0,
    height: 0,
    left: -3,
    top:  -3,
    borderTopWidth: normalize( 96),
    borderTopColor: 'white',
    borderRightWidth: normalize(96),
    borderRightColor: 'transparent',
  },
  roleDescriptionCard: {
    alignItems: 'center',
    flex: 1,
    width: normalize(340),
    borderRadius: normalize(10),
    borderWidth: 1,
    margin: normalize(10)
  },
  cardText: {
    fontSize: normalize(20),
    color: 'white',
    fontWeight: '800',
    zIndex: 3,
  },
  cardImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: normalize(10),
    width: '100%',
  },
  cardImage_Image: {
    borderRadius: normalize(7),
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

  }
});

export default styles;
