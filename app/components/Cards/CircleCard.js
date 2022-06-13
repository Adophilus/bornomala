import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


// CircleCard for display All chars


const CircleCard = ( {itemname} ) => {
  return (
    <View style={styles.circle} >
       <Text style={styles.text} >{itemname}</Text>
  
    </View>
  )
}




export default CircleCard

const styles = StyleSheet.create({
  circle: {
    width: 60,
    height: 60,
    borderRadius: 100 / 2,
    backgroundColor: "skyblue",
    paddingLeft:5
  },

  text: {
    width: 100,
    height: 100,
    paddingLeft:18,
    paddingTop:15
  },


})