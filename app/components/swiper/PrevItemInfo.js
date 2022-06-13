import { StyleSheet, Text, View, Button } from 'react-native'
import React , {useContext} from 'react';
import {DataContext} from '../../Context/DataContext';


const PrevItemInfo = ({route, navigation}) => {
    const { ii } = route.params;
    const nextindex = data.data[ii+1]
  const previndex = data.data[ii-1]
  


  return (
      
    <View style={{justifyContent:'center',alignItems:'center', flex:1, color:'yellow'}}>

    <Text>itemindeX</Text>

        <Text>itemindex {ii}</Text>
        <Text>item index:{ii.id}</Text>
          <Text>item index:{ii.name}</Text>
         

        
   
  <View>
  <View style={styles.fixToText}> 
    
<Button
    title='Prev'
    onPress= {() => navigation.push('PrevItemInfo',{ 
        ii: previndex,
                           


                        }) }    />
    

<Button
title='Next'
  onPress={() => navigation.push('NextItemInfo',{ 
    ii: nextindex,
   })}
/>

</View>
</View> 
</View>
  )
}

export default PrevItemInfo

const styles = StyleSheet.create({
    fixToText: {
        paddingTop:350,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
      },
    
})