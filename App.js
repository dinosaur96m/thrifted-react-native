import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

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

const Tab = createBottomTabNavigator()



export default function App({navigation}) {
  return (
    <NavigationContainer>
        {/* note from React Nav Docs:  */}
        {/* Sometimes we might want to pass additional props to a screen. We can do that with 2 approaches:

        1. Use React context and wrap the navigator with a context provider to pass data to the screens (recommended). */}
      <Tab.Navigator>
         {/* Items */}
        <Tab.Screen name="Browse" component={Browse}/>
        <Tab.Screen name="EditItem" component={EditItem}/>
        <Tab.Screen name="Item" component={Item}/>
        <Tab.Screen name="NewItem" component={NewItem}/>
        {/* Profile */}
        <Tab.Screen name="Cart" component={Cart}/>
        <Tab.Screen name="Profile" component={Profile}/>
        <Tab.Screen name="Store" component={Store}/>
      </Tab.Navigator>
    </NavigationContainer>
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
