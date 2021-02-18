import React from 'react';
import {Button, Image, View, Text} from 'react-native';
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
      <View style={styles.messageHeaderContainer}>
        {/* <Image
          style={styles.userImage}
          source={{
            uri:
              'https://i.insider.com/5ba15375e361c01c008b5cf7?width=700&format=jpeg&auto=webp',
          }}
        /> */}
        <Text style={styles.messageNameText}>Jane Doe</Text>
        <Text style={styles.time}>10:00AM</Text>
      </View>
      <Text style={styles.messagePreviewText}>Message Preview</Text>
      <Divider />
      <Button
        title="Selected Message"
        onPress={() => navigation.navigate('Selected Message')}
      />
    </View>
  );
};

export default Home;
