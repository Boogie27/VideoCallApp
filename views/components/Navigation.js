import React from 'react'
import { View, Text } from 'react-native'
import Contacts from '../../views/components/Contacts'
import CallScreen from '../../views/screens/CallScreen'
import IncomingCall from '../../views/screens/IncomingCall'
import CallAccept from '../../views/screens/CallAccept'
import LoginScreen from '../../views/screens/LoginScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function Navigation() {
    const screenOptions = {
        headerShown: false
    }


    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptions}>
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="Contacts" component={Contacts} />
                <Stack.Group screenOptions={screenOptions}>
                    <Stack.Screen name="CallScreen" component={CallScreen} />
                    <Stack.Screen name="IncomingCall" component={IncomingCall} />
                    <Stack.Screen name="CallAccept" component={CallAccept} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}





