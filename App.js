
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-url-polyfill/auto';
import { View, Button, Text } from 'react-native'
import HomeScreen from "./Screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailScreen from "./Screens/ProductDetailScreen";
import CartScreen from "./Screens/CartScreen";
import { Provider } from "react-redux";
import store from "./store";
import BottomTab from "./Components/BottomTab";

// function HomeScreen({ navigation }) {
//   return (

//   );
// }

// function RightDrawerContent() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>This is the right drawer</Text>
//     </View>
//   );
// }

const LeftDrawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


function LeftDrawerScreen() {
  return (
    <LeftDrawer.Navigator
      id="LeftDrawer"

      screenOptions={{
        headerShown: false

      }}>
      <LeftDrawer.Screen name="Home" component={HomeScreen} />
      <LeftDrawer.Screen name="Cart" component={CartScreen} />
    </LeftDrawer.Navigator>
  );
}





// function Menu (){
//   return
//  (
//   <Stack.Navigator>
//   <Stack.Screen name="Home" component={HomeScreen}/>
//   <Stack.Screen name="pROD" component={ProductDetailScreen}/>
// </Stack.Navigator>
//  )

// }

// const RightDrawer = createDrawerNavigator();

// function RightDrawerScreen() {
//   return (
//     <RightDrawer.Navigator
//       id="RightDrawer"
//       drawerContent={(props) => <RightDrawerContent {...props} />}
//       screenOptions={{
//         drawerPosition: 'right',
//         headerShown: false,
//       }}>

//       <RightDrawer.Screen name="HomeDrawer" component={LeftDrawerScreen} />
//     </RightDrawer.Navigator>
//   );
// }



export default function App() {
  return (
    <NavigationContainer>

      <Provider store={store}>

        <LeftDrawerScreen />

      </Provider>
      <BottomTab />


    </NavigationContainer>
  );
}
