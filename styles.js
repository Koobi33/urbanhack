import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize/src/index';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
    //   marginTop: normalize(10)
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
    fontSize: normalize(20),
  },
  userPanel: {
    flex: 1,
    zIndex: 2,
    width: '100%',
    position: 'absolute',
    top: 0,
    backgroundColor: '#000',
    height: normalize(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
