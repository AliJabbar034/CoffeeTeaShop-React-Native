import { View, Text, FlatList, ScrollView, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as Icon from 'react-native-feather'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { cartAction } from '../store';
const CartScreen = () => {
  const navigation = useNavigation();
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const [subtTotal, setSubTotal] = useState([]);
  const [sbtotalValue, setSbTotalValue] = useState(0);



  useEffect(() => {
    cartItems?.map((item) => {
      const sutotal = Number(item.price * item?.qty)
      setSubTotal((prevstate) => [...prevstate, sutotal])
      console.log(item?.qty);

    },

    )


  }, []);

  useEffect(() => {
    var sbtotal = 0;
    var sbtotal = subtTotal?.reduce((total, crnValue) =>
      total + crnValue, sbtotal
    )
    setSbTotalValue(sbtotal)
  }, [subtTotal])





  return (
    <View className='pt-12  bg-gray-200 flex-1 pb-8' >


      {/* header  */}


      <View className='flex-row justify-between items-center mx-7'>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon.ChevronLeft color={'black'} />
        </TouchableOpacity>
        <View className='relative  h-10 w-10'>
          <Icon.ShoppingCart color={'black'} className='mt-3 items-center justify-center' />

        </View>
        <Text className='absolute top-0 right-0  text-white bg-black rounded-full h-6  w-6 text-center justify-center items-center'>{cartItems.length}</Text>
      </View>

      {/* Item Section   */}

      {

        cartItems.length > 0 ?

          <ScrollView className='w-full flex-1'>

            <View className='flex space-y-4'>
              <FlatList
                data={cartItems}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                  <CartItemRender item={item} />
                )}
              />
            </View>

            <View className='mx-6 flex-row space-x-2  items-center mt-3'>
              <View className='flex-1'>
                <TextInput placeholder='Promo Code' className='py-3  bg-white  pl-2 rounded' />
              </View>
              <View>
                <TouchableOpacity className='bg-black rounded'>
                  <Text className='text-white py-4 break-words px-2'>Promo Code</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Total */}

            <View>
              <View className='flex-row items-center justify-between mx-6 mt-5'>
                <Text className='font-bold text-lg  text-gray-500'>Subtotal</Text>
                <Text className='font-bold text-lg  text-gray-500'>IDR {sbtotalValue}</Text>
              </View>
              <View className='flex-row items-center justify-between mx-6 mt-5'>
                <Text className='font-bold text-lg text-gray-500'>Delivery Charges </Text>
                <Text className='font-bold text-lg  text-gray-500'>IDR 10</Text>
              </View>
              <View className='flex-row items-center justify-between mx-6 mt-5'>
                <Text className='font-bold text-lg  text-gray-500'>Total</Text>
                <Text className='font-bold text-lg  text-gray-500'>IDR {sbtotalValue + 10}</Text>
              </View>
            </View>

            <TouchableOpacity className='mt-6 bg-black py-5 items-center justify-center mx-7 rounded-full'>
              <Text className='text-white font-bold'>Proceed to Chectout</Text>
            </TouchableOpacity>






          </ScrollView>

          :

          <View className='items-center justify-center  flex-1'>
            <Text className=' text-center font-bold text-xl'>
              No Item in Cart Yet
            </Text>
          </View>
      }





    </View>

  )
}

export default CartScreen


const rightSwipeActions = () => {
  return (
    <View className='h-full w-24 items-center justify-center bg-white rounded'>
      <TouchableOpacity>
        <Icon.Trash color='black' />
      </TouchableOpacity>
    </View>
  );
};


export const CartItemRender = ({ item }) => {
  const dispatch = useDispatch()

  const swipeFromRightOpen = (id) => {

    dispatch(cartAction.deleteItem(id))
  }
  return (

    <Swipeable
      renderRightActions={rightSwipeActions}
      onSwipeableOpen={() => swipeFromRightOpen(item.id)}>


      <View className='flex-row px-6 w-full items-center my-1'>
        <View className='rounded-xl flex items-center p-2 w-16 h-16 justify-center '>
          <Image
            source={{
              uri: item.image
            }}
            className='h-full w-full rounded break-words'
          />
        </View>
        <View className='flex items-center space-y-2 ml-3' >
          <View className='flex items-start justify-center'>
            <Text className='font-semibold text-lg break-words w-36'>{item.title}</Text>
            <Text className='text-lg font-bold text-black '>IDR {item.qty * item.price}</Text>
          </View>

        </View>


        <View>
          <Text className='pt-1 font-semibold text-sm justify-end text-end space-x-6'>Quantity {item.qty}</Text>
          <View className='flex-row space-x-2  mt-4 border rounded-full border-gray-500'>
            <TouchableOpacity >
              {/* onPressIn={ ()=> setNewData((prev)=>[...prev,{qty:item.qty, id:item.id}])} */}
              <Icon.Plus color={'black'} />
            </TouchableOpacity>

            <Text className='mt-1'>{item.qty}</Text>
            <TouchableOpacity>
              <Icon.Minus color={'black'} />
            </TouchableOpacity>
          </View>
        </View>


      </View>

    </Swipeable>

  )

}