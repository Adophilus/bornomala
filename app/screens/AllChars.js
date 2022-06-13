import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
//import ItemDetails from './ItemDetails';
import CircleCard from "../components/Cards/CircleCard";
import ItemDetailsFormation from "./ItemDetailsFormation";

const AllChars = ({ name, Caption, itemimageUrl, onPress, navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log("daaaaaattttttaaaa", data);
  useEffect(() => {
    // fetch('https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json')
    fetch("https://bornomala.righthemisphere.in/items/Character") //?filter[type]=number')
      .then((response) => response.json())
      .then((json) => setData(json))
      // .then(() =>console.log(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  //console.log('letters4mapi',Letters4mAPI)

  // const lettr = data.filter(element => element.type ==="letter")
  // console.log('objects having letter',lettr)

  const Stack = createNativeStackNavigator();

  const asseturl = (id) => `https://bornomala.righthemisphere.in/assets/${id}`;

  return (
    // <View style={styles.card}>
    // {isLoading ? <Text>Loading...</Text> :(
    // ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>

    <FlatGrid
      itemDimension={100}
      data={data.data}
      style={styles.gridView}
      keyExtractor={({ id }, index) => id}
      renderItem={({ item, index }) => (
        <>
          <TouchableOpacity
            onPress={() =>
              navigation.push("ItemDetailsFormation", {
                itemid: item.id,
                itemname: item.name,
                itemurl: item.thumbnail,
                othrp: "anything i want",
                next: data.data[index + 1],
                prev: data.data[index - 1],
              })
            }
          >
            <CircleCard itemname={item.name} />
          </TouchableOpacity>

          {/* <Text style={{color:'red'}}

                    onPress= {() => navigation.navigate('ItemDetails',{
                                                    itemname : item.name})}                            
                               
                  >
                                             */}

          {/* <Text style={{color:'black'}}>{item.section}</Text>
                  <Text style={{color:'blue'}}>{item.type}</Text>
                  
                  <Image 
                  
                  style={styles.image} 
                  // uri = {asseturl(item.thumbnail)}
                   source={{uri: asseturl(item.thumbnail)}} />
     
                    */}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 170,
    height: 250,
    borderRadius: 5,
  },
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 5,
    height: 15,
  },
});

export default AllChars;
