import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SecondScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Second Screen</Text>
      <Button title="Go to ThirdScreen" onPress={() => navigation.navigate('Third')}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'blue'
  }
});

export default SecondScreen;