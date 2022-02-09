import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { textShadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

// import views
import Browse from './items/Browse'
import Profile from './profile/Profile'

const Tab = createBottomTabNavigator()

export default function Home ({navigation}) {

    return(
            <Tab.Navigator>
                <Tab.Screen name="Browse" component={Browse}/>
                <Tab.Screen name="Profile" component={Profile}/>
            </Tab.Navigator>

    )
}