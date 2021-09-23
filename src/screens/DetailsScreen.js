import React from 'react';
import { StatusBar, View, Text, Image, StyleSheet } from 'react-native';

import { backgroundColor } from '../res/colors';
import MainButton from '../components/MainButton';

const DetailsScreen = ({ route }) => {
  const { data } = route.params;
  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent={true} />
      <View style={styles.brandImageContainer}>
        <Image source={require('../res/img/taxfree_logo.png')} style={styles.brandImage} />
      </View>
      <View>
        <View style={styles.productImageContainer}>
          <Image source={require('../res/img/adidas-ultraboost.jpg')} style={styles.productImage} />
        </View>
        <Text style={styles.title}>Aidas Yeezy 500 Enflames</Text>
        <Text style={styles.price}>€ 20.20</Text>
      </View>
      <View>
        <MainButton title='Add to cart' style={styles.addToCartButton} onPress={() => console.log('Add to cart button pressed')}></MainButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: backgroundColor,
  },
  
  // brand image
  brandImageContainer: {
    height: 100,
  },
  brandImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
  },

  // product details
  productImageContainer: {
    alignSelf: 'center',
    height: 250,
    width: 250,
    marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },  
  productImage: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  title: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  price: {
    fontSize: 25,
    textAlign: 'center',
  },

  // add to cart button
  addToCartButton: {
    marginBottom: 50,
  },
});

export default DetailsScreen;