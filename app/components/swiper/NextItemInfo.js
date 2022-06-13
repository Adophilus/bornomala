import { StyleSheet, Text, View, Button } from 'react-native'
import React , {useContext} from 'react';

import {DataContext} from '../../Context/DataContext';


const NextItemInfo = ({route, navigation}) => {
    const { ii, next } = route.params;
    


  const data = useContext(DataContext)
  const ni = data.data[ii+1]
  const pi = data.data[ii-1]
  


  return (
      
    <View style={{justifyContent:'center',alignItems:'center', flex:1, color:'yellow'}}>

    <Text> currrent item{ii.name}</Text>

          {/* <Text>nn index:{nextindex.id}</Text>  */}

          <Text>ii.name :{ii.name}</Text>
         
          <Text>ii.type :{ii.type}</Text>
         <Text>ii.type :{ni}</Text>
         <Text>next :{next.name}</Text>



          
         

        
   
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
    ii: ni+1,
            
   })}
/>

</View>
</View> 
</View>
  )
}

export default NextItemInfo

const styles = StyleSheet.create({
    fixToText: {
        paddingTop:350,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
      },
    
})