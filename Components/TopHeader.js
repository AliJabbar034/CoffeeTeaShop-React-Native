import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import * as Icon from 'react-native-feather'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native'
import { useSelector } from 'react-redux'


const TopHeader = () => {
  const cartItems = useSelector((state) => state.cartItems.cartItems)
  const navigation = useNavigation();

  const [coffeeTxt, setCoffeeTxt] = useState(true);
  const [teaText, setTeaTxt] = useState(false)

  const onCoffeePress = () => {
    setCoffeeTxt(true);
    setTeaTxt(false);
    navigation.navigate('Coffee');

  }
  const onTeaPress = () => {
    setTeaTxt(true);

    navigation.navigate('Tea');
    setCoffeeTxt(false);

  }
  return (
    <View className='pt-14 '>
      <View className='flex-row items-center justify-between mx-8 relative'>

        <TouchableOpacity onPress={() => navigation.getParent('LeftDrawer').openDrawer()} >
          <Icon.AlignLeft color={'black'} />
        </TouchableOpacity>



        {/* <View className='relative  h-10 w-10'>
      <Icon.ShoppingCart color={'black'} className='mt-3 items-center justify-center'/>
      
      </View>
      <Text className='absolute top-0 right-0  text-white bg-black rounded-full h-6  w-6 text-center justify-center items-center pt-1'>1</Text>
     */}


        <TouchableOpacity onPress={() => navigation.navigate('Cart')} className='relative  h-10 w-10'>
          <Icon.ShoppingCart color={'black'} className='mt-3 ' />

        </TouchableOpacity>
        <Text className='absolute top-0 right-0  text-white bg-black rounded-full h-6  w-6 text-center justify-center items-center pt-1'>{cartItems.length}</Text>







      </View >


      <View className='mt-5 bg-[#b4b6b8] rounded-lg flex-row space-x-2 items-center justify-between py-1  w-75 mx-7 px-3'>

        <TextInput className='text-base font-semibold  py-1 text-[#555] '
          placeholder='Search'
        // value={searchedValue}
        // onChangeText={onChangeHandler}
        />
        <Icon.Search color='black' />
      </View>

      <View className='flex-row space-x-5 mt-5 mx-7 '>
        <TouchableOpacity onPress={onCoffeePress}  >
          <Text style={coffeeTxt && styles.txt}
            className='font-semibold text-sm'>Coffee</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onTeaPress}>
          <Text style={teaText ? styles.txt : styles.nrmlText} >
            Non Coffee
          </Text>
        </TouchableOpacity>
      </View>

      <Text className='mt-3 font-bold text-2xl mx-6'>Popular Drink</Text>

    </View>
  )
}



export default TopHeader;

const styles = StyleSheet.create({
  txt: {
    color: '#ab5e05',
    borderBottomColor: '#ab5e05',
    borderBottomWidth: 1,
    fontSize: 14,
    lineHeight: 20,

  },
  nrmlText: {


    fontSize: 14,
    lineHeight: 20,


  }
})