import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

import React from "react";

import SwiperApp from "./SwiperApp";

const CardforSwipe = ({ ii }) => {
  // const prev = (ii)=>{
  //   <View>
  //     <Text>{ii}</Text>
  //   </View>
  // }

  // const next = (ii)=>{
  //   <View>
  //     <Text>{ii}</Text>
  //   </View>
  // }

  return (
    <View style={styles.container}>
      <Text>{ii}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: undefined,
    margin: 10,
  },
});

export default CardforSwipe;
