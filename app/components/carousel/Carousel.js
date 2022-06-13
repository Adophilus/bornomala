import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import React from "react";
import CarouselCards from "./CarouselCards";

const Carousel = () => {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <CarouselCards />
      </SafeAreaView>
      <CarouselCards />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
});
