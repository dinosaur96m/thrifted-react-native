import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'
import { textShadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function Profile ({navigation}) {

    return(
        <View>
        <Text>This is the Profile Page</Text>
        {/* <Button title="Store" onPress={navigation.navigate('Store')}/> */}
        </View>
    )
}