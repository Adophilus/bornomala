import { View, Text, Button, StyleSheet, Image, Alert } from "react-native";
import React from "react";
import LettersTab from "../components/BottomTabs/LettersTab";

export default function ItemDetailsFormation({ route, navigation }) {
  const { itemid, itemname, othrp, itemurl, next, prev } = route.params;

  const x = `https://bornomala.righthemisphere.in/assets/${itemurl}`;
  console.log("cccc", route.params);

  return (
    <View>
      <View style={styles.container}>
        <Text>Charactername: {itemname}</Text>

        <Text>Charactername: {itemid}</Text>

        {/* <Text>item thumbnail urlx1: {x}</Text>
      <Text>item thumbnail url: {itemurl}</Text>
     
      <Text>item thumbnail urlXxXx: {`https://bornomala.righthemisphere.in/assets/${itemurl}`}</Text> */}

        <Image
          style={styles.image} //{{width:300, height:'50%', flex: 1}}
          source={{ uri: x }}
        />

        <Button
          title="See The Formation"
          color="orange"
          onPress={() => Alert.alert("Button with adjusted color pressed")}
          style={{
            width: 20,
            height: "50%",
          }}
        ></Button>

        <View>
          <Button
            title="Nexttt"
            color="purple"
            style={styles.nextbutton}
            onPress={() => Alert.alert("Next Button pressed")}
          ></Button>

          <Button
            title="prev"
            color="purple"
            onPress={() => Alert.alert("prev Button pressed")}
            style={styles.prevbutton}
          ></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: "60%",
    width: 300,
    paddingTop: -1,
  },

  container: {
    position: "relative",
    backgroundColor: "dodgerblue",
    justifyContent: "space-between",
    display: "flex",
    alignItems: "center",
    height: "200%",
    width: "100%",
    textAlign: "left",
    paddingBottom: 150,
  },

  nextbutton: {
    position: "relative",
    marginBottom: 100,
    width: 100,
    backgroundColor: "red",
    borderRadius: 50,
    paddingLeft: "10%",
  },

  prevbutton: {
    position: "relative",
    marginBottom: 60,
  },
});
