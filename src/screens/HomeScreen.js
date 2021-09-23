import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';

import { backgroundColor } from '../res/colors';
import MainButton from '../components/MainButton';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent={true} />
      <View style={styles.imageContainer}>
        <Image source={require('../res/img/taxfree_logo.png')} style={styles.image} />
      </View>
      <Text style={styles.brandText}>Tax Free Market</Text>
      <Text style={styles.descritpionText}>World-famous EUROPEN brands from any store without VAT - SALES TAX</Text>
      <MainButton title='Scan barcode' onPress={() => navigation.navigate('Scanner')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: backgroundColor,
  },
  imageContainer: {
    height: 200,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
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