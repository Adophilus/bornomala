import React,{useContext,useCallback, useRef } from 'react';
import { View, StyleSheet,SafeAreaView, Image, StatusBar, FlatList, Text, Dimensions } from 'react-native';
import { DataContext } from '../../Context/DataContext';
import { useFocusEffect } from '@react-navigation/native'


export default function FlatListSwipe({route,navigation}){

  const itemindex = route.params;

  const DATA = useContext(DataContext) 
  console.log(DATA.length);
  const datalength = DATA.length

  //const SplicedData = DATA.splice(itemindex)
  const window = Dimensions.get('window');

  getItemLayout = (datalength, index) => ({
    length: datalength,
    offset: datalength * index,
     index
  });
  

  const asseturl = id => `https://bornomala.righthemisphere.in/assets/${id}`
 

 
    return (
      <SafeAreaView style={styles.container}>
          <FlatList
          horizontal         
          data={DATA.data}

          keyExtractor={({ id, itemindex } ) => id}
          getItemLayout={getItemLayout}
          initialScrollIndex={itemindex}

          
          renderItem={({item, itemindex}) => (
                  <>
                   <Text style={{color:'black'}}>iitemindex: {itemindex}</Text>
                 
                  {/* <Text style={styles.name}>{item.name}</Text> */}
                <View style={styles.View} > 

                  <Image 
                  
                  style={styles.image} 
                  uri = {asseturl(item.thumbnail)}
                  source={{uri: asseturl(item.thumbnail)}} />
                 
                 </View>  
                </>

)}
/> 
          
        
        </SafeAreaView>
      
    );
  }

  
  
  const styles = StyleSheet.create({
    View:{
      padding: 16,
     margin: 10,
    


    },
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight ||0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 30,
      marginVertical: 8,
      marginHorizontal: 16,
    },

    name:{
      color:'black', 
      alignItems:'center',
      justifyContent:'center'

    },
    title: {
      fontSize: 32,
    },
    image:{
      width:250,
      height:350,
      borderRadius:5,
      paddingTop:20,
      paddingBottom:30
    },

  });