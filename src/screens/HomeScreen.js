import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { backgroundColor } from '../res/colors';
import MainButton from '../components/MainButton';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.brandText}>Tax Free Market</Text>
      <Text style={styles.descritpionText}>World-famous EUROPEN brands from any store without VAT - SALES TAX</Text>
      <MainButton text='Scan barcode' onPress={() => navigation.navigate('Scanner')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: backgroundColor,
  },
  brandText: {
    textAlign: 'center',
    paddingBottom: 20,
    fontSize: 30
  },
  descritpionText: {
    textAlign: 'center',
    paddingBottom: 20,
    fontSize: 20
  }
});

export default HomeScreen;