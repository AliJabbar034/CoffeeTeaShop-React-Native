import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ProductDetail = ({ data }) => {

  const [colr, setColr] = useState(false);

  const size = data?.size;

  const changeColor = () => {
    setColr(!colr);
  }

  return (
    <View className='pl-7'>

      {/* Title and Description */}

      <View>
        <Text className='text-2xl font-bold '>{data?.title}</Text>

        <Text className='pr-3 text-[16px] text-gray-500 from-stone-500 '>{data?.description}</Text>
      </View>


      {/* Image  */}

      <Image
        source={{ uri: data?.mainImage?.asset?.url }}
        className=' h-72 mt-4  mr-7 rounded-2xl'

        resizeMode='cover'
      />

      <View className='mt-5'>
        <Text className='text-lg font-bold'>Size</Text>
        <View className='flex-row space-x-2 mt-2'>
          <FlatList
            numColumns={3}
            data={size}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <TouchableOpacity className=' h-12 w-12 items-center justify-center  rounded-full mr-2' onPress={changeColor} style={colr ? styles.stColor : styles.ntPreses}>
                <Text>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
          {/* <TouchableOpacity className='bg-gray-200 h-12 w-12 items-center justify-center  rounded-full'>
         <Text>M</Text>
        </TouchableOpacity>
        <TouchableOpacity className='bg-gray-200 h-12 w-12 items-center justify-center  rounded-full'>
         <Text>L</Text>
        </TouchableOpacity> */}
        </View>
      </View>


    </View>
  )
}

export default ProductDetail


const styles = StyleSheet.create({
  stColor: {
    backgroundColor: '#fa984d'
  },
  ntPreses: {
    backgroundColor: '#f0f2f0'
  }
})
