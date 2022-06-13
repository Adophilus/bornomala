import React , {useContext} from 'react';

 import {DataContext} from '../../Context/DataContext';

import { View, Text, StyleSheet, Button,onPress, FlatList, Alert } from 'react-native';
import CardforSwipe from './CardforSwipe';
import FlatListSwipe from './FlatListSwipe'



function SwiperApp({route,navigation}) {
  
  

  const {ii} = route.params;
  const {ni} = route.params;


  

  const data = useContext(DataContext)
  
  const previndex = data.data[ii-1]
  
  const nextindex = data.data[ii+1]
  

  


  return (

    <View style={{justifyContent:'center',alignItems:'center', flex:1}}>


          
         
           

         {/* <Text>{ii}</Text> */}

          <Text>current item id -- id:{ii.id}</Text>
          <Text>Current item name -- name:{ii.name}</Text>
         
         {/* u cam add flatlist here */}

         
         
         
         
          
         

         
         
        
    <View style={styles.fixToText}> 
    
    <Button
        title='Prev'
        onPress= {() => navigation.push('PrevItemInfo',{ 
          ii: data.data[ii-1],
          //itemindex: itemindex-1,
                               


                            }) }    />
        
    
  <Button
    title='Next'
      onPress={() => navigation.push('NextItemInfo',{ 
        ii:data.data[ii+1],
        
        ni:data.data[ii+1]
        
         
        //itemindex: itemindex+1,
       })}
/>


 </View> 

 </View>
 

    );

}


export default SwiperApp;

const styles = StyleSheet.create({
  fixToText: {
    paddingTop:350,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },

 
   
 
    



})


