import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import 'react-native-gesture-handler';
import React, {useState, useEffect, useCallback} from 'react';
import {Button, View, TouchableOpacity, Text} from 'react-native';
import useAsyncEffect from 'use-async-effect';

import InputText from '../../Components/InputText';

import {
  getFirestoreObject,
  setFirestoreObject,
  createOrUpdateUser,
} from '../../utils/firestore';
import {signout} from '../../utils/firebase';

import styles from './style';

const Login = ({navigation}) => {
  // State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Functions
  const onAuthStateChanged = useCallback(
    async (userObject) => {
      // console.log('user: ', userObject);
      if (userObject) {
        console.log('setting firestore user');
        await createOrUpdateUser(userObject, userObject.uid);
      }
      setUser(userObject);
      if (initializing) {
        setInitializing(false);
      }
    },
    [initializing],
  );

  const login = async () => {
    try {
      const userResp = await auth().signInWithEmailAndPassword(email, password);
      console.log('user resp: ', userResp);
      console.log('User account signed in!');
      // Stores user in firestore database
      await createOrUpdateUser(userResp, userResp.user.uid);
      navigation.navigate('Home');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
      console.error(error);
    }
  };

  const signup = async () => {
    try {
      const userResp = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      console.log('user resp: ', userResp);
      console.log('User account created & signed in!');
      // Stores user in firestore database
      await createOrUpdateUser(userResp, userResp.user.uid);
      navigation.navigate('Home');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
      console.error(error);
    }
  };

  const logout = async () => {
    await signout();
    console.log('User account signed out!');
  };

  // Effects
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [onAuthStateChanged]);

  // useAsyncEffect(async () => {
  //   const result = await getFirestoreObject();
  //   console.log('hi :', result);
  // }, []);

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
        <Button style={styles.loginButton} title="Signup" onPress={signup} />
        <Button style={styles.loginButton} title="Login" onPress={login} />

        <Button style={styles.loginButton} title="Logout" onPress={logout} />
        {/* <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default Login;
