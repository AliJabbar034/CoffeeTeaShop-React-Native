import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import TopHeader from '../Components/TopHeader'
import { fetchDrinks, fetchTea } from '../sanity'
import { useDispatch, useSelector } from 'react-redux'
import { dinksActions, teaActions } from '../store/index'
import Coffee from '../Components/Coffee'
import Tea from '../Components/Tea'
const TeaScreen = () => {
  const dispatch = useDispatch();
  const teas = useSelector((state) => state.teas.teas)

  useEffect(() => {
    try {
      fetchTea().then(res =>

      (
        dispatch(teaActions.setTeas(res)),
        console.log(teas)
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
        <Tea teas={teas} />
      </ScrollView>




    </View>
  )
}

export default TeaScreen;