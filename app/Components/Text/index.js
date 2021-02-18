import React from 'react';
import {Text as NativeText} from 'react-native';

import styles from './styles';

const Text = (props) => {
  const defaultStyle = [styles.defaultText];
  if (props.style) {
    defaultStyle.push(props.style);
  }
  return (
    <NativeText {...props} style={defaultStyle}>
      {props.children}
    </NativeText>
  );
};

export default Text;
