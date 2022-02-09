import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button} from 'react-native'


export default function Cart ({navigation}) {

    return(
        <View>
            <Text>Your Cart here</Text>
            <Button 
                title="Item Details"
                onPress={() => navigation.navigate('Item')}
            />
        </View>
    )
}