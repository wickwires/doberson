import React, {useCallback} from 'react';
import {Text, TouchableOpacity} from 'react-native';

// Functional Component Button
const Button = ({onPress, style, children}) => {
  const handlePress = useCallback(
    (e) => {
      if (onPress) {
        onPress(e);
      }
    },
    [onPress],
  );

  return (
    <TouchableOpacity onPress={handlePress} style={style}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
