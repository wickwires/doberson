import React from 'react';
import {Button, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Divider from '../../Components/Divider';

import styles from './style';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.body}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Messages</Text>
      </View>
      <Divider />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default Home;
