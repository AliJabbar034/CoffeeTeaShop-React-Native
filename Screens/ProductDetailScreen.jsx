import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Icon from 'react-native-feather'
import ProductDetail from '../Components/ProductDetail';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { cartAction } from '../store';


const ProductDetailScreen = ({ route }) => {

  const navigation = useNavigation();

  const drinks = useSelector((state) => state.drinks.drinks);

  const teas = useSelector((state) => state.teas.teas);

  const cartItems = useSelector((state) => state.cartItems.cartItems);

  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [add, setAdd] = useState(false);
  const [match, setMatch] = useState(false);
  const [qty, setQty] = useState(1);

  const { _id } = route.params;

  useEffect(() => {

    const drink = drinks?.filter(item => item._id === _id)[0];
    const tea = teas?.filter(item => item._id === _id)[0]


    if (drink) {
      setMatch(true);
      setData(drink)
    }
    if (tea) {
      setMatch(true)
      setData(tea)
    }

  }, [])


  useEffect(() => {
    const checkAdede = cartItems?.filter(item => item.id === _id)[0]
    if (checkAdede) {
      setAdd(true)
      console.log('already');
    }

  }, [cartItems])


  const setIncrease = () => {

    setQty(qty + 1)

  }
  const setDecrease = () => {

    if (qty === 1 || qty < 0) {
      return setQty(1)
    }
    setQty(qty - 1);
  }

  const cartHandler = () => {


    dispatch(cartAction.addToCart({
      id: data?._id,
      title: data?.title,
      price: data?.price,
      qty: qty,
      image: data?.mainImage?.asset?.url
    }))







    // {
    //   title:data?.title,
    //   price:data?.price,
    //   qty:qty,
    //   image: data?.mainImage?.asset?.url
    // }
  }





  return (
    <View className='pt-10 flex-1 relative'>
      <View className='flex-row items-center justify-between px-5 pb-5'>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon.ChevronLeft color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon.MoreVertical color={'black'} />
        </TouchableOpacity>
      </View>
      {match && <ProductDetail data={data} />}


      {/* Cart */}


      <View>
        <Text className='pl-7 text-lg font-bold'>Quantity</Text>
        <View className='pl-7 flex-row space-x-2 mt-2'>
          <TouchableOpacity className='bg-gray-300 h-10 w-10 rounded-full items-center justify-center' onPress={setIncrease}>
            <Icon.Plus color={'#fa984d'} />
          </TouchableOpacity>
          <Text className='font-bold mt-3'>{qty}</Text>
          <TouchableOpacity className='bg-gray-300 h-10 w-10 rounded-full items-center justify-center' onPress={setDecrease}>
            <Icon.Minus color={'#fa984d'} />
          </TouchableOpacity>
        </View>

        <View className='px-7 mt-4 flex-row justify-between'>
          <View className=' space-y-3'>
            <Text className='text-gray-400'>Price</Text>

            <Text className='font-bold text-xl'>IDR {data?.price}</Text>
          </View>
          <TouchableOpacity className=' bg-[#fa984d] h-14 w-14 justify-center items-center rounded-full' onPress={cartHandler} disabled={add === true} style={add && styles.added} >
            <Icon.ShoppingBag color={'white'} />
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
  added: {
    opacity: 0.50
  }
})