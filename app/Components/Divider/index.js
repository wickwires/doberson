import React from 'react';
import {View, StyleSheet} from 'react-native';

const ViewStyleProps = () => {
  return <View style={styles.dividerStyle} />;
};

const styles = StyleSheet.create({
  dividerStyle: {
    marginTop: 5,
    marginBottom: 15,
    marginHorizontal: 20,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
});

export default ViewStyleProps;
