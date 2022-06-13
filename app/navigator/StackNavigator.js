import { createStackNavigator } from "@react-navigation/stack";
import Letters from "../components/Cards/Letters";
import HomeScreen from "../screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Letters" component={Letters} />
  </Stack.Navigator>
);

export default StackNavigator;
