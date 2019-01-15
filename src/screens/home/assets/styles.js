import { StyleSheet, Dimensions } from 'react-native';

let height = Dimensions.get('screen').height;
let width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  iconLogout: {
    fontSize: 20,
    color: '#fff'
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  header: {
    backgroundColor: '#221E1F',
    borderBottomWidth: 0
  },
  octacatContainer: {
    flex: 1,
    backgroundColor: '#221E1F',
  },
  octacat: {
    width,
    height,
    resizeMode: 'contain',
    backgroundColor: '#221E1F'
  }
});

export default styles;