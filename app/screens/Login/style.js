import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'space-around',
  },
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 200,
    paddingBottom: 10,
  },
  buttonContainer: {
    flex: 3,
  },
  forgotButton: {
    marginVertical: 10,
  },
  loginButton: {
    justifyContent: 'center',
  },
  // loginButton: {
  //   width: 200,
  //   // borderRadius: 25,
  //   height: 50,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   marginTop: 40,
  //   // backgroundColor: '',
  // },
});

export default styles;
