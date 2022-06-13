import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, Text, View, Alert } from "react-native";
//import LandingPage from './app/screens/LandingPage';
//import HomeScreen from './app/components/screens/HomeScreen';
//import StackNavigator from './app/components/screens/navigator/StackNavigator';
import { NavigationContainer } from "@react-navigation/native";
//import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Letters from "./app/components/Cards/Letters";
import Feed from "./app/screens/Feed";
import ItemDetailsFormation from "./app/screens/ItemDetailsFormation";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import AllChars from "./app/screens/AllChars";
import CarouselCardItem from "./app/components/carousel/CarouselCardItem";
import Carousel from "./app/components/carousel/Carousel";

import { DataContext } from "./app/Context/DataContext";
import { useState, useEffect } from "react";
import SwiperApp from "./app/components/swiper/SwiperApp";
import FlatListSwipe from "./app/components/swiper/FlatListSwipe";
import NextItemInfo from "./app/components/swiper/NextItemInfo";
import PrevItemInfo from "./app/components/swiper/PrevItemInfo";

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Feed />

      {/* <Button
        title="Go to CArousel"
        onPress={() => navigation.navigate('Carousel')}
      /> */}
    </View>
  );
}

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://bornomala.righthemisphere.in/items/Character?filter[type]=letter"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      // .then(() =>console.log(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <DataContext.Provider value={data}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => ({
              //headerTitle: props => <LogoTitle {...props} />,
              headerRight: () => (
                <FontAwesome
                  name="dot-circle-o"
                  size={24}
                  color="black"
                  onPress={() => navigation.push("AllChars")}
                />
              ),
            })}
          />

          <Stack.Screen name="Letters" component={Letters} />
          <Stack.Screen name="Carousel" component={Carousel} />
          <Stack.Screen name="CarouselCardItem" component={CarouselCardItem} />

          <Stack.Screen name="SwiperApp" component={SwiperApp} />

          <Stack.Screen name="PrevItemInfo" component={PrevItemInfo} />
          <Stack.Screen name="NextItemInfo" component={NextItemInfo} />

          <Stack.Screen name="FlatListSwipe" component={FlatListSwipe} />

          <Stack.Screen
            name="Feed"
            component={Feed}
            options={({ navigation }) => ({
              //headerTitle: props => <LogoTitle {...props} />,
              headerRight: () => (
                <FontAwesome
                  name="dot-circle-o"
                  size={24}
                  color="black"
                  onPress={() => navigation.push("AllChars")}
                />
              ),
            })}
          />
          <Stack.Screen
            name="ItemDetailsFormation"
            component={ItemDetailsFormation}
          />

          <Stack.Screen name="AllChars" component={AllChars} />
        </Stack.Navigator>
      </NavigationContainer>
    </DataContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
