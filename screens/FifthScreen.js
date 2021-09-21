import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const FifthScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Fifth Screen</Text>
      <Button title="Go to Third Screen" onPress={() => navigation.navigate('Third')}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'orange'
  }
});

export default FifthScreen;