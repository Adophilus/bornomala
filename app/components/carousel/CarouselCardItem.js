import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import data from "./data";
import LettersTab from "../BottomTabs/LettersTab";

export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselCardItem = ({ item, index, itemurl }) => {
  const x = `https://bornomala.righthemisphere.in/assets/${itemurl}`;

  return (
    <View style={styles.container} key={index}>
      <Text>{x}</Text>
      <Text>{itemurl}</Text>

      <Image source={{ uri: x }} style={styles.image} />
      {/* <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingTop: 20,
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 20,
  },
});

export default CarouselCardItem;
