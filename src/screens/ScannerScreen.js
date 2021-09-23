import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import { secondaryBackgroundColor } from '../res/colors';
import MainButton from '../components/MainButton';

const ScannerScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const askForCameraPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  useEffect(() => {
    setTimeout(askForCameraPermission, 300);
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    navigation.navigate('Details', { data });
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' backgroundColor='transparent' translucent={true} />
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' backgroundColor='transparent' translucent={true} />
        <Text style={styles.text}>Access to camera denied</Text>
        <MainButton title={'Allow '} onPress={askForCameraPermission} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent={true} />
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: secondaryBackgroundColor,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    paddingBottom: 20,
    color: 'white',
  },
});

export default ScannerScreen;