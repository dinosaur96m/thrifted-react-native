import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './screens/Home'
// import item screens
import Browse from './screens/items/Browse'
import EditItem from './screens/items/EditItem'
import Item from './screens/items/Item'
import NewItem from './screens/items/NewItem'

// import profile screens
import Cart from './screens/profile/Cart'
import Profile from './screens/profile/Profile'
import Store from './screens/profile/Store'
import { Button } from 'react-native-web'


// from ReactNav docs: "createNativeStackNavigator is a function that returns an object containing 2 properties: Screen and Navigator."
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
    
    <NavigationContainer>
        {/* note from React Nav Docs:  */}
        {/* Sometimes we might want to pass additional props to a screen. We can do that with 2 approaches:

        1. Use React context and wrap the navigator with a context provider to pass data to the screens (recommended). */}
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        {/* Items */}
        <Stack.Screen name="EditItem" component={EditItem}/>
        <Stack.Screen name="Item" component={Item}/>
        <Stack.Screen name="New Item" component={NewItem}/>
        {/* Profile */}
        <Stack.Screen name="Cart" component={Cart}/>
        <Stack.Screen name="Store" component={Store}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navBar: {
    flex: 1,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  navButton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
