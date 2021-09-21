import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const FourthScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Fourth Screen</Text>
      <Button title="Go to Fifth Screen" onPress={() => navigation.navigate('Fifth')}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'yellow'
  }
});

export default FourthScreen;