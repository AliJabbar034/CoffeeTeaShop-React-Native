import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import TopHeader from '../Components/TopHeader'
import { fetchDrinks } from '../sanity'
import { useDispatch, useSelector } from 'react-redux'
import { dinksActions } from '../store/index'
import Coffee from '../Components/Coffee'
const CoffeeScreen = () => {
  const dispatch = useDispatch();
  const drinks = useSelector((state) => state.drinks.drinks)

  useEffect(() => {
    try {
      fetchDrinks().then(res =>

      (
        dispatch(dinksActions.setDrinks(res))
        // console.log(drinks)
      )
        // {
        // //
        //  for (var i = 0;  i < res.length; i ++){



        //  }



        //  }



      );
    } catch (error) {
      console.log('Eroo durin');
    }

  }, [])

  return (
    <View className='mb-16 pb-10 relative'>
      <TopHeader />

      <ScrollView>
        <Coffee drinks={drinks} />
      </ScrollView>




    </View>
  )
}

export default CoffeeScreen