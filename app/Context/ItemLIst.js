import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { DataContext, MyContext } from "./DataContext";
import { useEffect } from "react";

function ItemList(props) {
  const NewContext = useContext(MyContext);

  return (
    <View>
      <Text>{NewContext}</Text>
    </View>
  );
}
export default ItemList;
