import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { View } from 'react-native'
import Agua from '../screens/Aprendiendo/Agua'

const Stack = createStackNavigator();

function AprendiendoStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Test' component={Agua} />
        </Stack.Navigator>
    )
}

export default function AprendiendoStackNavigation() {
    return <AprendiendoStack />
}