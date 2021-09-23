import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ScannerScreen from './src/screens/ScannerScreen';
import DetailsScreen from './src/screens/DetailsScreen';

import { headerColor, secondaryHeaderColor } from './src/res/colors';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: headerColor,
          },
          headerTintColor: 'white',
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
        />
        <Stack.Screen 
          name="Scanner" 
          component={ScannerScreen}
          options={{
            headerStyle: {
              backgroundColor: secondaryHeaderColor,
            }
          }} 
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen}
          options={{
            headerStyle: {
              backgroundColor: headerColor,
            }
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;