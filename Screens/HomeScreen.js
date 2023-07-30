
import React from 'react'


import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ProductDetailScreen from './ProductDetailScreen';
import CartScreen from './CartScreen';
import CoffeeScreen from './CoffeeScreen';
import TeaScreen from './TeaScreen';
const Stack = createNativeStackNavigator();
const HomeScreen = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='Coffee' component={CoffeeScreen} />
      <Stack.Screen name='ProductDetail' component={ProductDetailScreen} />
      <Stack.Screen name='Cart' component={CartScreen} />

      <Stack.Screen name='Tea' component={TeaScreen} />
    </Stack.Navigator>
  )
}

export default HomeScreen