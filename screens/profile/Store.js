import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'


export default function Store ({navigation}) {

    return(
        <View>
            <Text>Your Store Here</Text>
            <Button 
                title="Sell New Item"
                onPress={() => navigation.navigate('New Item')}
            />
            <Button 
                title="Item Details"
                onPress={() => navigation.navigate('Item')}
            />
            <Button 
                title="Edit Item"
                onPress={() => navigation.navigate('EditItem')}
            />
        </View>
    )
}