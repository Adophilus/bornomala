import React, { useEffect, useState } from 'react';
import {  Image,StyleSheet, TouchableOpacity, onPress, Text, View } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import ItemDetailsFormation from '../../screens/ItemDetailsFormation';
import CarouselCardItem from '../carousel/CarouselCardItem';
import SwipeItems from '../swiper/SwipeItems';
// import Context from '../../Context/MyContext'
import SwiperApp from '../swiper/SwiperApp';
import { DataContext } from '../../Context/DataContext'
import { useContext } from 'react';
import FlatListSwipe from '../swiper/FlatListSwipe';


const LettersTab = ({name,itemindex, Caption, imageUrl,  onPress, item, itemurl, navigation}) => {
  const [isLoading, setLoading] = useState(true);
  // const [data, setData] = useState([]);
  const data = useContext(DataContext)

  
    
 
  const asseturl = id => `https://bornomala.righthemisphere.in/assets/${id}`
  

  return (
    // <View style={styles.card}>
          // {isLoading ? <Text>Loading...</Text> :( 
          // ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
              
              <FlatGrid
                itemDimension={130}
                data={data.data}
                style={styles.gridView}
      
                keyExtractor={({ id }, index) => id}
                renderItem={({item, index}) => (
                  <>
                  {/* <Text style={{color:'black'}}>id : {item.id}</Text> */}
                  <Text style={{color:'black'}}>indedeex: {index}</Text>
                 
                  <Text style={{color:'black'}}>{item.name}</Text>
                  <Text style={{color:'black'}}>{item.section}</Text>
                  <Text style={{color:'blue'}}>{item.type}</Text>
                  
                   
                  <TouchableOpacity 
                  onPress= {() => navigation.push('SwiperApp',{
                                                                
                                                               //ii:index,
                                                               ii:data.data[index],
                                                       //item:item.id,
                                                      // itemname:item.name,
                                                      // itemurl: item.thumbnail,
                                                      // othrp:'anything i want',
                                                      
                                                       next: data.data[index+1],
                                                       prev: data.data[index-1]


               }   ) }  
                                            
              >

                  <Image 
                  
                  style={styles.image} 
                  uri = {asseturl(item.thumbnail)}
                  source={{uri: asseturl(item.thumbnail)}} />
     
   </TouchableOpacity> 
                     
                
                  </>
                )}
              />
         
      );
    };  



 const styles = StyleSheet.create({
   image:{
     width:170,
     height:250,
     borderRadius:5


   },
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },

  });


export default LettersTab

