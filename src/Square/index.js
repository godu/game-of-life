import React from 'react';
import {View, TouchableHighlight} from 'react-native';

const Square = ({height, width, onPress, backgroundColor, children}) => (
  <TouchableHighlight
    onPress={ev => {
      console.log({ev});
      return true;
    }}
  
  >
    <View
      style={{
        width,
        height,
        backgroundColor
      }}
    >
      {children}
    </View>
  </TouchableHighlight>
);

Square.displayName = 'Square';

export default Square;
