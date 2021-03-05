import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import 'react-native-gesture-handler';
import React, {useState, useEffect, useCallback} from 'react';
import {Button, View, TouchableOpacity, Text} from 'react-native';
import useAsyncEffect from 'use-async-effect';

import InputText from '../../Components/InputText';

import {getFirestoreObject} from '../../utils/firestore';

import styles from './style';

const Login = ({navigation}) => {
  // State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  console.log(user);
  // Functions
  const onAuthStateChanged = useCallback(
    (userObject) => {
      setUser(userObject);
      if (initializing) {
        setInitializing(false);
      }
    },
    [initializing],
  );

  const login = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        navigation.navigate('Home');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
  };

  // Effects
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [onAuthStateChanged]);

  useAsyncEffect(async () => {
    const result = await getFirestoreObject();
    console.log('hi :', result);
  }, []);

  // useEffect(() => {});

  if (initializing) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View>
        {/* <Image style={styles.image} source={require('./assets/log2.png')} /> */}
        <Text style={styles.header}>doberson</Text>
      </View>
      <View style={styles.bodyContainer}>
        <InputText setEmail={setEmail} setPassword={setPassword} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Text style={styles.forgotButton}>Forgot Password?</Text>
        </TouchableOpacity>
        <Button style={styles.loginButton} title="Login" onPress={login} />
        {/* <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default Login;
