import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ThirdScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Third Screen</Text>
      <Button title="Go to Fourth Screen" onPress={() => navigation.navigate('Fourth')}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'green'
  }
});

export default ThirdScreen;
