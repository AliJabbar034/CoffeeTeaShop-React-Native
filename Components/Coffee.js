import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Coffee = ({ drinks }) => {
  const navigation = useNavigation()
  const onPressingCard = () => {

  }

  return (
    <View className='flex-1 justify-center  w-full ml-1 pb-32 relative'>
      <FlatList
        numColumns={2}

        keyExtractor={(item) => item._id}
        data={drinks}
        renderItem={({ item }) => (
          <TouchableOpacity className=' w-40 h-56   bg-gray-300 mx-2 my-2 rounded-lg relative' onPress={() => navigation.navigate('ProductDetail', {
            _id: item._id
          })} >

            <Image source={{
              uri: item?.mainImage?.asset?.url
            }}
              className=' h-full w-full rounded-lg relative'
              resizeMode='contain'
            />

            <View className='absolute bottom-0 items-center justify-center  bg-transparent bg-gray-300 h-14 w-full rounded-b-lg'>
              <Text className=' text-center items-center justify-center  text-sm font-semibold
        '>{item.title}</Text>
              <Text className='font-semibold'>INR {item.price}</Text>

            </View>

          </TouchableOpacity>
        )}

      />
    </View>
  )
}

export default Coffee