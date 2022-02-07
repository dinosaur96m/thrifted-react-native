import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'
import { textShadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

export default function Browse ({navigation}) {

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Browse Items here</Text>
            <Button
            title="Go to item details"
            onPress={() => navigation.navigate('Item')}
            />
        </View>

    )
}