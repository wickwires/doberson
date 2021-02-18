import 'react-native-gesture-handler';
import React from 'react';
import {Button, View, TouchableOpacity, Text} from 'react-native';

import InputText from '../../Components/InputText';

import styles from './style';

const Login = ({navigation}) => {
  const navToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View>
        {/* <Image style={styles.image} source={require('./assets/log2.png')} /> */}
        <Text style={styles.header}>doberson</Text>
      </View>
      <View style={styles.bodyContainer}>
        <InputText />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Text style={styles.forgotButton}>Forgot Password?</Text>
        </TouchableOpacity>
        <Button style={styles.loginButton} title="Login" onPress={navToHome} />
        {/* <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default Login;
