import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import { buttonColor } from '../res/colors';

const MainButton = ({ title, style, onPress }) => {
  return <TouchableOpacity style={[styles.button, style]} onPress={onPress}><Text style={styles.text}>{title}</Text></TouchableOpacity>;
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    marginHorizontal: 20,
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