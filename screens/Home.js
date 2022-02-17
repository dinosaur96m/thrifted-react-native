import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { textShadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import { Ionicons } from '@expo/vector-icons'

// import views
import Browse from './items/Browse'
import Profile from './profile/Profile'

const Tab = createBottomTabNavigator()

export default function Home({ navigation }) {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Browse') {
                        iconName = focused
                            ? 'md-shirt'
                            : 'md-shirt-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'md-person-circle' : 'md-person-circle-outline';
                    }
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Browse" component={Browse} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>

    )
}