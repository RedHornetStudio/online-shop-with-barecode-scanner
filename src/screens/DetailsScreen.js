import React, { useState, useEffect } from 'react';
import { StatusBar, View, Text, Image, StyleSheet } from 'react-native';
import { StackActions } from '@react-navigation/routers';

import { backgroundColor } from '../res/colors';
import MainButton from '../components/MainButton';
import barcodeLookup from '../apis/barcodeLookup';

const DetailsScreen = ({ navigation, route }) => {
  const { data } = route.params;

  const [product, setProduct] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    getProduct(data);
  }, []);

  const getProduct = async data => {
    const response = await barcodeLookup.get('', {
      params: {
        barcode: data,
      },
    }).catch(e => {
      setError(e.message);
    });

    if(response) {
      console.log(response.data.products[0]);
      setProduct(response.data.products[0]);
    }
  };

  if(product) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent={true} />
        <View style={styles.brandImageContainer}>
          <Image source={require('../res/img/taxfree_logo.png')} style={styles.brandImage} />
        </View>
        <View>
          <View style={styles.productImageContainer}>
            <Image source={{ uri: product.images[0] }} style={styles.productImage} />
          </View>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{`${product.stores[0].currency_symbol} ${product.stores[0].price}`}</Text>
        </View>
        <View>
          <MainButton title='Add to cart' style={styles.addToCartButton} onPress={() => console.log('Add to cart button pressed')}></MainButton>
        </View>
      </View>
    );
  }

  if(error) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent={true} />
        <View style={styles.brandImageContainer}>
          <Image source={require('../res/img/taxfree_logo.png')} style={styles.brandImage} />
        </View>
        <View>
          <Text style={styles.noProductText}>{error}</Text>
        </View>
        <View>
          <MainButton title='Scan barcode' style={styles.addToCartButton} onPress={() => navigation.dispatch(StackActions.replace('Scanner'))}></MainButton>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.loadingContainer}>
      <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent={true} />
      <Text style={styles.loadingText}>Loading...</Text>
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
  noProductText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40,
  },

  // add to cart button
  addToCartButton: {
    marginBottom: 50,
  },

  // loading screen
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: backgroundColor,
  },
  loadingText: {
    justifyContent: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DetailsScreen;