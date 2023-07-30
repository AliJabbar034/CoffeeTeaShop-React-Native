import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-feather'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
const BottomTab = () => {
  const navigation = useNavigation();
  const [presed, setPresed] = useState({
    home: true,
    cart: false,
    favourt: false,
    user: false
  })

  const pressHandler = () => {
    navigation.navigate('Coffee')
    const home = { ...presed };
    home.home = true
    home.cart = false
    setPresed(home);
  }

  const pressCartHandler = () => {
    navigation.navigate('Cart');
    const cart = { ...presed }
    cart.cart = true
    cart.home = false
    setPresed(cart)
  }
  return (
    <View className='absolute bottom-4 bg-white  mx-8  items-center justify-center rounded-full'>
      <View className=' flex-row items-center justify-center py-2 space-x-10  w-full px-4'>
        <TouchableOpacity style={presed.home && styles.preseed} onPress={pressHandler}>
          <Icon.Home color={'black'} />
        </TouchableOpacity>

        <TouchableOpacity style={presed.cart && styles.preseed} onPress={pressCartHandler} >
          <Icon.ShoppingBag color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity >
          <Icon.Heart color={'black'} />
        </TouchableOpacity>

        <TouchableOpacity >
          <Icon.User color={'black'} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default BottomTab


const styles = StyleSheet.create({
  preseed: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#b5adac'

  }
})