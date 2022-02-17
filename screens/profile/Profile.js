import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'
import { textShadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { FontAwesome5, Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import { bounce } from 'react-native/Libraries/Animated/Easing';

export default function Profile ({navigation}) {

    return(
        <View style={styles.profileScreen}>
            <View style={styles.header}>
                <Ionicons name="person-circle-outline" size={150} color="#f2cbbf"/>
                <Text style={styles.username}>User's Profile</Text>
            </View>
            <View style={styles.buttonContainer}>
                <FontAwesome5.Button
                    name="store"
                    style={styles.navButton}
                    onPress={ () => navigation.navigate('Store')}>Your Store</FontAwesome5.Button>
                <Feather.Button
                    name="shopping-cart"
                    style={styles.navButton}
                    onPress={() => navigation.navigate('Cart')}
                >Your Cart</Feather.Button>
                <MaterialCommunityIcons.Button
                    name="tag-plus"
                    title="Sell"
                    style={styles.navButton}
                    onPress={() => navigation.navigate('New Item')}
                >Sell</MaterialCommunityIcons.Button>
            </View>
        </View>
    )
}

let styles = StyleSheet.create({
    profileScreen: {
        flex: 1
    },
    header: {
        flex: 2,
        alignItems: 'center',
    },
    username: {
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 15
    },
    buttonContainer: {
        flex: 3,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    navButton: {
        height: 60,
        backgroundColor: '#f28361',
        textAlign: 'center'
    }
})