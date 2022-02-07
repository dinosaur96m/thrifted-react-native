import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// import item views
import Browse from './screens/items/Browse'
import EditItem from './screens/items/EditItem'
import Item from './screens/items/Item'
import NewItem from './screens/items/NewItem'

// import profile views
import Cart from './screens/profile/Cart'
import Profile from './screens/profile/Profile'
import Store from './screens/profile/Store'


// from ReactNav docs: "createNativeStackNavigator is a function that returns an object containing 2 properties: Screen and Navigator."
const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Browse" component={Browse}/>
        <Stack.Screen name="Profile" component={Profile}/>
      </Stack.Navigator>
      {/* <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View> */}
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
});
