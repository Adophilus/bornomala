import { View, Text } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'


const DigitsTab = () => {
  return (
    <View>
      <Text>DigitsTab</Text>
     
<Icon
  name='rowing' />

<Icon
  name='g-translate'
  color='#00aced' />

<Icon
  name='sc-telegram'
  type='evilicon'
  color='#517fa4'
/>

<Icon
  reverse
  name='ios-american-football'
  type='ionicon'
  color='#517fa4'
/>

<Icon
  raised
  name='heartbeat'
  type='font-awesome'
  color='#f50'
  size = '20'
  onPress={() => console.log('hello')} />
    </View>
  )
}

export default DigitsTab