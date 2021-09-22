import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import { buttonColor } from '../res/colors';

const MainButton = ({ text, onPress }) => {
  return <TouchableOpacity style={styles.button} onPress={onPress}><Text style={styles.text}>{text}</Text></TouchableOpacity>;
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    backgroundColor: buttonColor,
  },
  text: {
    fontSize: 15,
    color: 'white',
  },
});

export default MainButton;