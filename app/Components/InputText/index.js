import React, {useState} from 'react';
import {View, TextInput, Keyboard, ScrollView} from 'react-native';

import styles from './style';

const InputText = ({setEmail, setPassword}) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            onChangeText={(email) => setEmail(email)}
            onBlur={Keyboard.dismiss}
          />
        </View>
      </ScrollView>
      <ScrollView>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
            onBlur={Keyboard.dismiss}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default InputText;
