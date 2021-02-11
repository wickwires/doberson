import React from 'react';
import {Button, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './style';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.body}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default Home;
